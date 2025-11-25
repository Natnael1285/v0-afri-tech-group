"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X, Home, Wrench, Users, Phone, PhoneIncoming, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { AdminMenu } from "./admin-menu"

interface DashboardLayoutProps {
  children: React.ReactNode
  activeTab: string
  setActiveTab: (tab: string) => void
}

const navItems = [
  { id: "homepage", label: "Homepage", icon: Home },
  { id: "services", label: "Services", icon: Wrench },
  { id: "team", label: "Team Members", icon: Users },
  { id: "project", label: "Projects", icon: Wrench },
  { id: "contact", label: "Contact Info", icon: Phone },
  { id: "about", label: "About", icon: Info  },
]

export function DashboardLayout({ children, activeTab, setActiveTab }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-300",
          sidebarOpen ? "w-64" : "w-20",
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              {/* Logo from public folder */}
              <img 
                src="/image.png" 
                alt="Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-sm font-semibold">Website Manager</span>
            </div>
          )}
          {!sidebarOpen && (
            <div className="flex justify-center w-full">
              <img 
                src="/image.png" 
                alt="Logo" 
                className="h-8 w-8 object-contain"
              />
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)} className="h-8 w-8 p-0">
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        <nav className="flex flex-col gap-2 p-4">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                  activeTab === item.id
                    ? "bg-[#345143] text-white shadow-md"
                    : "text-sidebar-foreground hover:bg-primary/10 dark:hover:bg-primary/20",
                )}
                title={!sidebarOpen ? item.label : undefined}
              >
                <Icon className="h-5 w-5" />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="border-b border-border bg-card">
          <div className="flex items-center justify-between px-8 py-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Website Management</h1>
              <p className="text-sm text-muted-foreground">Manage your company website content</p>
            </div>
            <div className="flex items-center gap-4">
              <AdminMenu />
              <ThemeToggle />
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent"></div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto bg-background">
          <div className="p-8">{children}</div>
        </main>
      </div>
    </div>
  )
}