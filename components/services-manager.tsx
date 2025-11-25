"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Edit2, Trash2, Save, X, Search, 
  Home, Phone, Mail, Settings, User, Globe, 
  Code, Smartphone, Database, Cloud, Shield, 
  Zap, Palette, BarChart, ShoppingCart,
  Calendar, MessageCircle, Image, Video, Music,
  File, Folder, Download, Upload, Printer,
  Camera, Headphones, Heart, Star, ThumbsUp,
  Eye, Lock, Key, Wifi, Battery, Cpu, Server,
  Network, Loader2, AlertCircle, RefreshCw
} from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { dashboardApi, type Service } from "@/lib/dashboard-api"

// Use a more flexible type that matches Lucide icons
type IconComponent = React.ComponentType<any>

// Manual icon mapping
const iconLibrary: Record<string, IconComponent> = {
  // Basic UI
  "home": Home,
  "settings": Settings,
  "user": User,
  "search": Search,
  "edit": Edit2,
  "trash": Trash2,
  "save": Save,
  "x": X,
  
  // Communication
  "phone": Phone,
  "mail": Mail,
  "message": MessageCircle,
  
  // Technology
  "globe": Globe,
  "code": Code,
  "smartphone": Smartphone,
  "database": Database,
  "cloud": Cloud,
  "server": Server,
  "network": Network,
  "cpu": Cpu,
  "wifi": Wifi,
  "battery": Battery,
  
  // Security
  "shield": Shield,
  "lock": Lock,
  "key": Key,
  "eye": Eye,
  
  // Media
  "image": Image,
  "video": Video,
  "music": Music,
  "camera": Camera,
  "headphones": Headphones,
  "printer": Printer,
  
  // Files
  "file": File,
  "folder": Folder,
  "download": Download,
  "upload": Upload,
  
  // Actions & Symbols
  "zap": Zap,
  "palette": Palette,
  "barchart": BarChart,
  "shoppingcart": ShoppingCart,
  "calendar": Calendar,
  "heart": Heart,
  "star": Star,
  "thumbsup": ThumbsUp,
}

// Icon wrapper component for proper typing
interface IconWrapperProps {
  icon: string;
  size?: number;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon, size = 40, className = "" }) => {
  const IconComponent = iconLibrary[icon.toLowerCase()];
  
  if (!IconComponent) {
    return (
      <div className={`font-mono text-muted-foreground bg-muted px-2 py-1 rounded text-sm min-w-8 min-h-8 flex items-center justify-center ${className}`}>
        {icon.length > 4 ? `${icon.substring(0, 4)}...` : icon}
      </div>
    );
  }

  return <IconComponent size={size} className={className} />;
};

