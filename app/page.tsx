"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, User, Eye, EyeOff, CheckCircle } from "lucide-react"

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState<{ show: boolean; message: string; type: "success" | "error" }>({ 
    show: false, 
    message: "", 
    type: "success" 
  })
  const router = useRouter()

  const showNotification = (message: string, type: "success" | "error" = "success") => {
    setNotification({ show: true, message, type })
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "success" })
    }, 3000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Basic validation
    if (!formData.username || !formData.password) {
      showNotification("Please fill in all fields", "error")
      setIsLoading(false)
      return
    }

    try {
      // Call backend API for authentication
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Handle validation errors
        if (data.errors && Array.isArray(data.errors)) {
          const errorMessages = data.errors.map((err: any) => err.message).join(", ")
          showNotification(errorMessages || data.message || "Validation failed", "error")
        } else {
          showNotification(data.message || "Login failed. Please try again.", "error")
        }
        setIsLoading(false)
        return
      }

      // Login successful
      showNotification("Login successful!", "success")
      
      // Store authentication state
      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("username", data.data?.username || formData.username)
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken)
      }
      
      // Redirect to dashboard
      setTimeout(() => {
        router.push("/dashboard")
      }, 1000)
    } catch (error) {
      console.error("Login error:", error)
      showNotification("Login failed. Please try again.", "error")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex items-center justify-center p-4">
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
            <Lock className="h-3 w-3" />
          </Button>
        </div>
      )}

      <Card className="w-full max-w-md border-border bg-card/50 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-foreground">Admin Sign In</CardTitle>
            <CardDescription className="text-muted-foreground mt-2">
              Enter your credentials to access the admin panel
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-foreground">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  className="w-full pl-10 pr-4"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12"
                  disabled={isLoading}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>


            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#345143] text-white hover:bg-[#2a4037] transition-colors"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing In...
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

        </CardContent>
      </Card>
    </div>
  )
}