'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { label: 'Books', href: '/books' },
    { label: 'Authors', href: '/authors' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
]

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const closeMobile = () => setMobileOpen(false)

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-obsidian/90 backdrop-blur-md border-b ${scrolled ? 'border-gold/20 shadow-lg' : 'border-smoke'
                }`}
        >
            {/* Main bar */}
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-[72px]">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group" onClick={closeMobile}>
                    <div className="relative">
                        {/* Animated glow behind logo */}
                        <div className="absolute inset-0 rounded-full bg-gold/20 blur-md
                            opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-110
                            transition-all duration-700 ease-out" />
                        <img
                            src="/images/logo.png"
                            alt="Kothakhahon Prakashani"
                            className="h-10 w-10 object-contain relative z-10
                            transition-all duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-cinzel text-gold text-xs tracking-widest leading-none">
                            KOTHAKHAHON
                        </span>
                        <span className="font-cinzel text-stone text-[10px] tracking-widest leading-none mt-1">
                            PRAKASHANI
                        </span>
                    </div>
                </Link>

                {/* Desktop nav links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`font-cinzel text-xs tracking-widest uppercase transition-colors duration-300 ${pathname === link.href ? 'text-gold border-b border-gold pb-0.5' : 'text-stone hover:text-ivory'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-4">
                    {/* Desktop CTA */}
                    <Link
                        href="/for-authors"
                        className="hidden md:inline-block font-cinzel text-xs tracking-widest border border-gold text-gold px-4 py-2 hover:bg-gold hover:text-void transition-all duration-300"
                    >
                        SUBMIT MANUSCRIPT
                    </Link>

                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-parchment"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-obsidian border-b border-smoke"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMobile}
                                className={`block font-cinzel text-xs tracking-widest uppercase transition-colors duration-300 py-4 px-6 border-b border-smoke/50 ${pathname === link.href ? 'text-gold' : 'text-stone hover:text-gold'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/for-authors"
                            onClick={closeMobile}
                            className="block font-cinzel text-xs tracking-widest text-stone hover:text-gold py-4 px-6 border-b border-smoke/50 transition-colors duration-300"
                        >
                            SUBMIT MANUSCRIPT
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
