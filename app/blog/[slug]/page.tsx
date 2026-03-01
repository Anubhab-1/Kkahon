import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { getBlogPostBySlug, getAllBlogPosts, urlFor } from '@/lib/sanity'

export const revalidate = 60

export default async function BlogPostPage({ params }: { params: any }) {
    const p = await Promise.resolve(params)
    const slug = p.slug

    const [post, allPosts] = await Promise.all([
        getBlogPostBySlug(slug),
        getAllBlogPosts()
    ])

    if (!post) {
        return (
            <div className="min-h-screen bg-void flex items-center justify-center">
                <div className="text-center">
                    <p className="font-cormorant text-4xl text-stone italic">Post not found.</p>
                    <Link href="/blog" className="font-cinzel text-xs text-gold tracking-widest mt-8 block">← Back to Journal</Link>
                </div>
            </div>
        )
    }

    const firstBlockKey = post.body?.find((b: any) => b._type === 'block')?._key

    const components = {
        types: {
            pullQuote: ({ value }: any) => (
                <div className="my-12 py-8 border-l-2 border-gold pl-8">
                    <blockquote className="font-cormorant italic text-ivory text-2xl md:text-3xl leading-relaxed font-light">
                        {value.quote}
                    </blockquote>
                </div>
            )
        },
        block: {
            normal: ({ children, value }: any) => {
                if (value._key === firstBlockKey) {
                    return (
                        <p className="font-garamond text-parchment text-xl leading-relaxed mb-8 dropcap-paragraph relative">
                            {/* Simple CSS-based drop cap for the first letter if needed, 
                                but since children is an array of React elements, extracting the first letter is tricky. 
                                We will use CSS via a wrapper div class context. */}
                            {children}
                        </p>
                    )
                }
                return <p className="font-garamond text-parchment text-xl leading-relaxed mb-8">{children}</p>
            }
        }
    }

    const relatedPosts = allPosts.filter((p: any) => p.slug?.current !== params.slug).slice(0, 3)

    const authorName = post.author?.name || 'Kothakhahon'
    const authorInitials = authorName.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase()
    const authorRole = "Author"

    const postDate = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
        : "December 12, 2024"

    return (
        <>
            {/* Added style for the drop cap logic to mirror the exact requested Tailwind styling safely */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .dropcap-wrapper .dropcap-paragraph:first-of-type::first-letter {
                    float: left;
                    font-family: var(--font-cormorant), 'Cormorant Garamond', serif;
                    font-size: 6rem;
                    color: #c9973a;
                    line-height: 0.7;
                    margin-right: 0.75rem;
                    margin-top: 0.25rem;
                    font-weight: 300;
                }
            `}} />

            {/* ═══════════════════════════════════════════════
          SECTION 1 — Hero Cover
      ═══════════════════════════════════════════════ */}
            <div
                className="w-full h-72 md:h-96 relative overflow-hidden"
                style={{ backgroundColor: '#1a1208' }}
            >
                {post.coverImage && (
                    <img src={urlFor(post.coverImage).width(1200).url()} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                )}
                <span className="absolute top-32 left-8 md:top-8 font-mono text-xs text-gold bg-void/80 px-3 py-1 uppercase z-10">
                    {post.category || "Essays"}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent z-10" />
            </div>

            {/* ═══════════════════════════════════════════════
          SECTION 2 — Post Header
      ═══════════════════════════════════════════════ */}
            <section className="bg-void py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <span className="font-mono text-xs text-gold tracking-widest mb-6 block uppercase">
                        {post.category || "Essays"}
                    </span>

                    <h1 className="font-cormorant text-5xl md:text-6xl text-ivory font-light leading-tight">
                        {post.title}
                    </h1>

                    <div className="mt-8 flex gap-8 flex-wrap items-center">
                        <span className="font-mono text-xs text-parchment uppercase">{authorName}</span>
                        <span className="font-mono text-xs text-stone uppercase">{authorRole}</span>
                        <span className="font-mono text-xs text-stone uppercase">{postDate}</span>
                        <span className="font-mono text-xs text-gold uppercase">5 MIN READ</span>
                    </div>

                    <hr className="gold-rule mt-8" />
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 3 — Post Body Layout
      ═══════════════════════════════════════════════ */}
            <section className="bg-void px-6 py-12">
                <div className="max-w-2xl mx-auto dropcap-wrapper">
                    {post.body ? (
                        <PortableText value={post.body} components={components} />
                    ) : (
                        <p className="font-garamond text-parchment text-xl leading-relaxed mb-8">
                            This post contains no content.
                        </p>
                    )}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 4 — Author Box
      ═══════════════════════════════════════════════ */}
            <section className="bg-void px-6 pb-16">
                <div className="max-w-2xl mx-auto border-t border-smoke pt-12">
                    <div className="flex gap-6 items-start">
                        <div className="w-16 h-16 bg-ash border border-smoke flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                            {post.author?.photo ? (
                                <img src={urlFor(post.author.photo).width(200).url()} alt={authorName} className="absolute inset-0 w-full h-full object-cover" />
                            ) : (
                                <span className="font-cormorant text-2xl text-gold/50 relative z-10">
                                    {authorInitials}
                                </span>
                            )}
                        </div>
                        <div>
                            <span className="font-mono text-xs text-stone tracking-widest uppercase block">
                                WRITTEN BY
                            </span>
                            <span className="font-cinzel text-sm tracking-widest text-ivory mt-1 block uppercase">
                                {authorName}
                            </span>
                            {post.author?.bio && (
                                <span className="font-mono text-xs text-stone mt-1 block max-w-md line-clamp-2">
                                    {post.author.bio}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 5 — Related Posts Grid
      ═══════════════════════════════════════════════ */}
            {relatedPosts.length > 0 && (
                <section className="bg-obsidian py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <span className="font-cinzel text-xs tracking-widest text-gold mb-12 block uppercase">
                            CONTINUE READING
                        </span>
                        <div className="w-10 h-px bg-gold mb-12" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((rPost: any, index: number) => {
                                const rPostDate = rPost.publishedAt
                                    ? new Date(rPost.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
                                    : "December 12, 2024"

                                return (
                                    <Link href={rPost.slug?.current ? `/blog/${rPost.slug.current}` : "/blog"} key={rPost._id || index} className="block group h-full">
                                        <div
                                            className="bg-obsidian border border-smoke hover:border-gold/40 transition-all duration-500 h-full flex flex-col relative overflow-hidden"
                                        >
                                            <div className="h-48 relative overflow-hidden" style={{ backgroundColor: '#1a1208' }}>
                                                {rPost.coverImage && (
                                                    <img src={urlFor(rPost.coverImage).width(600).url()} alt={rPost.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                                )}
                                                <span className="absolute top-3 left-3 font-mono text-xs text-gold bg-void/80 px-2 py-1 uppercase z-10">
                                                    {rPost.category || "Essays"}
                                                </span>
                                            </div>

                                            <div className="p-8 flex flex-col flex-grow relative z-10 bg-obsidian">
                                                <h3 className="font-cormorant text-2xl text-ivory leading-snug group-hover:text-gold transition-colors duration-300">
                                                    {rPost.title}
                                                </h3>

                                                {rPost.excerpt && (
                                                    <p className="font-garamond text-stone text-sm leading-relaxed mt-4 line-clamp-3">
                                                        {rPost.excerpt}
                                                    </p>
                                                )}

                                                <div className="mt-auto pt-6 flex justify-between items-center">
                                                    <span className="font-mono text-xs text-stone uppercase">{rPost.author?.name || 'Kothakhahon'}</span>
                                                    <span className="font-mono text-xs text-stone uppercase">{rPostDate}</span>
                                                </div>

                                                <span className="font-cinzel text-xs tracking-widest text-gold mt-6 block border-b border-gold/30 pb-1 w-fit uppercase">
                                                    Read More →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
