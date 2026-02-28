'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import BookCard from '@/components/ui/BookCard'
import SectionHeader from '@/components/ui/SectionHeader'

/* ── Placeholder Data ── */

const featuredBooks = [
  { title: 'নীলিমার শেষ প্রান্তে', author: 'Arjun Dasgupta', genre: 'Literary Fiction', coverBg: '#1a1208' },
  { title: 'The Cartographer of Lost Skies', author: 'Priya Sengupta', genre: 'Science Fiction', coverBg: '#0d1219' },
  { title: 'মাটির গান', author: 'Rabindra Chatterjee', genre: 'Poetry', coverBg: '#120d0d' },
  { title: 'Echoes in the Void', author: 'Meera Bose', genre: 'Fantasy', coverBg: '#0d120e' },
  { title: 'শেষ চিঠি', author: 'Sourav Ghosh', genre: 'Literary Fiction', coverBg: '#1a1208' },
  { title: 'The Silence Between Stars', author: 'Ananya Roy', genre: 'Science Fiction', coverBg: '#0d1219' },
]

const genres = [
  { name: 'Literary Fiction', description: 'Stories that illuminate the human condition', num: '01' },
  { name: 'Poetry', description: 'Words that breathe and bleed', num: '02' },
  { name: 'Science Fiction & Fantasy', description: 'Worlds beyond the edge of imagination', num: '03' },
  { name: 'Mixed & Others', description: 'Where no genre can contain the story', num: '04' },
]

const blogPosts = [
  {
    title: 'Why Independent Publishing is the Future of Bengali Literature',
    category: 'Essays',
    date: 'December 12, 2024',
    excerpt: 'The mainstream gatekeepers have long ignored the rich diversity of voices emerging from Bengal. We believe that changes now.',
  },
  {
    title: 'In Conversation with Priya Sengupta',
    category: 'Author Interview',
    date: 'November 28, 2024',
    excerpt: 'We sat down with the author of The Cartographer of Lost Skies to talk about world-building, loneliness, and the act of writing.',
  },
  {
    title: 'The Art of the Book Cover: How We Design for Emotion',
    category: 'News',
    date: 'November 5, 2024',
    excerpt: 'A book cover is a promise. It tells the reader what kind of world they are about to enter.',
  },
]

const tickerText = 'LITERARY FICTION · POETRY · SCIENCE FICTION · FANTASY · KOTHAKHAHON PRAKASHANI · '

/* ── Page Component ── */

