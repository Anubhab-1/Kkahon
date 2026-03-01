import Link from 'next/link'
import BookCard from '@/components/ui/BookCard'
import BookHeroClient from '@/components/ui/BookHeroClient'
import { getBookBySlug, getAllBooks, urlFor } from '@/lib/sanity'

export const revalidate = 60

export default async function BookDetailPage({ params }: { params: any }) {
    const p = await Promise.resolve(params)
    const slug = p.slug

    const [book, allBooks] = await Promise.all([
        getBookBySlug(slug),
        getAllBooks()
    ])

    if (!book) return (
        <div className="min-h-screen bg-void flex items-center justify-center">
            <div className="text-center">
                <p className="font-cormorant text-4xl text-stone italic">Book not found.</p>
                <Link href="/books" className="font-cinzel text-xs text-gold tracking-widest mt-8 block">← Back to Catalog</Link>
            </div>
        </div>
    )

    // Data parsing
    const authorName = book.author?.name || 'Unknown Author'
    const authorInitials = authorName.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase()
    const formattedDate = book.publicationDate
        ? new Date(book.publicationDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
        : 'March 2024'
    const imageUrl = book.coverImage ? urlFor(book.coverImage).width(600).url() : null
    const genreName = book.genre && book.genre.length > 0 ? book.genre[0] : null
    const paragraphs = book.synopsis ? book.synopsis.split('\n\n') : []

    const relatedBooks = allBooks.filter((b: any) => b.slug?.current !== params.slug).slice(0, 4)

    return (
        <>
            <section className="bg-void pt-32 pb-16 px-6">
                <BookHeroClient book={{
                    ...book,
                    imageUrl,
                    authorName,
                    formattedDate,
                    genreName
                }} />
            </section>

            <section className="bg-obsidian py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <span className="font-cinzel text-xs tracking-widest text-gold mb-6 block">ABOUT THIS BOOK</span>
                    <div className="w-10 h-px bg-gold mb-8" />

                    <div className="font-garamond text-parchment text-lg leading-relaxed">
                        {paragraphs.map((p: string, i: number) => {
                            if (i === 0 && p.length > 0) {
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

            {book.pullQuote && (
                <section className="bg-void py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <hr className="border-t border-gold/30 max-w-32 mx-auto" />

                        <span className="block font-cormorant text-9xl text-gold/20 leading-none mb-[-2rem] mt-6">
                            "
                        </span>

                        <blockquote className="font-cormorant italic text-ivory text-2xl md:text-4xl leading-relaxed font-light relative z-10">
                            {book.pullQuote}
                        </blockquote>

                        <span className="block font-mono text-xs text-gold tracking-widest mt-8 mb-8 uppercase">
                            — {book.title}
                        </span>

                        <hr className="border-t border-gold/30 max-w-32 mx-auto" />
                    </div>
                </section>
            )}

            <section className="bg-obsidian py-24 px-6">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
                    <div className="col-span-1">
                        <div className="bg-ash border border-smoke aspect-square flex items-center justify-center overflow-hidden relative">
                            {book.author?.photo ? (
                                <img src={urlFor(book.author.photo).width(400).url()} alt={authorName} className="absolute inset-0 w-full h-full object-cover" />
                            ) : (
                                <span className="font-cormorant text-6xl text-gold/30 font-light relative z-10">
                                    {authorInitials}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <span className="font-cinzel text-xs tracking-widest text-gold mb-4 block">ABOUT THE AUTHOR</span>
                        <div className="w-10 h-px bg-gold mb-6" />
                        <h3 className="font-cormorant text-4xl text-ivory font-light">
                            {authorName}
                        </h3>
                        {book.author?.bio && (
                            <p className="font-garamond text-parchment text-base leading-relaxed mt-4">
                                {book.author.bio}
                            </p>
                        )}
                        <Link
                            href="/authors"
                            className="inline-block font-cinzel text-xs tracking-widest text-gold hover:text-ivory border-b border-gold/40 pb-1 mt-6 transition-colors duration-300 uppercase"
                        >
                            View Author Profile →
                        </Link>
                    </div>
                </div>
            </section>

            {relatedBooks.length > 0 && (
                <section className="bg-void py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <span className="font-cinzel text-xs tracking-widest text-gold mb-4 block">YOU MAY ALSO LIKE</span>
                        <div className="w-10 h-px bg-gold mb-12" />

                        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                            {relatedBooks.map((relatedBook: any, i: number) => {
                                const relAuthorName = relatedBook.author?.name || 'Unknown Author'
                                const relGenreName = relatedBook.genre && relatedBook.genre.length > 0 ? relatedBook.genre[0] : 'Uncategorized'
                                const relImageUrl = relatedBook.coverImage ? urlFor(relatedBook.coverImage).width(400).url() : undefined

                                return (
                                    <div key={i} className="min-w-[200px] max-w-[200px] flex-shrink-0">
                                        <BookCard
                                            title={relatedBook.title}
                                            author={relAuthorName}
                                            genre={relGenreName}
                                            coverBg={relatedBook.coverBg || '#1a1208'}
                                            imageUrl={relImageUrl}
                                            slug={relatedBook.slug?.current}
                                            large={false}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}

            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-obsidian border-t border-smoke px-6 py-4 flex justify-between items-center shadow-[0_-8px_30px_rgba(0,0,0,0.4)]">
                <span className="font-cormorant text-3xl text-gold leading-none">
                    {book.price || '₹450'}
                </span>
                <Link
                    href={book.buyLink || '#'}
                    className="bg-gold text-void font-cinzel text-xs tracking-widest px-8 py-3 hover:bg-gold-dim transition-all duration-300 uppercase"
                >
                    ORDER NOW
                </Link>
            </div>
        </>
    )
}
