import Link from 'next/link'

interface BookCardProps {
    title: string
    author: string
    genre: string
    coverBg: string
    large?: boolean
    slug?: string
}

export default function BookCard({ title, author, genre, coverBg, large = false, slug }: BookCardProps) {
    const href = slug ? `/books/${slug}` : '/books'

    return (
        <Link href={href} className="group block">
            <div
                className="relative overflow-hidden cursor-pointer border border-smoke hover:border-gold/60 transition-all duration-500 hover:scale-[1.02]"
                style={{ aspectRatio: '2/3' }}
            >
                {/* Cover area */}
                <div
                    className="absolute inset-0 flex items-center justify-center shadow-inner"
                    style={{ backgroundColor: coverBg }}
                >
                    <span
                        className={`font-cormorant italic text-ivory text-center px-4 ${large ? 'text-2xl' : 'text-lg'
                            }`}
                    >
                        {title}
                    </span>
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-obsidian/80 backdrop-blur-sm px-4 py-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="font-cinzel text-xs text-ivory tracking-wide truncate">
                        {title}
                    </div>
                    <div className="font-garamond text-xs text-stone mt-1">
                        {author}
                    </div>
                    <span className="font-mono text-xs text-gold border border-gold/30 px-2 py-0.5 mt-2 inline-block">
                        {genre}
                    </span>
                </div>
            </div>
        </Link>
    )
}
