"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, Edit2, Loader2, RefreshCw, Save, Trash2, X } from "lucide-react"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { dashboardApi, type HeroSection } from "@/lib/dashboard-api"

const emptyForm = {
  title: "",
  description: "",
}

export function HomepageManager() {
  const [hero, setHero] = useState<HeroSection | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState(emptyForm)
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  useEffect(() => {
    loadHero()
  }, [])

  const loadHero = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await dashboardApi.hero.fetch()
      setHero(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch hero section")
    } finally {
      setLoading(false)
    }
  }

  const startEdit = () => {
    setFormData(
      hero
        ? {
            title: hero.title,
            description: hero.description,
          }
        : emptyForm,
    )
    setIsEditing(true)
    setStatusMessage(null)
  }

  const cancelEdit = () => {
    setIsEditing(false)
    setFormData(emptyForm)
  }

  const saveHero = async () => {
    if (!formData.title.trim() || !formData.description.trim()) {
      setError("Both title and description are required.")
      return
    }

    setIsSaving(true)
    setError(null)

    try {
      const savedHero = await dashboardApi.hero.save(formData, Boolean(hero))
      setHero(savedHero)
      setIsEditing(false)
      setStatusMessage(hero ? "Hero section updated successfully." : "Hero section created successfully.")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save hero section.")
    } finally {
      setIsSaving(false)
    }
  }

  const deleteHero = async () => {
    if (!hero) return

    setIsDeleting(true)
    setError(null)

    try {
      await dashboardApi.hero.delete(hero.id)
      setHero(null)
      setIsEditing(false)
      setStatusMessage("Hero section deleted.")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete hero section.")
    } finally {
      setIsDeleting(false)
    }
  }

  const renderHeroCard = () => {
    if (loading) {
      return (
        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-border">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      )
    }

    if (error) {
      return (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <p>{error}</p>
            <Button variant="outline" size="sm" onClick={loadHero} className="ml-auto">
              <RefreshCw className="mr-2 h-3 w-3" />
              Retry
            </Button>
          </div>
        </div>
      )
    }

    if (!hero && !isEditing) {
      return (
        <Card className="border-dashed border-muted-foreground/40 bg-card/40">
          <CardHeader>
            <CardTitle className="text-foreground">No hero content yet</CardTitle>
            <CardDescription>Add your first hero section to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={startEdit} className="bg-[#345143] text-white hover:bg-[#2a4037]">
              Create Hero Content
            </Button>
          </CardContent>
        </Card>
      )
    }

    return (
      <Card className="border-border bg-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-foreground">{hero?.title}</CardTitle>
              <CardDescription>
                {hero ? `Last updated ${new Date(hero.updatedAt).toLocaleString()}` : "Not saved yet"}
              </CardDescription>
            </div>
            {hero && !isEditing && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={startEdit}>
                  <Edit2 className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-destructive" onClick={deleteHero} disabled={isDeleting}>
                  {isDeleting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 className="mr-2 h-4 w-4" />}
                  Delete
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">Title</label>
                <Input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="mt-1"
                  placeholder="Enter hero headline"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-1 h-32 resize-none"
                  placeholder="Describe your value proposition"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={cancelEdit}>
                  <X className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
                <Button onClick={saveHero} disabled={isSaving} className="bg-[#345143] text-white hover:bg-[#2a4037]">
                  {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                  Save Changes
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-foreground leading-relaxed">{hero?.description}</p>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="mb-2 text-3xl font-bold text-foreground">Hero Section</h2>
        <p className="text-muted-foreground">Manage the hero content displayed on the public homepage.</p>
      </div>
      {statusMessage && <p className="text-sm text-green-600">{statusMessage}</p>}
      {renderHeroCard()}
      {!isEditing && hero && (
        <Button variant="outline" onClick={startEdit}>
          <Edit2 className="mr-2 h-4 w-4" />
          Update Hero Content
        </Button>
      )}
    </div>
  )
}
