"use client"

import { useEffect, useState } from "react"

export default function LoadingIntro() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000) // Show for 3 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream animate-fade-out">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="w-24 h-24 border-4 border-gold/20 rounded-full animate-spin-slow">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-gold rounded-full transform -translate-x-1/2 -translate-y-1"></div>
        </div>

        {/* Inner pulsing circle with Africa shape */}
        <div className="absolute inset-2 flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/80 rounded-full animate-pulse-gentle flex items-center justify-center">
            {/* Simplified Africa continent shape */}
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-dark-green animate-float">
              <path
                fill="currentColor"
                d="M12 2c-1.5 0-2.8.5-3.8 1.3-.8.6-1.4 1.4-1.8 2.3-.3.7-.4 1.4-.4 2.1 0 .5.1 1 .2 1.5.2.8.5 1.5.9 2.2.6 1 1.4 1.8 2.3 2.4.5.3 1 .5 1.6.6.3.1.6.1.9.1s.6 0 .9-.1c.6-.1 1.1-.3 1.6-.6.9-.6 1.7-1.4 2.3-2.4.4-.7.7-1.4.9-2.2.1-.5.2-1 .2-1.5 0-.7-.1-1.4-.4-2.1-.4-.9-1-1.7-1.8-2.3C14.8 2.5 13.5 2 12 2zm0 2c.8 0 1.5.2 2.1.6.4.3.7.6.9 1 .2.3.3.7.3 1.1 0 .3-.1.6-.1.9-.1.4-.3.8-.5 1.1-.3.5-.7.9-1.2 1.2-.2.1-.5.2-.7.3-.1 0-.2 0-.3 0s-.2 0-.3 0c-.2-.1-.5-.2-.7-.3-.5-.3-.9-.7-1.2-1.2-.2-.3-.4-.7-.5-1.1 0-.3-.1-.6-.1-.9 0-.4.1-.8.3-1.1.2-.4.5-.7.9-1C10.5 4.2 11.2 4 12 4z"
              />
              <circle cx="12" cy="8" r="1" fill="currentColor" className="animate-ping" />
            </svg>
          </div>
        </div>

        {/* Circuit lines */}
        <div className="absolute inset-0 animate-draw-circuit">
          <svg className="w-full h-full" viewBox="0 0 96 96">
            <path
              d="M48 12 L48 24 M48 72 L48 84 M12 48 L24 48 M72 48 L84 48"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-gold/40"
              strokeDasharray="4 4"
              strokeDashoffset="0"
            />
          </svg>
        </div>
      </div>

      {/* Loading text */}
      <div className="absolute bottom-1/3 text-center">
        <p className="text-dark-green font-serif text-lg font-semibold animate-pulse-text">Afri Tech Group</p>
        <div className="flex justify-center mt-2 space-x-1">
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce-1"></div>
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce-2"></div>
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce-3"></div>
        </div>
      </div>
    </div>
  )
}
