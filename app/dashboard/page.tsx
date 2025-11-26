"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { HomepageManager } from "@/components/homepage-manager"
import { ServicesManager } from "@/components/services-manager"
import { TeamManager } from "@/components/team-manager"
import { ContactManager } from "@/components/contact-manager"
import { AboutManager } from "@/components/about-manager"
import { ProjectsManager } from "@/components/project-manager"
import { Loader2 } from "lucide-react"

export default function Page() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<string>("homepage")
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    verifyAuth()
  }, [router])

  const verifyAuth = async () => {
    setIsChecking(true)
    
    // Check localStorage first
    const isAuthenticated = typeof window !== "undefined" && localStorage.getItem("isAuthenticated") === "true"
    
    if (!isAuthenticated) {
      router.replace("/")
      return
    }

    // Verify token with backend
    try {
      const response = await fetch("/api/auth/verify", {
        method: "GET",
        credentials: "include",
      })

      if (!response.ok) {
        // Token is invalid or expired
        localStorage.removeItem("isAuthenticated")
        localStorage.removeItem("username")
        localStorage.removeItem("accessToken")
        router.replace("/")
        return
      }

      const data = await response.json()
      if (data.user) {
        setIsAuthorized(true)
      } else {
        localStorage.removeItem("isAuthenticated")
        localStorage.removeItem("username")
        localStorage.removeItem("accessToken")
        router.replace("/")
      }
    } catch (error) {
      console.error("Auth verification error:", error)
      localStorage.removeItem("isAuthenticated")
      localStorage.removeItem("username")
      localStorage.removeItem("accessToken")
      router.replace("/")
    } finally {
      setIsChecking(false)
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case "homepage":
        return <HomepageManager />
      case "services":
        return <ServicesManager />
      case "team":
        return <TeamManager />
      case "project":
        return<ProjectsManager/> 
        
      case "contact":
        return <ContactManager />
      case "about":
        return <AboutManager />
      default:
        return <HomepageManager />
    }
  }

  if (isChecking || !isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          <p className="text-muted-foreground">Verifying authentication…</p>
        </div>
      </div>
    )
  }

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </DashboardLayout>
  )
}

