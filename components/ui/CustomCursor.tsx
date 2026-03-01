'use client'

import { useState, useEffect, useRef } from 'react'

export default function CustomCursor() {
    const [dotPosition, setDotPosition] = useState({ x: -100, y: -100 })
    const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 })
    const [isHovering, setIsHovering] = useState(false)
    const [isMobile, setIsMobile] = useState(true)

    const requestRef = useRef<number>()
    const posRef = useRef({ dot: { x: -100, y: -100 }, ring: { x: -100, y: -100 } })

    useEffect(() => {
        // Only run on non-mobile screens
        if (window.innerWidth < 768) return
        setIsMobile(false)

        const handleMouseMove = (e: MouseEvent) => {
            setDotPosition({ x: e.clientX, y: e.clientY })
            posRef.current.dot = { x: e.clientX, y: e.clientY }
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.getAttribute('role') === 'button'
            ) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        const animateRing = () => {
            const { dot, ring } = posRef.current

            // Lerp the ring position towards the dot
            ring.x += (dot.x - ring.x) * 0.12
            ring.y += (dot.y - ring.y) * 0.12

            setRingPosition({ x: ring.x, y: ring.y })
            requestRef.current = requestAnimationFrame(animateRing)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseover', handleMouseOver)
        requestRef.current = requestAnimationFrame(animateRing)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
            if (requestRef.current) cancelAnimationFrame(requestRef.current)
        }
    }, [])

    if (isMobile) return null

    return (
        <>
            {/* The Dot */}
            <div
                className="fixed pointer-events-none rounded-full"
                style={{
                    zIndex: 99999,
                    width: isHovering ? '12px' : '8px',
                    height: isHovering ? '12px' : '8px',
                    backgroundColor: '#C9973A',
                    transform: 'translate(-50%, -50%)',
                    transition: 'width 0.2s, height 0.2s',
                    top: dotPosition.y,
                    left: dotPosition.x,
                    mixBlendMode: 'difference'
                }}
            />
            {/* The Ring */}
            <div
                className="fixed pointer-events-none rounded-full"
                style={{
                    zIndex: 99998,
                    width: isHovering ? '48px' : '32px',
                    height: isHovering ? '48px' : '32px',
                    border: '1px solid rgba(201, 151, 58, 0.6)',
                    transform: 'translate(-50%, -50%)',
                    transition: 'width 0.3s, height 0.3s, border-color 0.3s',
                    top: ringPosition.y,
                    left: ringPosition.x
                }}
            />
        </>
    )
}
