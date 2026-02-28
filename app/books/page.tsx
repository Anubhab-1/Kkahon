'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import BookCard from '@/components/ui/BookCard'

/* ── Placeholder Data ── */

const BOOKS = [
  { id: 1, title: 'নীলিমার শেষ প্রান্তে', author: 'Arjun Dasgupta', genre: 'Literary Fiction', year: 2024, coverBg: '#1a1208', language: 'Bengali', slug: 'nilimar-shesh-prante' },
  { id: 2, title: 'The Cartographer of Lost Skies', author: 'Priya Sengupta', genre: 'Science Fiction', year: 2024, coverBg: '#0d1219', language: 'English' },
  { id: 3, title: 'মাটির গান', author: 'Rabindra Chatterjee', genre: 'Poetry', year: 2023, coverBg: '#120d0d', language: 'Bengali' },
  { id: 4, title: 'Echoes in the Void', author: 'Meera Bose', genre: 'Fantasy', year: 2024, coverBg: '#0d120e', language: 'English' },
  { id: 5, title: 'শেষ চিঠি', author: 'Sourav Ghosh', genre: 'Literary Fiction', year: 2023, coverBg: '#1a1208', language: 'Bengali' },
  { id: 6, title: 'The Silence Between Stars', author: 'Ananya Roy', genre: 'Science Fiction', year: 2023, coverBg: '#0d1219', language: 'English' },
  { id: 7, title: 'আলোর ভেতর অন্ধকার', author: 'Indrani Mukherjee', genre: 'Poetry', year: 2024, coverBg: '#120d0d', language: 'Bengali' },
  { id: 8, title: 'The Last Cartographer', author: 'Debashis Paul', genre: 'Fantasy', year: 2022, coverBg: '#0d120e', language: 'English' },
  { id: 9, title: 'নদীর ওপারে', author: 'Susmita Dey', genre: 'Literary Fiction', year: 2022, coverBg: '#1a1208', language: 'Bengali' },
  { id: 10, title: 'Quantum Dreamer', author: 'Ritesh Banerjee', genre: 'Science Fiction', year: 2024, coverBg: '#0d1219', language: 'English' },
  { id: 11, title: 'শব্দের মাঝে', author: 'Puja Chakraborty', genre: 'Poetry', year: 2023, coverBg: '#120d0d', language: 'Bengali' },
  { id: 12, title: 'The Iron Throne of Kalinga', author: 'Vikram Sen', genre: 'Fantasy', year: 2022, coverBg: '#0d120e', language: 'English' },
  { id: 13, title: 'একা একা পথ', author: 'Moumita Das', genre: 'Literary Fiction', year: 2021, coverBg: '#1a1208', language: 'Bengali' },
  { id: 14, title: 'Beyond the Event Horizon', author: 'Sanjay Mitra', genre: 'Science Fiction', year: 2023, coverBg: '#0d1219', language: 'English' },
  { id: 15, title: 'রাতের কবিতা', author: 'Aparajita Sen', genre: 'Poetry', year: 2024, coverBg: '#120d0d', language: 'Bengali' },
  { id: 16, title: 'The Dragon of Sundarbans', author: 'Krishanu Roy', genre: 'Fantasy', year: 2021, coverBg: '#0d120e', language: 'English' },
  { id: 17, title: 'স্মৃতির শহর', author: 'Tanmoy Ghosh', genre: 'Literary Fiction', year: 2022, coverBg: '#1a1208', language: 'Bengali' },
  { id: 18, title: 'Stellar Nomad', author: 'Diya Bose', genre: 'Science Fiction', year: 2021, coverBg: '#0d1219', language: 'English' },
  { id: 19, title: 'আকাশের রঙ', author: 'Nilufar Islam', genre: 'Poetry', year: 2021, coverBg: '#120d0d', language: 'Bengali' },
  { id: 20, title: 'The Witch of Hooghly', author: 'Priyanka Dutta', genre: 'Fantasy', year: 2024, coverBg: '#0d120e', language: 'English' },
]

const GENRES = ['All', 'Literary Fiction', 'Poetry', 'Science Fiction', 'Fantasy']
const SORT_OPTIONS = ['Newest First', 'Oldest First', 'A → Z', 'Z → A']

/* ── Page Component ── */

export default function BooksPage() {
  const [activeGenre, setActiveGenre] = useState('All')
  const [sortBy, setSortBy] = useState('Newest First')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredBooks = BOOKS
    .filter(book => activeGenre === 'All' || book.genre === activeGenre)
    .filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'Newest First') return b.year - a.year
      if (sortBy === 'Oldest First') return a.year - b.year
      if (sortBy === 'A → Z') return a.title.localeCompare(b.title)
      if (sortBy === 'Z → A') return b.title.localeCompare(a.title)
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
            {filteredBooks.length} Title{filteredBooks.length !== 1 ? 's' : ''}
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
      <div className="bg-void py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredBooks.length === 0 ? (
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
                {filteredBooks.map((book, index) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <BookCard
                      title={book.title}
                      author={book.author}
                      genre={book.genre}
                      coverBg={book.coverBg}
                      large={false}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}
