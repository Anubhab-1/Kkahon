'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { getAllBlogPosts, urlFor } from '@/lib/sanity'

const CATEGORIES = ["All", "Essays", "Author Interviews", "Book Reviews", "News"]

export default function BlogIndexPage() {
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [activeCategory, setActiveCategory] = useState("All")

    useEffect(() => {
        async function fetchPosts() {
            try {
                const data = await getAllBlogPosts()
                setPosts(data)
            } catch (error) {
                console.error("Error fetching blog posts:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

    const filteredPosts = activeCategory === 'All'
        ? posts.filter(p => !p.featured)
        : posts.filter(p => p.category === activeCategory)

    const featuredPost = posts.find(p => p.featured)

    const formatDate = (dateString?: string) => {
        if (!dateString) return "December 12, 2024"
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

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
                        {!loading && `${activeCategory === 'All' ? posts.length : filteredPosts.length} Articles`}
                    </div>

                </div>
            </div>

            {/* ═══════════════════════════════════════════════
          SECTION 3 — Featured Post (Only on 'All')
      ═══════════════════════════════════════════════ */}
            {activeCategory === 'All' && !loading && featuredPost && (
                <section className="bg-void py-16 px-6">
                    <div className="max-w-7xl mx-auto">
                        <span className="font-mono text-xs text-gold tracking-widest mb-8 block uppercase">
                            FEATURED
                        </span>

                        <Link href={featuredPost.slug?.current ? `/blog/${featuredPost.slug.current}` : "/blog"} className="block group">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 glass-panel hover-glow-card hover:border-gold/40 transition-all duration-500 hover:-translate-y-2">
                                {/* Left: Cover */}
                                <div
                                    className="aspect-[4/3] md:aspect-auto md:h-full min-h-[300px] relative p-4 flex overflow-hidden"
                                    style={{ backgroundColor: '#1a1208' }}
                                >
                                    {featuredPost.coverImage && (
                                        <img src={urlFor(featuredPost.coverImage).width(800).url()} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover" />
                                    )}
                                    <span className="absolute top-4 left-4 font-mono text-xs text-gold bg-void/80 px-3 py-1 uppercase z-10">
                                        {featuredPost.category || "Essays"}
                                    </span>
                                </div>

                                {/* Right: Content */}
                                <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
                                    <span className="font-mono text-xs text-gold tracking-widest mb-4 uppercase">
                                        {featuredPost.category || "Essays"}
                                    </span>

                                    <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light leading-tight group-hover:text-gold transition-colors duration-300">
                                        {featuredPost.title}
                                    </h2>

                                    {featuredPost.excerpt && (
                                        <p className="font-garamond text-parchment text-lg leading-relaxed mt-6">
                                            {featuredPost.excerpt}
                                        </p>
                                    )}

                                    <div className="mt-8 flex gap-6 items-center flex-wrap">
                                        <span className="font-mono text-xs text-stone uppercase">{featuredPost.author?.name || 'Kothakhahon'}</span>
                                        <span className="font-mono text-xs text-stone uppercase">{formatDate(featuredPost.publishedAt)}</span>
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
            <section className="bg-void pb-24 px-6 pt-16 min-h-[50vh]">
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

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="bg-obsidian border border-smoke animate-pulse h-64 w-full" />
                            ))}
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {filteredPosts.map((post, index) => (
                                    <Link href={post.slug?.current ? `/blog/${post.slug.current}` : "/blog"} key={post._id || index} className="block group h-full">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.08, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                                            className="glass-panel hover-glow-card hover:border-gold/40 transition-all duration-500 h-full flex flex-col overflow-hidden relative"
                                        >
                                            {/* Card Cover */}
                                            <div className="h-48 relative overflow-hidden flex-shrink-0" style={{ backgroundColor: '#0d1219' }}>
                                                {post.coverImage && (
                                                    <img src={urlFor(post.coverImage).width(800).url()} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                                )}
                                                <span className="absolute top-3 left-3 font-mono text-xs text-gold bg-void/80 px-2 py-1 uppercase z-10">
                                                    {post.category || "Essays"}
                                                </span>
                                            </div>

                                            {/* Card Content */}
                                            <div className="p-8 flex flex-col flex-grow relative z-10 transition-colors duration-500">
                                                <h3 className="font-cormorant text-2xl text-ivory leading-snug group-hover:text-gold transition-colors duration-300">
                                                    {post.title}
                                                </h3>

                                                {post.excerpt && (
                                                    <p className="font-garamond text-stone text-sm leading-relaxed mt-4 line-clamp-3">
                                                        {post.excerpt}
                                                    </p>
                                                )}

                                                <div className="mt-auto pt-6 flex justify-between items-center">
                                                    <span className="font-mono text-xs text-stone uppercase">{post.author?.name || 'Kothakhahon'}</span>
                                                    <span className="font-mono text-xs text-stone uppercase">{formatDate(post.publishedAt)}</span>
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
                        </>
                    )}
                </div>
            </section>
        </>
    )
}
