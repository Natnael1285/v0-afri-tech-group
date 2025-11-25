"use client"

import { useState } from "react"
import { LogOut, Lock, ChevronDown, X, User, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

interface AdminMenuProps {
  onNotification?: (message: string, type: "success" | "error") => void
}

export function AdminMenu({ onNotification }: AdminMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    username: "admin" // Default username, you can make this dynamic
  })
  const [notification, setNotification] = useState<{ show: boolean; message: string; type: "success" | "error" }>({ 
    show: false, 
    message: "", 
    type: "success" 
  })
  const router = useRouter()

  const adminOptions = [
    { id: "password", label: "Change Password", icon: Lock },
    { id: "logout", label: "Logout", icon: LogOut },
  ]

  const showNotification = (message: string, type: "success" | "error" = "success") => {
    setNotification({ show: true, message, type })
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "success" })
    }, 3000)
    
    // Also call parent notification handler if provided
    if (onNotification) {
      onNotification(message, type)
    }
  }

  const handleLogout = () => {
    // In a real app, you might want to clear tokens or session data here
    showNotification("Logged out successfully", "success")
    router.push("/")
  }

  const handleChangePassword = () => {
    // Validate form
    if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword) {
      showNotification("Please fill in all fields", "error")
      return
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      showNotification("New passwords do not match", "error")
      return
    }

    if (passwordForm.newPassword.length < 6) {
      showNotification("Password must be at least 6 characters long", "error")
      return
    }

    // In a real app, you would make an API call here to change the password
    console.log("Changing password for:", passwordForm.username)
    console.log("Current password:", passwordForm.currentPassword)
    console.log("New password:", passwordForm.newPassword)

    // Show success message and close modal
    showNotification("Password changed successfully!", "success")
    setShowPasswordModal(false)
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      username: "admin"
    })
  }

  const closePasswordModal = () => {
    setShowPasswordModal(false)
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      username: "admin"
    })
  }

  return (
    <>
      <div className="relative">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 border-sidebar-border hover:bg-sidebar-accent/20"
        >
          <Lock className="h-4 w-4" />
          <span>Admin</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </Button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-card shadow-lg z-50">
            {adminOptions.map((option) => {
              const Icon = option.icon
              return (
                <button
                  key={option.id}
                  onClick={() => {
                    setIsOpen(false)
                    if (option.id === "logout") {
                      handleLogout()
                    } else if (option.id === "password") {
                      setShowPasswordModal(true)
                    }
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 text-sm hover:bg-primary/10 hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg border-b border-border last:border-b-0"
                >
                  <Icon className="h-4 w-4" />
                  <span>{option.label}</span>
                </button>
              )
            })}
          </div>
        )}
      </div>

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

      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg shadow-lg max-w-md w-full">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Change Password</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closePasswordModal}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              {/* Username Field */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    value={passwordForm.username}
                    onChange={(e) => setPasswordForm({ ...passwordForm, username: e.target.value })}
                    className="w-full pl-10"
                    placeholder="Enter username"
                  />
                </div>
              </div>

              {/* Current Password */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Current Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="password"
                    value={passwordForm.currentPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                    className="w-full pl-10"
                    placeholder="Enter current password"
                  />
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="password"
                    value={passwordForm.newPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                    className="w-full pl-10"
                    placeholder="Enter new password"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Password must be at least 6 characters long
                </p>
              </div>

              {/* Confirm New Password */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="password"
                    value={passwordForm.confirmPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                    className="w-full pl-10"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-2 p-6 border-t border-border bg-muted/20">
              <Button variant="outline" onClick={closePasswordModal}>
                Cancel
              </Button>
              <Button 
                onClick={handleChangePassword} 
                className="bg-[#345143] text-white hover:bg-[#2a4037]"
              >
                Change Password
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}