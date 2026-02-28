'use client'

import { useState, useEffect, useRef } from 'react'

interface AnimatedCounterProps {
    target: number
    suffix?: string
    duration?: number
}

export default function AnimatedCounter({ target, suffix = '', duration = 2000 }: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const countRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Disconnect observer once visible so it only animates once
                    if (countRef.current) observer.unobserve(countRef.current)
                }
            },
            { threshold: 0.1 }
        )

        if (countRef.current) {
            observer.observe(countRef.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        if (!isVisible) return

        let current = 0
        // If target is very large, step might be > 1, but for our numbers (<=600) + duration 2000,
        // interval time = 2000 / 600 = ~3.33ms. browsers cap at 4ms usually.
        const stepTime = Math.max(Math.abs(Math.floor(duration / target)), 4)
        // To ensure exactly finishing in time, we calculate step size based on a fixed 16ms frame
        // For simplicity, let's do a requestAnimationFrame or interval approach.
        // Interval approach as requested:

        // Calculate increment step based on a reasonable interval (e.g. 16ms/60fps)
        const intervalTime = 16
        const totalSteps = duration / intervalTime
        const stepValue = Math.max(target / totalSteps, 1)

        const timer = setInterval(() => {
            current += stepValue
            if (current >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, intervalTime)

        return () => clearInterval(timer)
    }, [isVisible, target, duration])

    return (
        <div ref={countRef} className="inline-flex items-baseline">
            <span className="font-cormorant text-7xl text-gold font-light leading-none">
                {count}
            </span>
            {suffix && (
                <span className="font-cormorant text-5xl text-gold font-light">
                    {suffix}
                </span>
            )}
        </div>
    )
}
