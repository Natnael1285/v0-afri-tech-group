"use client"

import React, { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface CometCardProps {
  children: React.ReactNode
  className?: string
}

export function CometCard({ children, className }: CometCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [transform, setTransform] = useState("")

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!card) return

      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
      )
    }

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      setTransform("perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)")
    }

    if (isHovered) {
      card.addEventListener("mousemove", handleMouseMove)
    }

    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseenter", handleMouseEnter)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isHovered])

  return (
    <div
      ref={cardRef}
      className={cn("h-full transition-transform duration-300 ease-out", className)}
      style={{
        transformStyle: "preserve-3d",
        transform: transform || "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
      }}
    >
      {children}
    </div>
  )
}

