'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface BookHeroClientProps {
    book: any
}

export default function BookHeroClient({ book }: BookHeroClientProps) {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start py-16">
            <motion.div
                initial={{ opacity: 0, x: -40, rotate: -3 }}
                animate={{ opacity: 1, x: 0, rotate: -1.5 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full max-w-sm mx-auto md:mx-0 shadow-2xl shadow-black/60 aspect-[2/3] flex items-center justify-center p-8 text-center bg-cover bg-center overflow-hidden relative"
                style={{ backgroundColor: book.coverBg || '#1a1208', transform: 'rotate(-1.5deg)' }}
            >
                {book.imageUrl ? (
                    <img src={book.imageUrl} alt={book.title} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                    <span className="font-cormorant italic text-ivory text-3xl leading-snug relative z-10">
                        {book.title}
                    </span>
                )}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <div className="font-mono text-xs text-stone tracking-widest uppercase">
                    <Link href="/books" className="hover:text-gold transition-colors">Books</Link>
                    {book.genreName && <span> / {book.genreName}</span>}
                </div>

                <div className="mt-4">
                    {book.genre?.map((g: string) => (
                        <span key={g} className="font-mono text-xs text-gold border border-gold/30 px-3 py-1 mr-2 inline-block">
                            {g}
                        </span>
                    ))}
                </div>

                <div className="mt-6">
                    <h1 className="font-cormorant text-5xl md:text-6xl text-ivory font-light leading-tight">
                        {book.title}
                    </h1>
                    {book.titleEn && (
                        <h2 className="font-garamond italic text-stone text-lg mt-2">
                            {book.titleEn}
                        </h2>
                    )}
                </div>

                <div className="mt-6 flex items-baseline">
                    <span className="font-garamond italic text-stone text-sm">by</span>
                    <span className="font-cinzel text-sm tracking-widest text-parchment ml-2">
                        {book.authorName}
                    </span>
                </div>

                <hr className="border-t border-gold/30 mt-8 mb-8" />

                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                        <span className="font-mono text-xs text-stone tracking-widest block">PUBLICATION DATE</span>
                        <span className="font-garamond text-parchment text-sm mt-1 block">{book.formattedDate}</span>
                    </div>
                    <div>
                        <span className="font-mono text-xs text-stone tracking-widest block">PAGE COUNT</span>
                        <span className="font-garamond text-parchment text-sm mt-1 block">{book.pageCount || 'TBD'}</span>
                    </div>
                    <div>
                        <span className="font-mono text-xs text-stone tracking-widest block">LANGUAGE</span>
                        <span className="font-garamond text-parchment text-sm mt-1 block">{book.language || 'Bengali'}</span>
                    </div>
                    <div>
                        <span className="font-mono text-xs text-stone tracking-widest block">ISBN</span>
                        <span className="font-garamond text-parchment text-sm mt-1 block">{book.isbn || 'Pending'}</span>
                    </div>
                </div>

                <div className="mt-8">
                    <span className="font-cormorant text-5xl text-gold font-light block leading-none">
                        {book.price || '₹450'}
                    </span>
                    <span className="font-mono text-xs text-stone mt-2 block">
                        Indian Rupees incl. taxes
                    </span>
                </div>

                <Link
                    href={book.buyLink || '#'}
                    className="bg-gold text-void font-cinzel text-xs tracking-widest px-10 py-5 w-full text-center block mt-6 hover:bg-gold-dim transition-all duration-300 uppercase"
                >
                    ORDER THIS BOOK
                </Link>

                <Link
                    href="/books"
                    className="font-cinzel text-xs tracking-widest text-stone hover:text-gold transition-colors duration-300 mt-4 block"
                >
                    ← Back to Catalog
                </Link>
            </motion.div>
        </div>
    )
}
