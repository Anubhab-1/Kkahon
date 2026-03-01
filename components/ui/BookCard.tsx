'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface BookCardProps {
    title: string
    author: string
    genre: string
    coverBg?: string
    imageUrl?: string
    large?: boolean
    slug?: string
}

export default function BookCard({ title, author, genre, coverBg = '#1a1208', imageUrl, large = false, slug }: BookCardProps) {
    const href = slug ? `/books/${slug}` : '/books'

    return (
        <Link href={href} className="group block">
            <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative overflow-hidden cursor-pointer rounded-sm border border-white/5 hover-glow-card"
                style={{ aspectRatio: '2/3', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}
            >
                {/* Cover area */}
                <div
                    className="absolute inset-0 flex items-center justify-center shadow-inner"
                    style={{ backgroundColor: coverBg }}
                >
                    {imageUrl ? (
                        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
                    ) : (
                        <span
                            className={`font-cormorant italic text-ivory text-center px-4 ${large ? 'text-2xl' : 'text-lg'
                                }`}
                        >
                            {title}
                        </span>
                    )}
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 glass-panel border-0 border-t border-white/10 px-4 py-4 translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500 z-10">
                    <div className="font-cinzel text-xs text-ivory tracking-wide truncate">
                        {title}
                    </div>
                    <div className="font-garamond text-xs text-stone mt-1">
                        {author}
                    </div>
                    <span className="font-mono text-[10px] text-gold border border-gold/30 px-2 py-0.5 mt-2 inline-block rounded-sm">
                        {genre}
                    </span>
                </div>
            </motion.div>
        </Link>
    )
}
