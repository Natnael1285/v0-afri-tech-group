"use client"
import { useState, useEffect } from "react"
import { Save, Loader2, AlertCircle, RefreshCw, CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { dashboardApi, type AboutPage } from "@/lib/dashboard-api"

export function AboutManager() {
  const [aboutData, setAboutData] = useState<AboutPage | null>(null)
  const [mission, setMission] = useState("")
  const [vision, setVision] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [notification, setNotification] = useState<{ show: boolean; message: string; type: "success" | "error" }>({ 
    show: false, 
    message: "", 
    type: "success" 
  })

  useEffect(() => {
    loadAboutData()
  }, [])

  const loadAboutData = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await dashboardApi.about.fetch()
      if (data) {
        setAboutData(data)
        setMission(data.mission)
        setVision(data.vision)
      } else {
        // No data exists yet, allow creating
        setMission("")
        setVision("")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load about page data")
      console.error("Error loading about data:", err)
    } finally {
      setLoading(false)
    }
  }

  const showNotification = (message: string, type: "success" | "error" = "success") => {
    setNotification({ show: true, message, type })
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "success" })
    }, 3000)
  }

  const startEdit = () => {
    setIsEditing(true)
  }

  const cancelEdit = () => {
    setIsEditing(false)
    // Reset to original values
    if (aboutData) {
      setMission(aboutData.mission)
      setVision(aboutData.vision)
    } else {
      setMission("")
      setVision("")
    }
  }

  const handleSave = async () => {
    if (!mission.trim() || !vision.trim()) {
      showNotification("Both mission and vision are required", "error")
      return
    }

    setIsSaving(true)
    setError(null)

    try {
      const hasExisting = aboutData !== null
      const saved = await dashboardApi.about.save(
        { mission: mission.trim(), vision: vision.trim() },
        hasExisting
      )
      
      setAboutData(saved)
      setIsEditing(false)
      showNotification(hasExisting ? "About page updated successfully!" : "About page created successfully!", "success")
    } catch (err: any) {
      // Handle validation errors from backend
      if (err?.response?.errors && Array.isArray(err.response.errors)) {
        const errorMessages = err.response.errors.map((e: any) => `${e.field}: ${e.message}`).join(", ")
        showNotification(errorMessages || err.response.message || "Validation failed", "error")
      } else if (err?.response?.message) {
        showNotification(err.response.message, "error")
      } else if (err instanceof Error) {
        showNotification(err.message || "Failed to save about page", "error")
      } else {
        showNotification("Failed to save about page", "error")
      }
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Notification */}
      {notification.show && (
        <div className={`fixed top-4 right-4 z-50 flex items-center space-x-2 p-4 rounded-lg shadow-lg border transition-all duration-300 ${
          notification.type === "success" 
            ? "bg-green-50 border-green-200 text-green-800" 
            : "bg-red-50 border-red-200 text-red-800"
        }`}>
          <CheckCircle className={`h-5 w-5 ${
            notification.type === "success" ? "text-green-600" : "text-red-600"
          }`} />
          <span className="font-medium">{notification.message}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setNotification({ ...notification, show: false })}
            className={`h-6 w-6 p-0 ${
              notification.type === "success" 
                ? "text-green-600 hover:bg-green-100" 
                : "text-red-600 hover:bg-red-100"
            }`}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">About Us</h2>
          <p className="text-muted-foreground">Manage your company mission and vision statements</p>
        </div>
        <div className="flex gap-2">
          {!isEditing && (
            <Button onClick={startEdit} className="bg-[#345143] hover:bg-[#2a4538] text-white gap-2">
              <Save className="h-4 w-4" />
              Edit
            </Button>
          )}
          {!isEditing && (
            <Button
              variant="outline"
              size="sm"
              onClick={loadAboutData}
              disabled={loading}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          )}
        </div>
      </div>

      {error && (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <p>{error}</p>
            <Button variant="outline" size="sm" onClick={loadAboutData} className="ml-auto">
              <RefreshCw className="mr-2 h-3 w-3" />
              Retry
            </Button>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-border">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <div className="space-y-6">
          {/* Mission Section */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Mission Statement</h3>
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Mission
                      </label>
                      <Textarea
                        value={mission}
                        onChange={(e) => setMission(e.target.value)}
                        className="w-full min-h-32 resize-vertical"
                        placeholder="Enter your company's mission statement..."
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {mission ? (
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{mission}</p>
                    ) : (
                      <p className="text-muted-foreground italic">No mission statement set yet.</p>
                    )}
                    {aboutData && (
                      <p className="text-xs text-muted-foreground">
                        Last updated: {new Date(aboutData.updatedAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Vision Section */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Vision Statement</h3>
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Vision
                      </label>
                      <Textarea
                        value={vision}
                        onChange={(e) => setVision(e.target.value)}
                        className="w-full min-h-32 resize-vertical"
                        placeholder="Enter your company's vision statement..."
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {vision ? (
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{vision}</p>
                    ) : (
                      <p className="text-muted-foreground italic">No vision statement set yet.</p>
                    )}
                    {aboutData && (
                      <p className="text-xs text-muted-foreground">
                        Last updated: {new Date(aboutData.updatedAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Save/Cancel Buttons */}
          {isEditing && (
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={cancelEdit} disabled={isSaving}>
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                disabled={isSaving}
                className="bg-[#345143] hover:bg-[#2a4538] text-white gap-2"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
