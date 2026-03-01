'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

/* ── Placeholder Data ── */
const POSTS = [
    {
        id: 1,
        slug: "why-independent-publishing-is-the-future",
        title: "Why Independent Publishing is the Future of Bengali Literature",
        category: "Essays",
        date: "December 12, 2024",
        readTime: "8 min read",
        excerpt: "The mainstream gatekeepers have long ignored the rich diversity of voices emerging from Bengal. We believe that changes now — and here is why independent publishing is not just viable, but necessary.",
        author: "Subhadeep Kar",
        featured: true,
        coverBg: "#1a1208",
    },
    {
        id: 2,
        slug: "in-conversation-with-priya-sengupta",
        title: "In Conversation with Priya Sengupta",
        category: "Author Interviews",
        date: "November 28, 2024",
        readTime: "12 min read",
        excerpt: "We sat down with the author of The Cartographer of Lost Skies to talk about world-building, loneliness, and the act of writing science fiction in Bengali.",
        author: "Poulami Mitra",
        featured: false,
        coverBg: "#0d1219",
    },
    {
        id: 3,
        slug: "the-art-of-the-book-cover",
        title: "The Art of the Book Cover: How We Design for Emotion",
        category: "News",
        date: "November 5, 2024",
        readTime: "6 min read",
        excerpt: "A book cover is a promise. It tells the reader what kind of world they are about to enter. Here is how we approach every cover as a work of art in its own right.",
        author: "Poulami Mitra",
        featured: false,
        coverBg: "#120d0d",
    },
    {
        id: 4,
        slug: "review-echoes-in-the-void",
        title: "Review: Echoes in the Void by Meera Bose",
        category: "Book Reviews",
        date: "October 18, 2024",
        readTime: "5 min read",
        excerpt: "Meera Bose's debut fantasy novel is a rare thing — a book that builds an entire world and then dismantles it with the precision of a philosopher and the tenderness of a poet.",
        author: "Subhadeep Kar",
        featured: false,
        coverBg: "#0d120e",
    },
    {
        id: 5,
        slug: "on-translating-silence",
        title: "On Translating Silence: The Challenge of Bengali to English",
        category: "Essays",
        date: "September 30, 2024",
        readTime: "10 min read",
        excerpt: "Some things in Bengali simply do not translate. Not because English lacks the words, but because some feelings were born in a specific language and resist emigration.",
        author: "Subhadeep Kar",
        featured: false,
        coverBg: "#1a1208",
    },
    {
        id: 6,
        slug: "announcing-2025-open-submissions",
        title: "Announcing Our 2025 Open Submissions Window",
        category: "News",
        date: "September 1, 2024",
        readTime: "3 min read",
        excerpt: "We are opening our submissions window for 2025 acquisitions. We are particularly looking for debut novels, poetry collections, and science fiction this cycle.",
        author: "Poulami Mitra",
        featured: false,
        coverBg: "#0d1219",
    },
    {
        id: 7,
        slug: "six-years-of-kothakhahon",
        title: "Six Years of Kothakhahon: A Letter from the Founders",
        category: "Essays",
        date: "August 15, 2024",
        readTime: "7 min read",
        excerpt: "Six years ago we started with three books and a shared desk. Today we carry over 600 titles and the voices of 120 authors. Here is what we have learned.",
        author: "Subhadeep Kar",
        featured: false,
        coverBg: "#120d0d",
    },
]

const CATEGORIES = ["All", "Essays", "Author Interviews", "Book Reviews", "News"]

