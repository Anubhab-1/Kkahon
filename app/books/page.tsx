'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import BookCard from '@/components/ui/BookCard'
import { getAllBooks, urlFor } from '@/lib/sanity'

// Client components cannot export revalidate, so freshness is handled by the fetch structure or API wrappers.

const GENRES = ['All', 'Literary Fiction', 'Poetry', 'Science Fiction', 'Fantasy']
const SORT_OPTIONS = ['Newest First', 'Oldest First', 'A → Z', 'Z → A']

export default function BooksPage() {
  const [books, setBooks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [activeGenre, setActiveGenre] = useState('All')
  const [sortBy, setSortBy] = useState('Newest First')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await getAllBooks()
        setBooks(data)
      } catch (error) {
        console.error("Error fetching books:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [])

  const filteredBooks = books
    .filter(book => activeGenre === 'All' || (book.genre && book.genre.includes(activeGenre)))
    .filter(book => {
      const q = searchQuery.toLowerCase()
      const titleMatch = book.title?.toLowerCase().includes(q)
      const authorMatch = book.author?.name?.toLowerCase().includes(q)
      return titleMatch || authorMatch
    })
    .sort((a, b) => {
      const yearA = a.publicationDate ? new Date(a.publicationDate).getFullYear() : 0
      const yearB = b.publicationDate ? new Date(b.publicationDate).getFullYear() : 0
      const titleA = a.title || ''
      const titleB = b.title || ''

      if (sortBy === 'Newest First') return yearB - yearA
      if (sortBy === 'Oldest First') return yearA - yearB
      if (sortBy === 'A → Z') return titleA.localeCompare(titleB)
      if (sortBy === 'Z → A') return titleB.localeCompare(titleA)
      return 0
    })

  const clearFilters = () => {
    setActiveGenre('All')
    setSortBy('Newest First')
    setSearchQuery('')
  }

  return (
    <>
      {/* ── Page Header ── */}
      <div className="bg-void pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="font-cinzel text-xs tracking-widest text-gold">
            OUR CATALOG
          </span>
          <div className="w-10 h-px bg-gold mt-3 mb-6" />
          <h1 className="font-cormorant text-6xl md:text-7xl text-ivory font-light">
            Every Book a World
          </h1>
          <p className="font-garamond italic text-stone text-xl mt-4 max-w-2xl">
            Explore our complete catalog of literary fiction, poetry, science fiction, fantasy and more.
          </p>
          <p className="font-mono text-xs text-gold tracking-widest mt-6">
            {!loading && `${filteredBooks.length} Title${filteredBooks.length !== 1 ? 's' : ''}`}
          </p>
        </div>
      </div>

      {/* ── Sticky Filter Bar ── */}
      <div className="sticky top-[72px] z-40 bg-obsidian border-y border-smoke py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">

          {/* Genre pills */}
          <div className="flex flex-wrap gap-2">
            {GENRES.map(genre => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`font-cinzel text-xs tracking-widest px-4 py-2 border transition-all duration-300 cursor-pointer ${activeGenre === genre
                  ? 'border-gold text-gold bg-gold/5'
                  : 'border-smoke text-stone hover:border-gold/40 hover:text-parchment'
                  }`}
              >
                {genre}
              </button>
            ))}
          </div>

          {/* Sort + Search */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Sort dropdown */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-stone tracking-widest">SORT BY</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="bg-transparent border border-smoke text-parchment font-mono text-xs px-3 py-2 focus:border-gold focus:outline-none cursor-pointer"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt} value={opt} className="bg-obsidian text-parchment">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Search input */}
            <div className="flex items-center gap-2 border-b border-smoke focus-within:border-gold transition-colors duration-300">
              <Search size={14} className="text-stone flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search titles or authors..."
                className="bg-transparent text-parchment font-garamond text-sm px-0 py-2 w-56 focus:outline-none placeholder:text-stone"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Books Grid ── */}
      <div className="bg-void py-16 px-6 min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-obsidian border border-smoke animate-pulse aspect-[2/3] w-full" />
                ))}
              </motion.div>
            ) : filteredBooks.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-24 text-center"
              >
                <p className="font-cormorant text-3xl text-stone italic">
                  No books found.
                </p>
                <p className="font-garamond text-stone text-sm mt-4">
                  Try a different search or genre filter.
                </p>
                <button
                  onClick={clearFilters}
                  className="font-cinzel text-xs text-gold border border-gold px-6 py-3 mt-8 hover:bg-gold hover:text-void transition-all duration-300 cursor-pointer"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {filteredBooks.map((book, index) => {
                  const authorName = book.author?.name || 'Unknown Author'
                  const genreName = book.genre && book.genre.length > 0 ? book.genre[0] : 'Uncategorized'
                  const imageUrl = book.coverImage ? urlFor(book.coverImage).width(400).url() : undefined
                  const slug = book.slug?.current

                  return (
                    <motion.div
                      key={book._id || index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <BookCard
                        title={book.title}
                        author={authorName}
                        genre={genreName}
                        imageUrl={imageUrl}
                        slug={slug}
                        large={false}
                      />
                    </motion.div>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}
