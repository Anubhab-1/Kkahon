'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

/* ── Test Post Data ── */
const POST = {
    title: "Why Independent Publishing is the Future of Bengali Literature",
    category: "Essays",
    date: "December 12, 2024",
    readTime: "8 min read",
    author: "Subhadeep Kar",
    authorRole: "Founder & Editorial Director",
    authorInitials: "SK",
    coverBg: "#1a1208",
    body: [
        { type: 'paragraph', text: "For too long, the Bengali literary world has operated under the shadow of a handful of large publishing houses based in Kolkata and Dhaka. These institutions have done important work — they have carried the tradition of Tagore, Sarat, Bibhutibhushan into the present. But tradition, when held too tightly, becomes a cage. And for the past two decades, that cage has kept out a generation of writers whose voices are unlike anything that came before." },
        { type: 'paragraph', text: "The writers I am thinking of write science fiction set in the Sundarbans. They write poetry that refuses to rhyme and does not apologize for it. They write novels in Bengali that borrow English words without shame, because that is how people actually speak in Kolkata in 2024. They write about queer experience, about caste, about migration, about the particular loneliness of a generation raised on the internet." },
        { type: 'pullquote', text: "Tradition, when held too tightly, becomes a cage." },
        { type: 'paragraph', text: "These writers were not being published — not by the established houses, who found them too difficult, too niche, too unmarketable. And so they were either publishing themselves, publishing in literary journals that few people read, or not publishing at all. That last category is the one that haunts me. The books that were never written because their authors gave up." },
        { type: 'paragraph', text: "Kothakhahon Prakashani was founded in 2018 precisely to address this gap. We started with three books — a debut novel about the Partition, a poetry collection in dialect, and a work of speculative fiction set in 2047 Kolkata. All three had been rejected by every major house. All three went on to win awards. All three are still in print." },
        { type: 'pullquote', text: "The books that were never written because their authors gave up — that last category is the one that haunts me." },
        { type: 'paragraph', text: "Independent publishing is not a compromise. It is a different set of values. We are not trying to publish the next bestseller — we are trying to publish the next important book. Those are not always the same thing. When they are, wonderful. When they are not, we choose importance." },
        { type: 'paragraph', text: "The future of Bengali literature will not be decided by the institutions that have always controlled it. It will be decided by readers who seek out the unexpected, by authors who refuse to make themselves smaller, and by publishers who believe that a book does not need to sell a hundred thousand copies to matter. It needs to reach the right readers. Even if there are only a hundred of them." },
    ]
}

/* ── Need 3 related posts for the bottom grid ── */
const RELATED_POSTS = [
    {
        id: 2,
        slug: "in-conversation-with-priya-sengupta",
        title: "In Conversation with Priya Sengupta",
        category: "Author Interviews",
        date: "November 28, 2024",
        readTime: "12 min read",
        excerpt: "We sat down with the author of The Cartographer of Lost Skies to talk about world-building, loneliness, and the act of writing science fiction in Bengali.",
        author: "Poulami Mitra",
        coverBg: "#0d1219",
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
        coverBg: "#1a1208",
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
        coverBg: "#120d0d",
    },
]

export default function BlogPostPage() {
    return (
        <>
            {/* ═══════════════════════════════════════════════
          SECTION 1 — Hero Cover
      ═══════════════════════════════════════════════ */}
            <div
                className="w-full h-72 md:h-96 relative"
                style={{ backgroundColor: POST.coverBg }}
            >
                <span className="absolute top-32 left-8 md:top-8 font-mono text-xs text-gold bg-void/80 px-3 py-1 uppercase z-10">
                    {POST.category}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent" />
            </div>

            {/* ═══════════════════════════════════════════════
          SECTION 2 — Post Header
      ═══════════════════════════════════════════════ */}
            <section className="bg-void py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <span className="font-mono text-xs text-gold tracking-widest mb-6 block uppercase">
                        {POST.category}
                    </span>

                    <h1 className="font-cormorant text-5xl md:text-6xl text-ivory font-light leading-tight">
                        {POST.title}
                    </h1>

                    <div className="mt-8 flex gap-8 flex-wrap items-center">
                        <span className="font-mono text-xs text-parchment uppercase">{POST.author}</span>
                        <span className="font-mono text-xs text-stone uppercase">{POST.authorRole}</span>
                        <span className="font-mono text-xs text-stone uppercase">{POST.date}</span>
                        <span className="font-mono text-xs text-gold uppercase">{POST.readTime}</span>
                    </div>

                    <hr className="gold-rule mt-8" />
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 3 — Post Body Layout
      ═══════════════════════════════════════════════ */}
            <section className="bg-void px-6 py-12">
                <div className="max-w-2xl mx-auto">
                    {POST.body.map((block, i) => {
                        if (block.type === 'paragraph') {
                            if (i === 0) {
                                // Drop cap for the first paragraph
                                const firstChar = block.text.charAt(0)
                                const restOfPara = block.text.slice(1)

                                return (
                                    <p key={i} className="font-garamond text-parchment text-xl leading-relaxed mb-8">
                                        <span className="float-left font-cormorant text-8xl text-gold mr-3 mt-1 leading-none font-light block h-[0.7em]">
                                            {firstChar}
                                        </span>
                                        {restOfPara}
                                    </p>
                                )
                            }

                            // Standard paragraph
                            return (
                                <p key={i} className="font-garamond text-parchment text-xl leading-relaxed mb-8">
                                    {block.text}
                                </p>
                            )
                        }

                        if (block.type === 'pullquote') {
                            // Pull quote
                            return (
                                <div key={i} className="my-12 py-8 border-l-2 border-gold pl-8">
                                    <blockquote className="font-cormorant italic text-ivory text-2xl md:text-3xl leading-relaxed font-light">
                                        {block.text}
                                    </blockquote>
                                </div>
                            )
                        }

                        return null
                    })}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 4 — Author Box
      ═══════════════════════════════════════════════ */}
            <section className="bg-void px-6 pb-16">
                <div className="max-w-2xl mx-auto border-t border-smoke pt-12">
                    <div className="flex gap-6 items-start">
                        <div className="w-16 h-16 bg-ash border border-smoke flex items-center justify-center flex-shrink-0">
                            <span className="font-cormorant text-2xl text-gold/50">
                                {POST.authorInitials}
                            </span>
                        </div>
                        <div>
                            <span className="font-mono text-xs text-stone tracking-widest uppercase block">
                                WRITTEN BY
                            </span>
                            <span className="font-cinzel text-sm tracking-widest text-ivory mt-1 block uppercase">
                                {POST.author}
                            </span>
                            <span className="font-mono text-xs text-stone mt-1 block uppercase">
                                {POST.authorRole}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 5 — Related Posts Grid
      ═══════════════════════════════════════════════ */}
            <section className="bg-obsidian py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <span className="font-cinzel text-xs tracking-widest text-gold mb-12 block uppercase">
                        CONTINUE READING
                    </span>
                    <div className="w-10 h-px bg-gold mb-12" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {RELATED_POSTS.map((post, index) => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="block group h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.08, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className="bg-obsidian border border-smoke hover:border-gold/40 transition-all duration-500 h-full flex flex-col"
                                >
                                    <div className="h-48 relative" style={{ backgroundColor: post.coverBg }}>
                                        <span className="absolute top-3 left-3 font-mono text-xs text-gold bg-void/80 px-2 py-1 uppercase">
                                            {post.category}
                                        </span>
                                    </div>

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
                </div>
            </section>
        </>
    )
}
