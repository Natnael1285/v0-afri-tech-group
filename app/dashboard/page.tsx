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

export default function Page() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<string>("homepage")
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    const isAuthenticated = typeof window !== "undefined" && localStorage.getItem("isAuthenticated") === "true"

    if (!isAuthenticated) {
      router.replace("/signIn")
      return
    }

    setIsAuthorized(true)
  }, [router])

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

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Redirecting…</p>
      </div>
    )
  }

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </DashboardLayout>
  )
}