export function ServicesManager() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editId, setEditId] = useState<string | null>(null)
  const [formData, setFormData] = useState<{ icon: string; name: string; description: string } | null>(null)
  const [showIconSuggestions, setShowIconSuggestions] = useState(false)
  const [iconSearch, setIconSearch] = useState("")
  const [activeIconTab, setActiveIconTab] = useState<"popular" | "all">("popular")
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  useEffect(() => {
    loadServices()
  }, [])

  const loadServices = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await dashboardApi.services.list()
      setServices(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch services")
    } finally {
      setLoading(false)
    }
  }

  const startEdit = (service: Service) => {
    setEditId(service.id)
    setFormData({ 
      icon: service.icon,
      name: service.name,
      description: service.description
    })
    setShowIconSuggestions(false)
    setIconSearch("")
    setStatusMessage(null)
  }

  const startCreate = () => {
    const newService: Service = {
      id: "new",
      icon: "settings",
      name: "",
      description: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setServices([...services, newService])
    startEdit(newService)
  }

  const cancelEdit = () => {
    setEditId(null)
    setFormData(null)
    setShowIconSuggestions(false)
    setIconSearch("")
    // Remove the "new" service if it was just created
    setServices(services.filter(s => s.id !== "new"))
  }

  const saveService = async () => {
    if (!formData || !editId) return
    if (!formData.icon.trim() || !formData.name.trim() || !formData.description.trim()) {
      setError("All fields are required")
      return
    }

    setIsSaving(true)
    setError(null)

    try {
      const isNew = editId === "new"
      const payload = {
        icon: formData.icon,
        name: formData.name,
        description: formData.description,
      }

      if (isNew) {
        const saved = await dashboardApi.services.create(payload)
        setServices(services.map(s => s.id === "new" ? saved : s))
        setStatusMessage("Service created successfully")
      } else {
        const saved = await dashboardApi.services.update(editId, payload)
        setServices(services.map(s => s.id === editId ? saved : s))
        setStatusMessage("Service updated successfully")
      }

      setEditId(null)
      setFormData(null)
      setShowIconSuggestions(false)
      setIconSearch("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save service")
    } finally {
      setIsSaving(false)
    }
  }

  const deleteService = async (id: string) => {
    if (id === "new") {
      setServices(services.filter(s => s.id !== id))
      return
    }

    setIsDeleting(id)
    setError(null)

    try {
      await dashboardApi.services.delete(id)
      setServices(services.filter(s => s.id !== id))
      setStatusMessage("Service deleted successfully")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete service")
    } finally {
      setIsDeleting(null)
    }
  }

  // Render icon using the wrapper component
  const renderIcon = (iconName: string, size: number = 40) => {
    return <IconWrapper icon={iconName} size={size} className="text-foreground" />;
  }

  // Filter icons based on search
  const filteredIcons = Object.keys(iconLibrary).filter(iconName =>
    iconName.toLowerCase().includes(iconSearch.toLowerCase())
  )

  // Popular icons for quick access
  const popularIcons = [
    "home", "settings", "user", "phone", "mail", "globe", "code", "smartphone",
    "database", "cloud", "shield", "zap", "palette", "barchart", "shoppingcart",
    "calendar", "message", "image", "file", "folder", "download", "lock", "star"
  ]

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
          <h2 className="text-3xl font-bold text-foreground mb-2">Services Management</h2>
          <p className="text-muted-foreground">Add, edit, or manage your company services</p>
        </div>
        {!editId && (
          <Button
            onClick={startCreate}
            className="bg-[#345143] text-white hover:bg-[#2a4037]"
          >
            Add New Service
          </Button>
        )}
      </div>

      {error && (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <p>{error}</p>
            <Button variant="outline" size="sm" onClick={loadServices} className="ml-auto">
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
        {services.map((service) => (
          <Card key={service.id} className="border-border bg-card">
            <CardHeader>
              {editId !== service.id && (
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center justify-center w-12 h-12">
                    {renderIcon(service.icon)}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => startEdit(service)}>
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteService(service.id)}
                      className="text-destructive"
                      disabled={isDeleting === service.id}
                    >
                      {isDeleting === service.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              )}
              <CardTitle className="text-foreground">{service.name}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            {editId === service.id && formData ? (
              <CardContent className="space-y-4">
                <div className="relative">
                  <label className="text-sm font-medium text-foreground">Icon Name</label>
                  <Input
                    type="text"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    onFocus={() => setShowIconSuggestions(true)}
                    placeholder="Type icon name or click suggestions"
                    className="w-full mt-1 p-2 bg-background border border-input rounded text-foreground"
                  />
                  
                  {/* Icon Preview */}
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">Preview:</span>
                    <div className="flex items-center justify-center w-8 h-8 border rounded">
                      {renderIcon(formData.icon, 20)}
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {formData.icon}
                    </span>
                  </div>

                  {/* Icon Suggestions */}
                  {showIconSuggestions && (
                    <div className="absolute top-full left-0 right-0 bg-background border border-input rounded-md shadow-lg z-20 mt-1 p-3 max-h-96 overflow-hidden flex flex-col">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-foreground">
                          {activeIconTab === "popular" ? "Popular Icons" : "All Icons"} 
                          <span className="text-muted-foreground ml-2">
                            ({activeIconTab === "popular" ? popularIcons.length : filteredIcons.length} icons)
                          </span>
                        </span>
                        <div className="flex gap-2">
                          <Button
                            variant={activeIconTab === "popular" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveIconTab("popular")}
                            className="h-7 text-xs"
                          >
                            Popular
                          </Button>
                          <Button
                            variant={activeIconTab === "all" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveIconTab("all")}
                            className="h-7 text-xs"
                          >
                            All
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowIconSuggestions(false)}
                            className="h-7 w-7"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Search Bar */}
                      <div className="mb-3">
                        <Input
                          placeholder="Search icons..."
                          value={iconSearch}
                          onChange={(e) => setIconSearch(e.target.value)}
                          className="w-full"
                        />
                      </div>

                      {/* Icons Grid */}
                      <div className="overflow-y-auto flex-1">
                        <div className="grid grid-cols-6 gap-2">
                          {(activeIconTab === "popular" ? popularIcons : filteredIcons)
                            .map((iconName) => (
                              <Button
                                key={iconName}
                                variant="outline"
                                size="sm"
                                className="h-12 flex flex-col items-center justify-center gap-1 p-1"
                                onClick={() => {
                                  setFormData({ ...formData, icon: iconName })
                                  setShowIconSuggestions(false)
                                  setIconSearch("")
                                }}
                              >
                                {renderIcon(iconName, 16)}
                                <span className="text-xs truncate w-full">{iconName}</span>
                              </Button>
                            ))}
                        </div>
                        {activeIconTab === "all" && filteredIcons.length === 0 && (
                          <div className="text-center text-sm text-muted-foreground mt-4">
                            No icons found matching "{iconSearch}"
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Service Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" onClick={cancelEdit}>
                    <X className="h-4 w-4 mr-1" /> Cancel
                  </Button>
                  <Button onClick={saveService} disabled={isSaving} className="bg-[#345143] text-white hover:bg-[#2a4037]">
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
              <CardContent>
                <p className="text-xs text-muted-foreground">Updated: {new Date(service.updatedAt).toLocaleString()}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {services.length === 0 && !loading && (
        <Card className="border-dashed border-muted-foreground/40 bg-card/40">
          <CardHeader>
            <CardTitle className="text-foreground">No services yet</CardTitle>
            <CardDescription>Add your first service to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={startCreate} className="bg-[#345143] text-white hover:bg-[#2a4037]">
              Add New Service
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

