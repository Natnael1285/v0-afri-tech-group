"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit2, Trash2, Save, X, Upload, ExternalLink, Image, Loader2, AlertCircle, RefreshCw } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { dashboardApi, type Project } from "@/lib/dashboard-api"

export function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editId, setEditId] = useState<string | null>(null)
  const [formData, setFormData] = useState<{ name: string; description: string; link: string; photo: string } | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [isUploadingImage, setIsUploadingImage] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await dashboardApi.projects.list()
      setProjects(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch projects")
    } finally {
      setLoading(false)
    }
  }

  const startEdit = (project: Project) => {
    setEditId(project.id)
    setFormData({ 
      name: project.name,
      description: project.description,
      link: project.link || "",
      photo: project.photo || "📁"
    })
    setStatusMessage(null)
  }

  const startCreate = () => {
    const newProject: Project = {
      id: "new",
      name: "",
      description: "",
      link: "",
      photo: "📁",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setProjects([...projects, newProject])
    startEdit(newProject)
  }

  const cancelEdit = () => {
    setEditId(null)
    setFormData(null)
    setProjects(projects.filter(p => p.id !== "new"))
  }

  const uploadImage = async (base64Data: string): Promise<string> => {
    try {
      console.log("Starting image upload...")
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          imageData: base64Data,
          folder: "projects",
        }),
      })

      const responseData = await response.json()

      if (!response.ok) {
        console.error("Upload response error:", responseData)
        throw new Error(responseData.message || `Upload failed with status ${response.status}`)
      }

      if (!responseData.url) {
        throw new Error("Upload succeeded but no URL returned")
      }

      console.log("Image uploaded successfully, URL:", responseData.url)
      return responseData.url
    } catch (err) {
      console.error("Image upload error:", err)
      throw err
    }
  }

  const saveProject = async () => {
    if (!formData || !editId) return
    if (!formData.name.trim() || !formData.description.trim()) {
      setError("Name and description are required")
      return
    }

    setIsSaving(true)
    setError(null)
    setStatusMessage(null)

    try {
      const isNew = editId === "new"
      let photoUrl: string | null = null

      // If it's a base64 image, upload it first
      if (isBase64Image(formData.photo)) {
        try {
          photoUrl = await uploadImage(formData.photo)
          console.log("Image uploaded successfully:", photoUrl)
        } catch (uploadErr) {
          console.error("Image upload failed:", uploadErr)
          setError(`Failed to upload image: ${uploadErr instanceof Error ? uploadErr.message : "Unknown error"}`)
          setIsSaving(false)
          return
        }
      } else if (formData.photo && formData.photo.startsWith("http")) {
        // Already a URL, use it directly
        photoUrl = formData.photo
      } else {
        // It's an emoji or empty, set to null
        photoUrl = null
      }
      
      // Prepare link - validate URL if provided, but allow empty
      let linkValue: string | null = null
      if (formData.link && formData.link.trim()) {
        const trimmedLink = formData.link.trim()
        // Add http:// if no protocol is specified
        let finalLink = trimmedLink
        if (!trimmedLink.startsWith("http://") && !trimmedLink.startsWith("https://")) {
          finalLink = `https://${trimmedLink}`
        }
        
        try {
          // Validate URL
          new URL(finalLink)
          linkValue = finalLink
        } catch {
          setError("Please enter a valid URL for the project link (or leave it empty)")
          setIsSaving(false)
          return
        }
      }
      
      const payload = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        link: linkValue,
        photo: photoUrl,
      }

      console.log("Saving project with payload:", { ...payload, photo: photoUrl ? "URL provided" : "null" })

      if (isNew) {
        const saved = await dashboardApi.projects.create(payload)
        setProjects(projects.map(p => p.id === "new" ? saved : p))
        setStatusMessage("Project created successfully")
      } else {
        const saved = await dashboardApi.projects.update(editId, payload)
        setProjects(projects.map(p => p.id === editId ? saved : p))
        setStatusMessage("Project updated successfully")
      }

      setEditId(null)
      setFormData(null)
    } catch (err) {
      console.error("Error saving project:", err)
      const errorMessage = err instanceof Error ? err.message : "Failed to save project"
      setError(errorMessage)
      setStatusMessage(null)
    } finally {
      setIsSaving(false)
    }
  }

  const deleteProject = async (id: string) => {
    if (id === "new") {
      setProjects(projects.filter(p => p.id !== id))
      return
    }

    setIsDeleting(id)
    setError(null)

    try {
      await dashboardApi.projects.delete(id)
      setProjects(projects.filter(p => p.id !== id))
      setStatusMessage("Project deleted successfully")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete project")
    } finally {
      setIsDeleting(null)
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Reset file input for next selection
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }

    processFile(file)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const removeImage = () => {
    if (formData) {
      setFormData({ ...formData, photo: "📁" })
    }
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0]
    if (file) {
      // Create a synthetic event to reuse handleImageUpload
      const syntheticEvent = {
        target: {
          files: [file],
        },
      } as React.ChangeEvent<HTMLInputElement>
      
      handleImageUpload(syntheticEvent)
    }
  }

  const processFile = (file: File) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError("Please select a valid image file (JPG, PNG, GIF, etc.)")
      return
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024 // 5MB in bytes
    if (file.size > maxSize) {
      setError("Image file is too large. Please select an image smaller than 5MB")
      return
    }

    setError(null)
    setIsUploadingImage(true)
    setUploadProgress("Reading image...")

    const reader = new FileReader()
    
    reader.onload = (e) => {
      const base64 = e.target?.result as string
      if (formData) {
        setFormData({ ...formData, photo: base64 })
        setUploadProgress(null)
        setIsUploadingImage(false)
        setStatusMessage("Image loaded successfully. Click Save to upload.")
      }
    }

    reader.onerror = () => {
      setError("Failed to read the image file. Please try again.")
      setIsUploadingImage(false)
      setUploadProgress(null)
    }

    reader.readAsDataURL(file)
  }

  // Check if photo is base64 image or emoji
  const isBase64Image = (photo: string) => {
    return photo.startsWith('data:image/')
  }

  const renderPhoto = (photo: string | null | undefined, size: string = "text-5xl") => {
    if (!photo) return <div className={`${size} mb-3`}>📁</div>
    if (isBase64Image(photo) || photo.startsWith('http')) {
      return (
        <img 
          src={photo} 
          alt="Project" 
          className="w-20 h-20 rounded-lg object-cover border-2 border-border"
        />
      )
    }
    return <div className={`${size} mb-3`}>{photo}</div>
  }

  if (loading) {
    return (
      <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-border">
        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Projects</h2>
          <p className="text-muted-foreground">Manage your company projects and portfolio</p>
        </div>
        {!editId && (
          <Button
            onClick={startCreate}
            className="bg-[#345143] text-white hover:bg-[#2a4037]"
          >
            Add New Project
          </Button>
        )}
      </div>

      {error && (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <p>{error}</p>
            <Button variant="outline" size="sm" onClick={loadProjects} className="ml-auto">
              <RefreshCw className="mr-2 h-3 w-3" />
              Retry
            </Button>
          </div>
        </div>
      )}

      {statusMessage && (
        <div className="rounded-lg border border-green-500/40 bg-green-500/10 p-4 text-sm text-green-600">
          {statusMessage}
        </div>
      )}

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
        id="project-image-upload"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className={`border-border bg-card transition-all duration-200 ${
              editId === project.id ? "md:col-span-2 lg:col-span-1 row-span-2" : ""
            }`}
          >
            <CardHeader>
              {editId !== project.id && (
                <div className="flex justify-center mb-4">
                  {renderPhoto(project.photo)}
                </div>
              )}
              <CardTitle className="text-foreground">{project.name}</CardTitle>
              <CardDescription className="line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            
            {editId === project.id && formData ? (
              <CardContent className="space-y-4 pb-4">
                {/* Photo Upload Section */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Project Image <span className="text-muted-foreground text-xs">(optional)</span>
                  </label>
                  
                  {/* Drag and Drop Area */}
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-4 mb-3 transition-colors ${
                      isDragging
                        ? "border-primary bg-primary/5"
                        : "border-border bg-muted/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        {isUploadingImage ? (
                          <div className="w-20 h-20 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                          </div>
                        ) : (
                          renderPhoto(formData.photo, "text-4xl")
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex gap-2 mb-2">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={triggerFileInput}
                            disabled={isUploadingImage}
                            className="flex-1"
                          >
                            {isUploadingImage ? (
                              <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Processing...
                              </>
                            ) : (
                              <>
                                <Upload className="h-4 w-4 mr-2" />
                                Select from Device
                              </>
                            )}
                          </Button>
                          {isBase64Image(formData.photo) && !isUploadingImage && (
                            <Button
                              type="button"
                              variant="outline"
                              onClick={removeImage}
                              className="text-destructive"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        {!isUploadingImage && (
                          <p className="text-xs text-muted-foreground">
                            {isDragging
                              ? "Drop your image here"
                              : "Drag and drop an image here, or click to select"}
                          </p>
                        )}
                        {uploadProgress && (
                          <p className="text-xs text-muted-foreground mt-1">{uploadProgress}</p>
                        )}
                        {isBase64Image(formData.photo) && !isUploadingImage && (
                          <p className="text-xs text-green-600 mt-1">
                            ✓ Image ready. Click Save to upload to server.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Emoji Input as fallback */}
                  <div className="mt-3">
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Or use emoji:
                    </label>
                    <Input
                      type="text"
                      value={isBase64Image(formData.photo) ? "📁" : formData.photo}
                      onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
                      maxLength={2}
                      placeholder="📁"
                      className="w-full mt-1 p-2 bg-background border border-input rounded text-foreground text-center text-2xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">Project Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter project name"
                    className="w-full mt-1 p-2 bg-background border border-input rounded text-foreground"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Project Link <span className="text-muted-foreground text-xs">(optional)</span>
                  </label>
                  <Input
                    type="text"
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    placeholder="https://example.com (optional)"
                    className="w-full mt-1 p-2 bg-background border border-input rounded text-foreground"
                  />
                  {formData.link && formData.link.trim() && !formData.link.startsWith("http") && (
                    <p className="text-xs text-yellow-600 mt-1">Link should start with http:// or https://</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">Description</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe the project..."
                    className="w-full mt-1 p-2 bg-background border border-input rounded text-foreground resize-none h-24"
                  />
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" onClick={cancelEdit} className="flex-1">
                    <X className="h-4 w-4 mr-1" /> Cancel
                  </Button>
                  <Button onClick={saveProject} disabled={isSaving} className="flex-1 bg-[#345143] text-white hover:bg-[#2a4037]">
                    {isSaving ? (
                      <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                    ) : (
                      <Save className="h-4 w-4 mr-1" />
                    )}
                    Save
                  </Button>
                </div>
              </CardContent>
            ) : (
              <>
                <CardContent className="pb-4">
                  <div className="space-y-3">
                    <p className="text-sm text-foreground">{project.description}</p>
                    
                    <div className="flex items-center justify-between pt-2">
                      {project.link ? (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          className="flex items-center gap-2"
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                            Visit Project
                          </a>
                        </Button>
                      ) : (
                        <span className="text-xs text-muted-foreground">No link provided</span>
                      )}
                      <p className="text-xs text-muted-foreground">Updated: {new Date(project.updatedAt).toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
                <div className="px-6 py-2 flex gap-2 border-t border-border">
                  <Button variant="ghost" size="sm" onClick={() => startEdit(project)} className="flex-1">
                    <Edit2 className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteProject(project.id)}
                    className="text-destructive flex-1"
                    disabled={isDeleting === project.id}
                  >
                    {isDeleting === project.id ? (
                      <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4 mr-1" />
                    )}
                    Delete
                  </Button>
                </div>
              </>
            )}
          </Card>
        ))}
      </div>

      {projects.length === 0 && !loading && (
        <Card className="border-dashed border-muted-foreground/40 bg-card/40">
          <CardHeader>
            <CardTitle className="text-foreground">No projects yet</CardTitle>
            <CardDescription>Add your first project to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={startCreate} className="bg-[#345143] text-white hover:bg-[#2a4037]">
              Add New Project
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}