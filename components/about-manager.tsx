"use client"
import { useState } from "react"
import { Save, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface MissionVisionItem {
  id: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
}

export function AboutManager() {
  const [missionItems, setMissionItems] = useState<MissionVisionItem[]>([
    {
      id: "1",
      title: "Our Mission",
      description:
        "To deliver innovative solutions that empower businesses and drive sustainable growth in the digital economy.",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-15",
    },
  ])

  const [visionItems, setVisionItems] = useState<MissionVisionItem[]>([
    {
      id: "1",
      title: "Our Vision",
      description:
        "To become the leading provider of transformative digital solutions, recognized globally for excellence and innovation.",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-15",
    },
  ])

  const [editingMission, setEditingMission] = useState<MissionVisionItem | null>(null)
  const [editingVision, setEditingVision] = useState<MissionVisionItem | null>(null)

  const handleAddMission = () => {
    const newMission: MissionVisionItem = {
      id: Date.now().toString(),
      title: "",
      description: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setMissionItems([...missionItems, newMission])
    setEditingMission(newMission)
  }

  const handleAddVision = () => {
    const newVision: MissionVisionItem = {
      id: Date.now().toString(),
      title: "",
      description: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setVisionItems([...visionItems, newVision])
    setEditingVision(newVision)
  }

  const handleSaveMission = (mission: MissionVisionItem) => {
    setMissionItems(
      missionItems.map((item) => (item.id === mission.id ? { ...mission, updatedAt: new Date().toISOString() } : item)),
    )
    setEditingMission(null)
  }

  const handleSaveVision = (vision: MissionVisionItem) => {
    setVisionItems(
      visionItems.map((item) => (item.id === vision.id ? { ...vision, updatedAt: new Date().toISOString() } : item)),
    )
    setEditingVision(null)
  }

  const handleDeleteMission = (id: string) => {
    setMissionItems(missionItems.filter((item) => item.id !== id))
  }

  const handleDeleteVision = (id: string) => {
    setVisionItems(visionItems.filter((item) => item.id !== id))
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">About Us</h2>
        <p className="text-muted-foreground">Manage your company mission and vision statements</p>
      </div>

      {/* Mission Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground">Mission Statement</h3>
          <Button onClick={handleAddMission} className="bg-[#345143] hover:bg-[#2a4538] text-white gap-2">
            <Plus className="h-4 w-4" />
            Add Mission
          </Button>
        </div>

        <div className="grid gap-4">
          {missionItems.map((mission) => (
            <Card key={mission.id} className="bg-card border-border p-6">
              {editingMission?.id === mission.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Title</label>
                    <input
                      type="text"
                      value={editingMission.title}
                      onChange={(e) => setEditingMission({ ...editingMission, title: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-[#345143]"
                      placeholder="Mission title"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Description</label>
                    <textarea
                      value={editingMission.description}
                      onChange={(e) => setEditingMission({ ...editingMission, description: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-[#345143] min-h-24"
                      placeholder="Mission description"
                    />
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button variant="outline" onClick={() => setEditingMission(null)}>
                      Cancel
                    </Button>
                    <Button
                      onClick={() => handleSaveMission(editingMission)}
                      className="bg-[#345143] hover:bg-[#2a4538] text-white gap-2"
                    >
                      <Save className="h-4 w-4" />
                      Save
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">{mission.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      Updated: {new Date(mission.updatedAt).toLocaleDateString()}
                    </span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => setEditingMission(mission)}>
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteMission(mission.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground">Vision Statement</h3>
          <Button onClick={handleAddVision} className="bg-[#987a34] hover:bg-[#7a5f28] text-white gap-2">
            <Plus className="h-4 w-4" />
            Add Vision
          </Button>
        </div>

        <div className="grid gap-4">
          {visionItems.map((vision) => (
            <Card key={vision.id} className="bg-card border-border p-6">
              {editingVision?.id === vision.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Title</label>
                    <input
                      type="text"
                      value={editingVision.title}
                      onChange={(e) => setEditingVision({ ...editingVision, title: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-[#987a34]"
                      placeholder="Vision title"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Description</label>
                    <textarea
                      value={editingVision.description}
                      onChange={(e) => setEditingVision({ ...editingVision, description: e.target.value })}
                      className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-[#987a34] min-h-24"
                      placeholder="Vision description"
                    />
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button variant="outline" onClick={() => setEditingVision(null)}>
                      Cancel
                    </Button>
                    <Button
                      onClick={() => handleSaveVision(editingVision)}
                      className="bg-[#987a34] hover:bg-[#7a5f28] text-white gap-2"
                    >
                      <Save className="h-4 w-4" />
                      Save
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">{vision.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{vision.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      Updated: {new Date(vision.updatedAt).toLocaleDateString()}
                    </span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => setEditingVision(vision)}>
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteVision(vision.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