export default function BlogIndexPage() {
    const [activeCategory, setActiveCategory] = useState("All")

    const filteredPosts = activeCategory === 'All'
        ? POSTS.filter(p => !p.featured)
        : POSTS.filter(p => p.category === activeCategory)

    const featuredPost = POSTS.find(p => p.featured)

    return (
        <>
            {/* ═══════════════════════════════════════════════
          SECTION 1 — Page Header
      ═══════════════════════════════════════════════ */}
            <section className="bg-void pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <span className="font-cinzel text-xs tracking-widest text-gold uppercase">
                        FROM THE PRESS
                    </span>
                    <div className="w-10 h-px bg-gold mt-3 mb-6" />

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}>
                        <h1 className="font-cormorant text-6xl md:text-8xl text-ivory font-light">
                            The Kothakhahon Journal
                        </h1>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}>
                        <p className="font-garamond italic text-stone text-xl mt-4 max-w-2xl">
                            Essays, interviews, reviews, and dispatches from the world of independent publishing.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 2 — Category Filter Bar
      ═══════════════════════════════════════════════ */}
            <div className="bg-obsidian border-y border-smoke py-5 px-6 sticky top-[72px] z-40">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hidden-scrollbar overflow-x-auto">

                    <div className="flex gap-2 min-w-max">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`font-cinzel text-xs tracking-widest px-4 py-2 border transition-all duration-300 uppercase ${activeCategory === cat
                                        ? 'border-gold text-gold bg-gold/5'
                                        : 'border-smoke text-stone hover:border-gold/40 hover:text-parchment'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="font-mono text-xs text-stone tracking-widest uppercase flex-shrink-0">
                        {activeCategory === 'All' ? POSTS.length : filteredPosts.length} Articles
                    </div>

                </div>
            </div>

            {/* ═══════════════════════════════════════════════
          SECTION 3 — Featured Post (Only on 'All')
      ═══════════════════════════════════════════════ */}
            {activeCategory === 'All' && featuredPost && (
                <section className="bg-void py-16 px-6">
                    <div className="max-w-7xl mx-auto">
                        <span className="font-mono text-xs text-gold tracking-widest mb-8 block uppercase">
                            FEATURED
                        </span>

                        <Link href={`/blog/${featuredPost.slug}`} className="block group">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-smoke group-hover:border-gold/40 transition-all duration-500">
                                {/* Left: Cover */}
                                <div
                                    className="aspect-[4/3] md:aspect-auto md:h-full min-h-[300px] relative p-4 flex"
                                    style={{ backgroundColor: featuredPost.coverBg }}
                                >
                                    <span className="absolute top-4 left-4 font-mono text-xs text-gold bg-void/80 px-3 py-1 uppercase">
                                        {featuredPost.category}
                                    </span>
                                </div>

                                {/* Right: Content */}
                                <div className="bg-obsidian p-10 md:p-16 flex flex-col justify-center">
                                    <span className="font-mono text-xs text-gold tracking-widest mb-4 uppercase">
                                        {featuredPost.category}
                                    </span>

                                    <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light leading-tight group-hover:text-gold transition-colors duration-300">
                                        {featuredPost.title}
                                    </h2>

                                    <p className="font-garamond text-parchment text-lg leading-relaxed mt-6">
                                        {featuredPost.excerpt}
                                    </p>

                                    <div className="mt-8 flex gap-6 items-center flex-wrap">
                                        <span className="font-mono text-xs text-stone uppercase">{featuredPost.author}</span>
                                        <span className="font-mono text-xs text-stone uppercase">{featuredPost.date}</span>
                                        <span className="font-mono text-xs text-gold uppercase">{featuredPost.readTime}</span>
                                    </div>

                                    <span className="font-cinzel text-xs tracking-widest text-gold mt-8 inline-block border-b border-gold/40 pb-1 w-fit group-hover:text-ivory transition-colors duration-300 uppercase">
                                        Read Essay →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* ═══════════════════════════════════════════════
          SECTION 4 — Regular Posts Grid
      ═══════════════════════════════════════════════ */}
            <section className="bg-void pb-24 px-6 pt-16">
                <div className="max-w-7xl mx-auto">
                    {activeCategory !== 'All' && (
                        <div className="mb-12">
                            <SectionHeader
                                eyebrow="CATEGORY"
                                title={activeCategory}
                                centered={false}
                            />
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="block group h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.08, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="bg-obsidian border border-smoke hover:border-gold/40 transition-all duration-500 h-full flex flex-col"
                                >
                                    {/* Card Cover */}
                                    <div className="h-48 relative" style={{ backgroundColor: post.coverBg }}>
                                        <span className="absolute top-3 left-3 font-mono text-xs text-gold bg-void/80 px-2 py-1 uppercase">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <span className="font-mono text-xs text-stone mb-4 uppercase">
                                            {post.readTime}
                                        </span>

                                        <h3 className="font-cormorant text-2xl text-ivory leading-snug group-hover:text-gold transition-colors duration-300">
                                            {post.title}
                                        </h3>

                                        <p className="font-garamond text-stone text-sm leading-relaxed mt-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto pt-6 flex justify-between items-center">
                                            <span className="font-mono text-xs text-stone uppercase">{post.author}</span>
                                            <span className="font-mono text-xs text-stone uppercase">{post.date}</span>
                                        </div>

                                        <span className="font-cinzel text-xs tracking-widest text-gold mt-6 block border-b border-gold/30 pb-1 w-fit uppercase">
                                            Read More →
                                        </span>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="py-24 text-center">
                            <p className="font-garamond italic text-stone text-xl">
                                No articles found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
