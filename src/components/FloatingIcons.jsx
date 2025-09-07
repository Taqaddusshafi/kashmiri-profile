'use client'
import { useState, useEffect } from 'react'

export default function FloatingIcons({ scrollY, isKashmiri }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const techIcons = [
    { icon: '⚛️', size: 'text-7xl', position: 'top-32 left-10', delay: '0s' },
    { icon: '🔐', size: 'text-6xl', position: 'top-48 right-20', delay: '1s' },
    { icon: '📱', size: 'text-5xl', position: 'bottom-40 left-20', delay: '2s' },
    { icon: '🛠️', size: 'text-7xl', position: 'bottom-32 right-10', delay: '3s' },
    { icon: '🌟', size: 'text-4xl', position: 'top-1/2 left-8', delay: '4s' },
    { icon: '☁️', size: 'text-6xl', position: 'top-1/4 right-1/4', delay: '5s' },
    { icon: '🤖', size: 'text-5xl', position: 'bottom-1/4 left-1/4', delay: '6s' }
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} ${item.size} animate-float-complex opacity-20 hover:opacity-60 transition-opacity duration-500 hover:scale-125 hidden lg:block`}
          style={{ 
            animationDelay: item.delay,
            transform: `translateY(${Math.sin(scrollY * 0.01 + index) * 20}px) translateX(${Math.cos(scrollY * 0.01 + index) * 10}px)`
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  )
}
