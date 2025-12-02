"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit2, Trash2, Save, X, Loader2, AlertCircle, RefreshCw, Plus } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { dashboardApi, type System } from "@/lib/dashboard-api"

export function SystemsManager() {
  const [systems, setSystems] = useState<System[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editId, setEditId] = useState<string | null>(null)
  const [formData, setFormData] = useState<{ name: string; description: string } | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  useEffect(() => {
    loadSystems()
  }, [])

  const loadSystems = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await dashboardApi.systems.list()
      setSystems(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch systems")
    } finally {
      setLoading(false)
    }
  }

  const startEdit = (system: System) => {
    setEditId(system.id)
    setFormData({ 
      name: system.name,
      description: system.description
    })
    setStatusMessage(null)
  }

  const startCreate = () => {
    const newSystem: System = {
      id: "new",
      name: "",
      description: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setSystems([...systems, newSystem])
    startEdit(newSystem)
  }

  const cancelEdit = () => {
    setEditId(null)
    setFormData(null)
    // Remove the "new" system if it was just created
    setSystems(systems.filter(s => s.id !== "new"))
  }

  const saveSystem = async () => {
    if (!formData || !editId) return
    if (!formData.name.trim() || !formData.description.trim()) {
      setError("Name and description are required")
      return
    }

    setIsSaving(true)
    setError(null)

    try {
      const isNew = editId === "new"
      const payload = {
        name: formData.name.trim(),
        description: formData.description.trim(),
      }

      if (isNew) {
        const saved = await dashboardApi.systems.create(payload)
        setSystems(systems.map(s => s.id === "new" ? saved : s))
        setStatusMessage("System created successfully")
      } else {
        const saved = await dashboardApi.systems.update(editId, payload)
        setSystems(systems.map(s => s.id === editId ? saved : s))
        setStatusMessage("System updated successfully")
      }

      setEditId(null)
      setFormData(null)
    } catch (err: any) {
      const errorMessage = err?.response?.message || err?.message || "Failed to save system"
      setError(errorMessage)
    } finally {
      setIsSaving(false)
    }
  }

  const deleteSystem = async (id: string) => {
    if (id === "new") {
      setSystems(systems.filter(s => s.id !== id))
      return
    }

    if (!confirm("Are you sure you want to delete this system?")) {
      return
    }

    setIsDeleting(id)
    setError(null)

    try {
      await dashboardApi.systems.delete(id)
      setSystems(systems.filter(s => s.id !== id))
      setStatusMessage("System deleted successfully")
    } catch (err: any) {
      const errorMessage = err?.response?.message || err?.message || "Failed to delete system"
      setError(errorMessage)
    } finally {
      setIsDeleting(null)
    }
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
          <h2 className="text-3xl font-bold text-foreground mb-2">Systems Management</h2>
          <p className="text-muted-foreground">Add, edit, or manage your company systems</p>
        </div>
        {!editId && (
          <Button
            onClick={startCreate}
            className="bg-[#345143] text-white hover:bg-[#2a4037]"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New System
          </Button>
        )}
      </div>

      {error && (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <p>{error}</p>
            <Button variant="outline" size="sm" onClick={loadSystems} className="ml-auto">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {systems.map((system) => (
          <Card key={system.id} className="border-border bg-card">
            <CardHeader>
              {editId !== system.id && (
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-foreground mb-2">{system.name}</CardTitle>
                    <CardDescription className="line-clamp-3">{system.description}</CardDescription>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="ghost" size="sm" onClick={() => startEdit(system)}>
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteSystem(system.id)}
                      className="text-destructive"
                      disabled={isDeleting === system.id}
                    >
                      {isDeleting === system.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              )}
              {editId === system.id && formData && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">System Name</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter system name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Description</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Enter system description"
                      className="w-full min-h-24 resize-none"
                    />
                  </div>
                  <div className="flex gap-2 justify-end pt-2">
                    <Button variant="outline" onClick={cancelEdit}>
                      <X className="h-4 w-4 mr-1" /> Cancel
                    </Button>
                    <Button onClick={saveSystem} disabled={isSaving} className="bg-[#345143] text-white hover:bg-[#2a4037]">
                      {isSaving ? (
                        <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                      ) : (
                        <Save className="h-4 w-4 mr-1" />
                      )}
                      Save
                    </Button>
                  </div>
                </div>
              )}
            </CardHeader>
            {editId !== system.id && (
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Updated: {new Date(system.updatedAt).toLocaleString()}
                </p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {systems.length === 0 && !loading && (
        <Card className="border-dashed border-muted-foreground/40 bg-card/40">
          <CardHeader>
            <CardTitle className="text-foreground">No systems yet</CardTitle>
            <CardDescription>Add your first system to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={startCreate} className="bg-[#345143] text-white hover:bg-[#2a4037]">
              <Plus className="h-4 w-4 mr-2" />
              Add New System
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

