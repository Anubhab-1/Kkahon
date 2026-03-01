'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function AboutPage() {
    // Setup reveal observer for sections
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        const elements = document.querySelectorAll('.reveal')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <>
            {/* ═══════════════════════════════════════════════
          SECTION 1 — Editorial Hero
      ═══════════════════════════════════════════════ */}
            <section className="bg-void pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Row 1 — Top line */}
                    <div className="flex justify-between items-end border-b border-smoke pb-8">
                        <span className="font-mono text-xs text-stone tracking-widest uppercase">
                            EST. 2018
                        </span>
                        <span className="font-mono text-xs text-stone tracking-widest uppercase">
                            KOLKATA, INDIA
                        </span>
                    </div>

                    {/* Row 2 — Main hero text */}
                    <div className="mt-12 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                        >
                            <h1 className="font-cormorant text-7xl md:text-9xl text-ivory font-light leading-none">
                                আমাদের
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                        >
                            <h2 className="font-cormorant text-7xl md:text-9xl italic text-gold gold-shimmer font-light leading-none md:ml-24">
                                গল্প
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            <p className="font-cormorant text-4xl md:text-6xl text-stone font-light mt-4 md:ml-48">
                                Our Story.
                            </p>
                        </motion.div>
                    </div>

                    {/* Row 3 — Tagline */}
                    <div className="mt-16 border-t border-smoke pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <p className="font-garamond italic text-stone text-xl max-w-lg">
                            "An independent publishing house dedicated to the voices that demand to be heard."
                        </p>
                        <span className="font-cinzel text-xs tracking-widest text-gold uppercase">
                            KOTHAKHAHON PRAKASHANI
                        </span>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 2 — Our Story
      ═══════════════════════════════════════════════ */}
            <section className="bg-obsidian py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="reveal">
                        <SectionHeader
                            eyebrow="WHO WE ARE"
                            title="Born from a Love of Stories"
                            centered={false}
                        />
                    </div>

                    {/* Two column prose layout */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 reveal delay-200">
                        {/* Left Column */}
                        <div>
                            <p className="font-garamond text-parchment text-lg leading-relaxed mb-8">
                                <span className="font-cormorant text-7xl text-gold float-left mr-3 mt-1 leading-none font-light">
                                    K
                                </span>
                                othakhahon Prakashani was founded in 2018 in the heart of Kolkata
                                by a small group of writers, readers, and dreamers who believed
                                that the Bengali literary tradition deserved a home that was as
                                bold and ambitious as the stories it carried. We started with
                                three books, a shared office, and an unwavering conviction that
                                independent publishing was not a compromise — it was a statement.
                            </p>
                            <p className="font-garamond text-parchment text-lg leading-relaxed mb-8">
                                The name Kothakhahon — কথাকহন — means the telling of tales. It is
                                not just our name. It is our purpose, our promise, and our daily
                                practice. Every book we publish is an act of faith in the power
                                of the written word to change how people see the world.
                            </p>
                        </div>

                        <hr className="gold-rule my-8 md:hidden" />

                        {/* Right Column */}
                        <div>
                            <p className="font-garamond text-parchment text-lg leading-relaxed mb-8">
                                We publish across genres — literary fiction, poetry, science
                                fiction, fantasy, and everything in between — because we believe
                                the best stories refuse to be contained by categories. Our
                                authors come from Bengal and beyond, writing in Bengali and
                                English, urban and rural, contemporary and historical.
                            </p>
                            <p className="font-garamond text-parchment text-lg leading-relaxed mb-8">
                                Today, Kothakhahon Prakashani is home to over 600 books and 120
                                authors. We have been recognized by the Sahitya Akademi, the
                                Bengal Foundation, and readers across twelve countries. But we
                                measure our success differently — in the number of readers who
                                write to us to say that one of our books changed something in
                                them.
                            </p>
                        </div>
                    </div>

                    {/* Quote Block */}
                    <div className="mt-16 border-t border-smoke pt-16 text-center reveal delay-300">
                        <blockquote className="font-cormorant italic text-3xl md:text-4xl text-ivory">
                            "কথাকহন শুধু একটি নাম নয় — এটি একটি প্রতিশ্রুতি।"
                        </blockquote>
                        <p className="font-garamond italic text-stone text-lg mt-4">
                            "Kothakhahon is not just a name — it is a promise."
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 3 — What We Publish
      ═══════════════════════════════════════════════ */}
            <section className="bg-void py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="reveal">
                        <SectionHeader
                            eyebrow="OUR FOCUS"
                            title="What We Publish"
                            centered={false}
                        />
                    </div>

                    {/* Genre Cards Grid */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { number: "01", name: "Literary Fiction", description: "Stories that illuminate the human condition with unflinching honesty and lyrical prose.", icon: "✦" },
                            { number: "02", name: "Poetry", description: "Collections that treat every word as sacred — from classical Bengali forms to radical experiments.", icon: "◈" },
                            { number: "03", name: "Science Fiction & Fantasy", description: "Worlds built with the same care as cathedrals — imaginative, philosophical, necessary.", icon: "◎" },
                            { number: "04", name: "Mixed & Others", description: "Because the best stories refuse to be contained by categories.", icon: "❧" },
                        ].map((genre, i) => (
                            <div
                                key={i}
                                className={`group reveal p-8 relative overflow-hidden glass-panel hover-glow-card hover:border-gold/40 hover:-translate-y-2 transition-all duration-500 delay-${(i + 1) * 100}`}
                            >
                                <div className="absolute top-4 right-4 font-mono text-6xl text-smoke/50 font-bold pointer-events-none transition-colors duration-500 group-hover:text-gold/10">
                                    {genre.number}
                                </div>
                                <div className="font-cormorant text-3xl text-gold mb-6 relative z-10">
                                    {genre.icon}
                                </div>
                                <h3 className="font-cinzel text-sm tracking-widest text-ivory mb-4 relative z-10 uppercase">
                                    {genre.name}
                                </h3>
                                <p className="font-garamond text-stone text-sm leading-relaxed relative z-10">
                                    {genre.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 4 — By the Numbers
      ═══════════════════════════════════════════════ */}
            <section className="bg-obsidian py-24 px-6">
                <div className="max-w-7xl mx-auto reveal">
                    <span className="font-cinzel text-xs tracking-widest text-gold text-center block mb-16 uppercase">
                        BY THE NUMBERS
                    </span>
                    <div className="w-10 h-px bg-gold mx-auto mb-16" />

                    {/* Counters Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:divide-x divide-smoke">
                        {[
                            { target: 600, suffix: "+", label: "Books Published" },
                            { target: 120, suffix: "+", label: "Authors" },
                            { target: 6, suffix: "", label: "Years" },
                            { target: 12, suffix: "", label: "Languages" },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center justify-center">
                                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                                <span className="font-mono text-xs text-stone tracking-widest mt-4 uppercase">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 5 — The Team
      ═══════════════════════════════════════════════ */}
            <section className="bg-void py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="reveal">
                        <SectionHeader
                            eyebrow="THE PEOPLE"
                            title="Who We Are"
                            centered={true}
                        />
                    </div>

                    {/* Team Cards */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { initials: "SK", name: "Subhadeep Kar", role: "Founder & Editorial Director", bio: "A writer and editor with 15 years in Bengali publishing. Believes every manuscript deserves a careful reader." },
                            { initials: "PM", name: "Poulami Mitra", role: "Co-Founder & Creative Director", bio: "Designer and typographer who brought the visual identity of Kothakhahon to life. Every book cover is her canvas." },
                        ].map((member, i) => (
                            <div
                                key={i}
                                className={`glass-panel hover-glow-card p-8 text-center reveal hover:-translate-y-2 transition-transform duration-500 delay-${(i + 1) * 200}`}
                            >
                                <div className="w-20 h-20 bg-white/5 border border-white/10 mx-auto mb-6 flex items-center justify-center rounded-sm">
                                    <span className="font-cormorant text-3xl text-gold/50 font-light">
                                        {member.initials}
                                    </span>
                                </div>
                                <h4 className="font-cinzel text-sm tracking-widest text-ivory mt-2 uppercase">
                                    {member.name}
                                </h4>
                                <p className="font-mono text-xs text-gold tracking-widest mt-2 uppercase">
                                    {member.role}
                                </p>
                                <hr className="gold-rule w-12 mx-auto my-6" />
                                <p className="font-garamond text-stone text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