export default function Home() {
  // Scroll reveal observer
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ═══════════════════════════════════════════════
          SECTION 1 — Hero
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden bg-void flex flex-col items-center justify-center text-center px-6">
        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(201,151,58,0.04) 0%, transparent 70%)' }}
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
            className="font-cormorant font-light italic text-gold text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-tight"
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
        <div className="absolute bottom-0 left-0 right-0 bg-obsidian/80 border-t border-smoke py-3 overflow-hidden">
          <div
            className="font-mono text-xs text-stone tracking-widest whitespace-nowrap"
            style={{ animation: 'ticker 30s linear infinite' }}
          >
            {tickerText.repeat(6)}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2 — Featured Books
      ═══════════════════════════════════════════════ */}
      <section className="reveal bg-void py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="RECENTLY PUBLISHED"
            title="Featured Works"
            subtitle="A selection of voices we are proud to carry into the world."
          />

          {/* Asymmetric book grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Book 1 — large */}
            <div className="col-span-2">
              <BookCard {...featuredBooks[0]} large />
            </div>
            {/* Books 2, 3 */}
            <div className="col-span-1">
              <BookCard {...featuredBooks[1]} />
            </div>
            <div className="col-span-1">
              <BookCard {...featuredBooks[2]} />
            </div>
            {/* Books 3, 4 (second row right side) */}
            <div className="col-span-1">
              <BookCard {...featuredBooks[3]} />
            </div>
            <div className="col-span-1">
              <BookCard {...featuredBooks[4]} />
            </div>
            {/* Book 6 */}
            <div className="col-span-2">
              <BookCard {...featuredBooks[5]} />
            </div>
          </div>

          <div className="mt-12 text-right">
            <Link
              href="/books"
              className="font-cinzel text-xs tracking-widest text-gold hover:text-ivory border-b border-gold/40 pb-1 transition-colors duration-300"
            >
              View All Books →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3 — Mission Quote
      ═══════════════════════════════════════════════ */}
      <section className="reveal bg-obsidian py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-gold text-2xl mb-8">❧</div>

          <blockquote className="font-cormorant italic text-ivory text-2xl md:text-4xl leading-relaxed font-light">
            &ldquo;আমরা বিশ্বাস করি প্রতিটি অকথিত গল্পের মধ্যে একটি জগৎ লুকিয়ে আছে — অপেক্ষা করছে কথা বলার।&rdquo;
          </blockquote>

          <p className="font-garamond italic text-stone text-lg mt-6">
            &ldquo;We believe that within every untold story, a world lies waiting to be spoken.&rdquo;
          </p>

          <p className="font-mono text-xs text-gold tracking-widest mt-8">
            — Kothakhahon Prakashani, est. 2018
          </p>

          <hr className="gold-rule max-w-24 mx-auto mt-12" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4 — Genre Explorer
      ═══════════════════════════════════════════════ */}
      <section className="reveal bg-void py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="EXPLORE" title="Our Genres" centered={false} />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {genres.map((g) => (
              <Link href="/books" key={g.num} className="group">
                <div className="relative overflow-hidden bg-obsidian border border-smoke p-8 h-48 cursor-pointer hover:border-gold/40 hover:bg-ash hover:shadow-lg hover:shadow-gold/5 transition-all duration-500">
                  <span className="absolute top-4 right-4 font-mono text-6xl text-smoke font-bold">
                    {g.num}
                  </span>
                  <h3 className="font-cinzel text-sm tracking-widest text-ivory relative z-10">
                    {g.name}
                  </h3>
                  <p className="font-garamond text-stone text-sm mt-3 leading-relaxed relative z-10">
                    {g.description}
                  </p>
                  <span className="text-gold text-xl absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 5 — Author Spotlight
      ═══════════════════════════════════════════════ */}
      <section className="reveal bg-obsidian py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — Author visual */}
          <div className="max-w-sm mx-auto w-full">
            <div className="aspect-square bg-ash border border-smoke flex items-center justify-center">
              <span className="font-cormorant text-8xl text-gold/20">AD</span>
            </div>
            <p className="font-cinzel text-xs tracking-widest text-stone text-center mt-4">
              Arjun Dasgupta
            </p>
          </div>

          {/* Right — Author info */}
          <div>
            <span className="font-cinzel text-xs tracking-widest text-gold mb-6 block">
              AUTHOR SPOTLIGHT
            </span>
            <div className="w-10 h-px bg-gold mb-6" />
            <h2 className="font-cormorant text-5xl text-ivory font-light">
              Arjun Dasgupta
            </h2>
            <p className="font-garamond text-parchment text-base leading-relaxed mt-6">
              Arjun Dasgupta is one of Bengal&apos;s most celebrated contemporary voices. His debut novel
              redefined literary fiction for a new generation, weaving personal memory with historical
              trauma in prose that reads like poetry. He has been published in twelve languages and has
              won the Sahitya Akademi Award.
            </p>
            <div className="flex gap-8 mt-8">
              <div>
                <span className="font-cormorant text-4xl text-gold block">4</span>
                <span className="font-mono text-xs text-stone tracking-widest">Books Published</span>
              </div>
              <div>
                <span className="font-cormorant text-4xl text-gold block">12</span>
                <span className="font-mono text-xs text-stone tracking-widest">Languages</span>
              </div>
            </div>
            <Link
              href="/authors"
              className="inline-block mt-8 font-cinzel text-xs tracking-widest text-gold hover:text-ivory border-b border-gold/40 pb-1 transition-colors duration-300"
            >
              View Author Profile →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 6 — Call to Authors
      ═══════════════════════════════════════════════ */}
      <section className="reveal bg-ash border-y border-smoke py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-cinzel text-xs tracking-widest text-gold mb-6 block">
            FOR WRITERS
          </span>
          <h2 className="font-cormorant text-5xl md:text-6xl text-ivory font-light leading-tight">
            Do You Have a Story the World Needs to Hear?
          </h2>
          <p className="font-garamond italic text-stone text-xl mt-6">
            We are always looking for new voices — bold, honest, necessary.
          </p>
          <Link
            href="/for-authors"
            className="inline-block bg-gold text-void font-cinzel text-xs tracking-widest px-10 py-5 mt-12 hover:bg-gold-dim transition-all duration-300"
          >
            SUBMIT YOUR MANUSCRIPT
          </Link>
          <p className="font-mono text-xs text-stone tracking-widest mt-6">
            We read every submission.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 7 — Latest Blog Posts
      ═══════════════════════════════════════════════ */}
      <section className="reveal bg-void py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="FROM THE PRESS" title="Latest Stories" centered={false} />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <Link href="/blog" key={i} className="group">
                <div className="bg-obsidian border border-smoke hover:border-gold/40 transition-all duration-500 p-8 cursor-pointer h-full flex flex-col">
                  <span className="font-mono text-xs text-gold tracking-widest mb-4">
                    {post.category}
                  </span>
                  <span className="font-mono text-xs text-stone mb-6">
                    {post.date}
                  </span>
                  <h3 className="font-cormorant text-2xl text-ivory leading-snug group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="font-garamond text-stone text-sm leading-relaxed mt-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="font-cinzel text-xs tracking-widest text-gold mt-8 block">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-right">
            <Link
              href="/blog"
              className="font-cinzel text-xs tracking-widest text-gold hover:text-ivory border-b border-gold/40 pb-1 transition-colors duration-300"
            >
              View All Posts →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
