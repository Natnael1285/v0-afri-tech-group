"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit2, Trash2, Save, X, Upload, User, Loader2, AlertCircle, RefreshCw } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { dashboardApi, type TeamMember } from "@/lib/dashboard-api"

export function TeamManager() {
  const [team, setTeam] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editId, setEditId] = useState<string | null>(null)
  const [formData, setFormData] = useState<{ photo: string; name: string; position: string; description: string } | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    loadTeam()
  }, [])

  const loadTeam = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await dashboardApi.team.list()
      setTeam(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch team members")
    } finally {
      setLoading(false)
    }
  }

  const startEdit = (member: TeamMember) => {
    setEditId(member.id)
    setFormData({ 
      photo: member.photo || "👤",
      name: member.name,
      position: member.position,
      description: member.description
    })
    setStatusMessage(null)
  }

  const startCreate = () => {
    const newMember: TeamMember = {
      id: "new",
      photo: "👤",
      name: "",
      position: "",
      description: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setTeam([...team, newMember])
    startEdit(newMember)
  }

  const cancelEdit = () => {
    setEditId(null)
    setFormData(null)
    setTeam(team.filter(m => m.id !== "new"))
  }

  const uploadImage = async (base64Data: string): Promise<string | null> => {
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          imageData: base64Data,
          folder: "team-members",
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Failed to upload image")
      }

      const data = await response.json()
      return data.url
    } catch (err) {
      console.error("Image upload error:", err)
      throw err
    }
  }

  const saveMember = async () => {
    if (!formData || !editId) return
    if (!formData.name.trim() || !formData.position.trim() || !formData.description.trim()) {
      setError("All fields are required")
      return
    }

    setIsSaving(true)
    setError(null)

    try {
      const isNew = editId === "new"
      let photoUrl: string | null = null

      // If it's a base64 image, upload it first
      if (isBase64Image(formData.photo)) {
        photoUrl = await uploadImage(formData.photo)
      } else if (formData.photo && formData.photo.startsWith("http")) {
        // Already a URL, use it directly
        photoUrl = formData.photo
      } else {
        // It's an emoji or empty, set to null
        photoUrl = null
      }
      
      const payload = {
        name: formData.name,
        position: formData.position,
        description: formData.description,
        photo: photoUrl,
      }

      if (isNew) {
        const saved = await dashboardApi.team.create(payload)
        setTeam(team.map(m => m.id === "new" ? saved : m))
        setStatusMessage("Team member created successfully")
      } else {
        const saved = await dashboardApi.team.update(editId, payload)
        setTeam(team.map(m => m.id === editId ? saved : m))
        setStatusMessage("Team member updated successfully")
      }

      setEditId(null)
      setFormData(null)
    } catch (err: any) {
      // Handle validation errors from backend
      if (err?.response?.errors && Array.isArray(err.response.errors)) {
        const errorMessages = err.response.errors.map((e: any) => `${e.field}: ${e.message}`).join(", ")
        setError(errorMessages || err.response.message || "Validation failed")
      } else if (err?.response?.message) {
        setError(err.response.message)
      } else if (err instanceof Error) {
        setError(err.message || "Failed to save team member")
      } else {
        setError("Failed to save team member")
      }
    } finally {
      setIsSaving(false)
    }
  }

  const deleteMember = async (id: string) => {
    if (id === "new") {
      setTeam(team.filter(m => m.id !== id))
      return
    }

    setIsDeleting(id)
    setError(null)

    try {
      await dashboardApi.team.delete(id)
      setTeam(team.filter(m => m.id !== id))
      setStatusMessage("Team member deleted successfully")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete team member")
    } finally {
      setIsDeleting(null)
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const base64 = e.target?.result as string
        if (formData) {
          setFormData({ ...formData, photo: base64 })
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const removeImage = () => {
    if (formData) {
      setFormData({ ...formData, photo: "👤" })
    }
  }

  // Check if photo is base64 image or emoji
  const isBase64Image = (photo: string) => {
    return photo.startsWith('data:image/')
  }

  const renderPhoto = (photo: string | null | undefined, size: string = "text-5xl") => {
    if (!photo) return <div className={`${size} mb-3`}>👤</div>
    if (isBase64Image(photo) || photo.startsWith('http')) {
      return (
        <img 
          src={photo} 
          alt="Team member" 
          className="w-16 h-16 rounded-full object-cover border-2 border-border"
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
          <h2 className="text-3xl font-bold text-foreground mb-2">Team Members</h2>
          <p className="text-muted-foreground">Manage your team member profiles</p>
        </div>
        {!editId && (
          <Button
            onClick={startCreate}
            className="bg-[#345143] text-white hover:bg-[#2a4037]"
          >
            Add Team Member
          </Button>
        )}
      </div>

      {error && (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <p>{error}</p>
            <Button variant="outline" size="sm" onClick={loadTeam} className="ml-auto">
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
      <Input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map((member) => (
          <Card 
            key={member.id} 
            className={`border-border bg-card transition-all duration-200 ${
              editId === member.id ? "md:col-span-2 lg:col-span-1 row-span-2" : ""
            }`}
          >
            <CardHeader>
              {editId !== member.id && (
                <div className="flex justify-center mb-3">
                  {renderPhoto(member.photo)}
                </div>
              )}
              <CardTitle className="text-foreground">{member.name}</CardTitle>
              <CardDescription>{member.position}</CardDescription>
            </CardHeader>
            
            {editId === member.id && formData ? (
              <CardContent className="space-y-4 pb-4">
                {/* Photo Upload Section */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Profile Photo
                  </label>
                  
                  {/* Photo Preview and Upload Controls */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-shrink-0">
                      {renderPhoto(formData.photo, "text-4xl")}
                    </div>
                    <div className="flex gap-2 flex-1">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={triggerFileInput}
                        className="flex-1"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload
                      </Button>
                      {isBase64Image(formData.photo) && (
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
                  </div>

                  {/* Emoji Input as fallback */}
                  <div className="mt-3">
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Or use emoji:
                    </label>
                    <Input
                      type="text"
                      value={isBase64Image(formData.photo) ? "👤" : formData.photo}
                      onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
                      maxLength={2}
                      placeholder="👤"
                      className="w-full mt-1 p-2 bg-background border border-input rounded text-foreground text-center text-2xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full mt-1 p-2 bg-background border border-input rounded text-foreground"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Position</label>
                  <Input
                    type="text"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full mt-1 p-2 bg-background border border-input rounded text-foreground"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Description</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full mt-1 p-2 bg-background border border-input rounded text-foreground resize-none h-16"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={cancelEdit} className="flex-1">
                    <X className="h-4 w-4 mr-1" /> Cancel
                  </Button>
                  <Button onClick={saveMember} disabled={isSaving} className="flex-1 bg-[#345143] text-white hover:bg-[#2a4037]">
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
                  <p className="text-sm text-foreground mb-2">{member.description}</p>
                  <p className="text-xs text-muted-foreground">Updated: {new Date(member.updatedAt).toLocaleString()}</p>
                </CardContent>
                <div className="px-6 py-2 flex gap-2 border-t border-border">
                  <Button variant="ghost" size="sm" onClick={() => startEdit(member)} className="flex-1">
                    <Edit2 className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteMember(member.id)}
                    className="text-destructive flex-1"
                    disabled={isDeleting === member.id}
                  >
                    {isDeleting === member.id ? (
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

      {team.length === 0 && !loading && (
        <Card className="border-dashed border-muted-foreground/40 bg-card/40">
          <CardHeader>
            <CardTitle className="text-foreground">No team members yet</CardTitle>
            <CardDescription>Add your first team member to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={startCreate} className="bg-[#345143] text-white hover:bg-[#2a4037]">
              Add Team Member
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}