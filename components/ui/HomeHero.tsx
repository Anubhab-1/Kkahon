'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const tickerText = 'LITERARY FICTION · POETRY · SCIENCE FICTION · FANTASY · KOTHAKHAHON PRAKASHANI · '

export default function HomeHero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-void flex flex-col items-center justify-center text-center px-6">
            {/* Animated Mystical Dust Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="stars absolute inset-0" />
            </div>

            {/* Radial gradient overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{ background: 'radial-gradient(ellipse at center, rgba(201,151,58,0.06) 0%, transparent 80%)' }}
            />

            {/* Eyebrow */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-cinzel text-xs tracking-widest text-gold mb-8 relative z-10"
            >
                KOTHAKHAHON PRAKASHANI
            </motion.span>

            {/* Main headline */}
            <div className="relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-cormorant font-light text-ivory text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tight"
                >
                    যেখানে গল্প
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-cormorant font-light italic text-gold gold-shimmer text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tight"
                >
                    কথা বলে
                </motion.h1>
            </div>

            {/* Subline */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="font-garamond italic text-stone text-xl md:text-2xl mt-8 relative z-10"
            >
                Where Stories Find Their Voice
            </motion.p>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="relative z-10"
            >
                <Link
                    href="/books"
                    className="inline-block border border-gold text-gold font-cinzel text-xs tracking-widest px-8 py-4 mt-12 hover:bg-gold hover:text-void transition-all duration-500"
                >
                    Explore Our Books
                </Link>
            </motion.div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                <span className="font-mono text-xs text-stone tracking-widest">SCROLL</span>
                <div className="w-px h-10 bg-gold/40 animate-pulse" />
            </div>

            {/* Ticker */}
            <div className="absolute bottom-0 left-0 right-0 glass-panel border-t border-white/10 py-3 overflow-hidden z-20">
                <div
                    className="font-mono text-xs text-parchment tracking-widest whitespace-nowrap"
                    style={{ animation: 'ticker 30s linear infinite' }}
                >
                    {tickerText.repeat(6)}
                </div>
            </div>
        </section>
    )
}
