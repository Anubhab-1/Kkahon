'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import BookCard from '@/components/ui/BookCard'

/* ── Placeholder Data ── */
const BOOK = {
    title: "নীলিমার শেষ প্রান্তে",
    titleEn: "At the Edge of the Blue Horizon",
    author: "Arjun Dasgupta",
    genre: ["Literary Fiction", "Bengali Literature"],
    synopsis: `In the rain-soaked lanes of North Calcutta, a retired schoolteacher named Haripada discovers a bundle of letters hidden behind a crumbling wall — letters written by a woman he once loved, and never sent. As he reads each one, the city itself seems to breathe differently around him. The past and present collapse into each other, and Haripada must confront what it means to have lived a life of careful silences.\n\nনীলিমার শেষ প্রান্তে is a meditation on memory, longing, and the quiet devastation of unexpressed love. Written in luminous prose that moves between Bengali and the unspeakable, Arjun Dasgupta's debut novel has been called the most important Bengali novel of the decade.\n\nThis is a book about what remains when everything else is gone — and whether that is enough.`,
    pullQuote: "Some letters are never meant to be sent. They are written only so the heart does not break from keeping them.",
    price: "₹450",
    buyLink: "#",
    publicationDate: "March 2024",
    pageCount: 312,
    isbn: "978-81-XXXXXXX-X",
    language: "Bengali",
    coverBg: "#1a1208",
    authorBio: "Arjun Dasgupta is one of Bengal's most celebrated contemporary voices. His debut novel redefined literary fiction for a new generation, weaving personal memory with historical trauma in prose that reads like poetry. He has been published in twelve languages and has won the Sahitya Akademi Award.",
    authorInitials: "AD",
    relatedBooks: [
        { title: "শেষ চিঠি", author: "Sourav Ghosh", genre: "Literary Fiction", coverBg: "#1a1208", slug: "shesh-chithi" },
        { title: "নদীর ওপারে", author: "Susmita Dey", genre: "Literary Fiction", coverBg: "#1a1208", slug: "nodir-opare" },
        { title: "একা একা পথ", author: "Moumita Das", genre: "Literary Fiction", coverBg: "#1a1208", slug: "eka-eka-poth" },
        { title: "স্মৃতির শহর", author: "Tanmoy Ghosh", genre: "Literary Fiction", coverBg: "#1a1208", slug: "smritir-shohor" },
    ]
}

