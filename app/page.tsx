import Link from 'next/link'
import BookCard from '@/components/ui/BookCard'
import SectionHeader from '@/components/ui/SectionHeader'
import HomeHero from '@/components/ui/HomeHero'
import ScrollObserver from '@/components/ui/ScrollObserver'
import { getFeaturedBooks, getAllBlogPosts, getSiteSettings, urlFor } from '@/lib/sanity'

export const revalidate = 60

/* ── Fallback Data ── */
const fallbackBooks = [
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

export default async function Home() {
  const [featuredBooks, allBlogPosts, siteSettings] = await Promise.all([
    getFeaturedBooks(),
    getAllBlogPosts(),
    getSiteSettings()
  ])

  const booksToDisplay = featuredBooks?.length > 0 ? featuredBooks : fallbackBooks
  const postsToDisplay = allBlogPosts?.slice(0, 3) || []

  const author = siteSettings?.featuredAuthor
  const authorName = author?.name || 'Arjun Dasgupta'
  const authorInitials = authorName.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase()

  return (
    <>
      <ScrollObserver />

      {/* SECTION 1 — Hero */}
      <HomeHero />

      {/* SECTION 2 — Featured Books */}
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
              <BookCard
                title={booksToDisplay[0]?.title}
                author={booksToDisplay[0]?.author?.name || booksToDisplay[0]?.author}
                genre={booksToDisplay[0]?.genre?.[0] || booksToDisplay[0]?.genre}
                coverBg={booksToDisplay[0]?.coverBg || '#1a1208'}
                imageUrl={booksToDisplay[0]?.coverImage ? urlFor(booksToDisplay[0].coverImage).width(400).url() : undefined}
                slug={booksToDisplay[0]?.slug?.current || booksToDisplay[0]?.slug}
                large
              />
            </div>
            {/* Books 2, 3 */}
            <div className="col-span-1">
              <BookCard
                title={booksToDisplay[1]?.title}
                author={booksToDisplay[1]?.author?.name || booksToDisplay[1]?.author}
                genre={booksToDisplay[1]?.genre?.[0] || booksToDisplay[1]?.genre}
                coverBg={booksToDisplay[1]?.coverBg || '#0d1219'}
                imageUrl={booksToDisplay[1]?.coverImage ? urlFor(booksToDisplay[1].coverImage).width(400).url() : undefined}
                slug={booksToDisplay[1]?.slug?.current || booksToDisplay[1]?.slug}
              />
            </div>
            <div className="col-span-1">
              <BookCard
                title={booksToDisplay[2]?.title}
                author={booksToDisplay[2]?.author?.name || booksToDisplay[2]?.author}
                genre={booksToDisplay[2]?.genre?.[0] || booksToDisplay[2]?.genre}
                coverBg={booksToDisplay[2]?.coverBg || '#120d0d'}
                imageUrl={booksToDisplay[2]?.coverImage ? urlFor(booksToDisplay[2].coverImage).width(400).url() : undefined}
                slug={booksToDisplay[2]?.slug?.current || booksToDisplay[2]?.slug}
              />
            </div>
            {/* Books 3, 4 (second row right side) */}
            <div className="col-span-1">
              <BookCard
                title={booksToDisplay[3]?.title}
                author={booksToDisplay[3]?.author?.name || booksToDisplay[3]?.author}
                genre={booksToDisplay[3]?.genre?.[0] || booksToDisplay[3]?.genre}
                coverBg={booksToDisplay[3]?.coverBg || '#0d120e'}
                imageUrl={booksToDisplay[3]?.coverImage ? urlFor(booksToDisplay[3].coverImage).width(400).url() : undefined}
                slug={booksToDisplay[3]?.slug?.current || booksToDisplay[3]?.slug}
              />
            </div>
            <div className="col-span-1">
              <BookCard
                title={booksToDisplay[4]?.title}
                author={booksToDisplay[4]?.author?.name || booksToDisplay[4]?.author}
                genre={booksToDisplay[4]?.genre?.[0] || booksToDisplay[4]?.genre}
                coverBg={booksToDisplay[4]?.coverBg || '#1a1208'}
                imageUrl={booksToDisplay[4]?.coverImage ? urlFor(booksToDisplay[4].coverImage).width(400).url() : undefined}
                slug={booksToDisplay[4]?.slug?.current || booksToDisplay[4]?.slug}
              />
            </div>
            {/* Book 6 */}
            <div className="col-span-2">
              <BookCard
                title={booksToDisplay[5]?.title}
                author={booksToDisplay[5]?.author?.name || booksToDisplay[5]?.author}
                genre={booksToDisplay[5]?.genre?.[0] || booksToDisplay[5]?.genre}
                coverBg={booksToDisplay[5]?.coverBg || '#0d1219'}
                imageUrl={booksToDisplay[5]?.coverImage ? urlFor(booksToDisplay[5].coverImage).width(400).url() : undefined}
                slug={booksToDisplay[5]?.slug?.current || booksToDisplay[5]?.slug}
              />
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

      {/* SECTION 3 — Mission Quote */}
      <section className="reveal bg-obsidian py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-gold text-2xl mb-8">❧</div>

          <blockquote className="font-cormorant italic text-ivory text-2xl md:text-4xl leading-relaxed font-light">
            &ldquo;{siteSettings?.heroTagline || 'আমরা বিশ্বাস করি প্রতিটি অকথিত গল্পের মধ্যে একটি জগৎ লুকিয়ে আছে — অপেক্ষা করছে কথা বলার।'}&rdquo;
          </blockquote>

          <p className="font-garamond italic text-stone text-lg mt-6">
            &ldquo;{siteSettings?.heroTaglineEn || 'We believe that within every untold story, a world lies waiting to be spoken.'}&rdquo;
          </p>

          <p className="font-mono text-xs text-gold tracking-widest mt-8">
            — {siteSettings?.missionStatement || 'Kothakhahon Prakashani, est. 2018'}
          </p>

          <hr className="gold-rule max-w-24 mx-auto mt-12" />
        </div>
      </section>

      {/* SECTION 4 — Genre Explorer */}
      <section className="reveal bg-void py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="EXPLORE" title="Our Genres" centered={false} />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {genres.map((g) => (
              <Link href="/books" key={g.num} className="group">
                <div className="relative overflow-hidden glass-panel p-8 h-48 cursor-pointer hover:border-gold/40 hover:bg-gold/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(201,151,58,0.1)]">
                  <span className="absolute top-4 right-4 font-mono text-6xl text-smoke font-bold opacity-30 group-hover:opacity-50 transition-opacity">
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

      {/* SECTION 5 — Author Spotlight */}
      <section className="reveal bg-obsidian py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — Author visual */}
          <div className="max-w-sm mx-auto w-full">
            <div className="aspect-square bg-ash border border-smoke flex items-center justify-center overflow-hidden relative">
              {author?.photo ? (
                <img src={urlFor(author.photo).width(800).url()} alt={authorName} className="w-full h-full object-cover" />
              ) : (
                <span className="font-cormorant text-8xl text-gold/20">{authorInitials}</span>
              )}
            </div>
            <p className="font-cinzel text-xs tracking-widest text-stone text-center mt-4">
              {authorName}
            </p>
          </div>

          {/* Right — Author info */}
          <div>
            <span className="font-cinzel text-xs tracking-widest text-gold mb-6 block">
              AUTHOR SPOTLIGHT
            </span>
            <div className="w-10 h-px bg-gold mb-6" />
            <h2 className="font-cormorant text-5xl text-ivory font-light">
              {authorName}
            </h2>
            <p className="font-garamond text-parchment text-base leading-relaxed mt-6">
              {author?.bio || "Arjun Dasgupta is one of Bengal's most celebrated contemporary voices. His debut novel redefined literary fiction for a new generation."}
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

      {/* SECTION 6 — Call to Authors */}
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

      {/* SECTION 7 — Latest Blog Posts */}
      <section className="reveal bg-void py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="FROM THE PRESS" title="Latest Stories" centered={false} />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {postsToDisplay.map((post: any, i: number) => {
              const postDate = post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
                : "December 12, 2024"

              return (
                <Link href={post.slug?.current ? `/blog/${post.slug.current}` : "/blog"} key={i} className="group">
                  <div className="glass-panel hover-glow-card transition-all duration-500 cursor-pointer h-full flex flex-col group relative overflow-hidden hover:-translate-y-2">
                    {post.coverImage && (
                      <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                        <img src={urlFor(post.coverImage).width(800).url()} alt={post.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="p-8 relative z-10 flex flex-col h-full">
                      <span className="font-mono text-xs text-gold tracking-widest mb-4">
                        {post.category || "Essays"}
                      </span>
                      <span className="font-mono text-xs text-stone mb-6">
                        {postDate}
                      </span>
                      <h3 className="font-cormorant text-2xl text-ivory leading-snug group-hover:text-gold transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="font-garamond text-stone text-sm leading-relaxed mt-4 line-clamp-3 w-full flex-grow">
                        {post.excerpt || "The mainstream gatekeepers have long ignored the rich diversity of voices emerging from Bengal. We believe that changes now."}
                      </p>
                      <span className="font-cinzel text-xs tracking-widest text-gold mt-8 block">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
            {postsToDisplay.length === 0 && (
              <p className="text-stone col-span-3 text-center py-12 font-garamond italic text-xl">Stories are being written...</p>
            )}
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