export default function BookDetailPage() {
    // Split synopsis into paragraphs
    const paragraphs = BOOK.synopsis.split('\n\n')

    return (
        <>
            <section className="bg-void pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start py-16">

                    <motion.div
                        initial={{ opacity: 0, x: -40, rotate: -3 }}
                        animate={{ opacity: 1, x: 0, rotate: -1.5 }}
                        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="w-full max-w-sm mx-auto md:mx-0 shadow-2xl shadow-black/60 aspect-[2/3] flex items-center justify-center p-8 text-center"
                        style={{ backgroundColor: BOOK.coverBg, transform: 'rotate(-1.5deg)' }}
                    >
                        <span className="font-cormorant italic text-ivory text-3xl leading-snug">
                            {BOOK.title}
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="font-mono text-xs text-stone tracking-widest uppercase">
                            <Link href="/books" className="hover:text-gold transition-colors">Books</Link>
                            <span> / {BOOK.genre[0]}</span>
                        </div>

                        <div className="mt-4">
                            {BOOK.genre.map((g) => (
                                <span key={g} className="font-mono text-xs text-gold border border-gold/30 px-3 py-1 mr-2 inline-block">
                                    {g}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6">
                            <h1 className="font-cormorant text-5xl md:text-6xl text-ivory font-light leading-tight">
                                {BOOK.title}
                            </h1>
                            <h2 className="font-garamond italic text-stone text-lg mt-2">
                                {BOOK.titleEn}
                            </h2>
                        </div>

                        <div className="mt-6 flex items-baseline">
                            <span className="font-garamond italic text-stone text-sm">by</span>
                            <span className="font-cinzel text-sm tracking-widest text-parchment ml-2">
                                {BOOK.author}
                            </span>
                        </div>

                        <hr className="border-t border-gold/30 mt-8 mb-8" />

                        <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                            <div>
                                <span className="font-mono text-xs text-stone tracking-widest block">PUBLICATION DATE</span>
                                <span className="font-garamond text-parchment text-sm mt-1 block">{BOOK.publicationDate}</span>
                            </div>
                            <div>
                                <span className="font-mono text-xs text-stone tracking-widest block">PAGE COUNT</span>
                                <span className="font-garamond text-parchment text-sm mt-1 block">{BOOK.pageCount}</span>
                            </div>
                            <div>
                                <span className="font-mono text-xs text-stone tracking-widest block">LANGUAGE</span>
                                <span className="font-garamond text-parchment text-sm mt-1 block">{BOOK.language}</span>
                            </div>
                            <div>
                                <span className="font-mono text-xs text-stone tracking-widest block">ISBN</span>
                                <span className="font-garamond text-parchment text-sm mt-1 block">{BOOK.isbn}</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <span className="font-cormorant text-5xl text-gold font-light block leading-none">
                                {BOOK.price}
                            </span>
                            <span className="font-mono text-xs text-stone mt-2 block">
                                Indian Rupees incl. taxes
                            </span>
                        </div>

                        <Link
                            href={BOOK.buyLink}
                            className="bg-gold text-void font-cinzel text-xs tracking-widest px-10 py-5 w-full text-center block mt-6 hover:bg-gold-dim transition-all duration-300"
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
            </section>

            <section className="bg-obsidian py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <span className="font-cinzel text-xs tracking-widest text-gold mb-6 block">ABOUT THIS BOOK</span>
                    <div className="w-10 h-px bg-gold mb-8" />

                    <div className="font-garamond text-parchment text-lg leading-relaxed">
                        {paragraphs.map((p, i) => {
                            if (i === 0) {
                                const firstChar = p.charAt(0)
                                const restOfPara = p.slice(1)
                                return (
                                    <p key={i} className="mb-6">
                                        <span className="float-left font-cormorant text-8xl text-gold leading-none mr-3 mt-1 font-light block h-[0.7em]">
                                            {firstChar}
                                        </span>
                                        {restOfPara}
                                    </p>
                                )
                            }
                            return (
                                <p key={i} className="mb-6">
                                    {p}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-void py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <hr className="border-t border-gold/30 max-w-32 mx-auto" />

                    <span className="block font-cormorant text-9xl text-gold/20 leading-none mb-[-2rem] mt-6">
                        "
                    </span>

                    <blockquote className="font-cormorant italic text-ivory text-2xl md:text-4xl leading-relaxed font-light relative z-10">
                        {BOOK.pullQuote}
                    </blockquote>

                    <span className="block font-mono text-xs text-gold tracking-widest mt-8 mb-8 uppercase">
                        — {BOOK.title}
                    </span>

                    <hr className="border-t border-gold/30 max-w-32 mx-auto" />
                </div>
            </section>

            <section className="bg-obsidian py-24 px-6">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">

                    <div className="col-span-1">
                        <div className="bg-ash border border-smoke aspect-square flex items-center justify-center">
                            <span className="font-cormorant text-6xl text-gold/30 font-light">
                                {BOOK.authorInitials}
                            </span>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <span className="font-cinzel text-xs tracking-widest text-gold mb-4 block">ABOUT THE AUTHOR</span>
                        <div className="w-10 h-px bg-gold mb-6" />
                        <h3 className="font-cormorant text-4xl text-ivory font-light">
                            {BOOK.author}
                        </h3>
                        <p className="font-garamond text-parchment text-base leading-relaxed mt-4">
                            {BOOK.authorBio}
                        </p>
                        <Link
                            href="/authors"
                            className="inline-block font-cinzel text-xs tracking-widest text-gold hover:text-ivory border-b border-gold/40 pb-1 mt-6 transition-colors duration-300 uppercase"
                        >
                            View Author Profile →
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-void py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <span className="font-cinzel text-xs tracking-widest text-gold mb-4 block">YOU MAY ALSO LIKE</span>
                    <div className="w-10 h-px bg-gold mb-12" />

                    <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                        {BOOK.relatedBooks.map((relatedBook, i) => (
                            <div key={i} className="min-w-[200px] max-w-[200px] flex-shrink-0">
                                <BookCard
                                    title={relatedBook.title}
                                    author={relatedBook.author}
                                    genre={relatedBook.genre}
                                    coverBg={relatedBook.coverBg}
                                    slug={relatedBook.slug}
                                    large={false}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-obsidian border-t border-smoke px-6 py-4 flex justify-between items-center shadow-[0_-8px_30px_rgba(0,0,0,0.4)]">
                <span className="font-cormorant text-3xl text-gold leading-none">
                    {BOOK.price}
                </span>
                <Link
                    href={BOOK.buyLink}
                    className="bg-gold text-void font-cinzel text-xs tracking-widest px-8 py-3 hover:bg-gold-dim transition-all duration-300"
                >
                    ORDER NOW
                </Link>
            </div>
        </>
    )
}
