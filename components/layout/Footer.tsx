import Link from 'next/link'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Books', href: '/books' },
    { label: 'Authors', href: '/authors' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Submit Manuscript', href: '/for-authors' },
]

const socialLinks = [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Twitter/X', href: '#' },
    { label: 'Goodreads', href: '#' },
]

export default function Footer() {
    return (
        <footer className="bg-obsidian border-t border-gold/40 pt-16 pb-8">
            {/* Three-column grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Column 1 — Brand */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img src="/images/logo.png" alt="Kothakhahon Prakashani" className="h-12 w-12 object-contain" />
                        <div>
                            <div className="font-cinzel text-gold text-sm tracking-widest">KOTHAKHAHON</div>
                            <div className="font-cinzel text-stone text-xs tracking-widest mt-1">PRAKASHANI</div>
                        </div>
                    </div>
                    <p className="font-garamond italic text-stone text-sm mt-4">
                        Where stories find their voice.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="font-mono text-xs text-stone hover:text-gold transition-colors duration-300"
                            >
                                {social.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Column 2 — Navigate */}
                <div>
                    <h3 className="font-cinzel text-xs tracking-widest text-stone mb-6">
                        NAVIGATE
                    </h3>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="font-garamond text-sm text-parchment hover:text-gold transition-colors duration-300 block mb-3"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Column 3 — Contact */}
                <div>
                    <h3 className="font-cinzel text-xs tracking-widest text-stone mb-6">
                        GET IN TOUCH
                    </h3>

                    <div className="mb-5">
                        <div className="font-cinzel text-xs text-stone tracking-widest">Editorial</div>
                        <a
                            href="mailto:editorial@kothakhahon.com"
                            className="font-mono text-xs text-parchment hover:text-gold transition-colors duration-300"
                        >
                            editorial@kothakhahon.com
                        </a>
                    </div>

                    <div className="mb-5">
                        <div className="font-cinzel text-xs text-stone tracking-widest">Press</div>
                        <a
                            href="mailto:press@kothakhahon.com"
                            className="font-mono text-xs text-parchment hover:text-gold transition-colors duration-300"
                        >
                            press@kothakhahon.com
                        </a>
                    </div>

                    <div className="mb-5">
                        <div className="font-cinzel text-xs text-stone tracking-widest">Rights</div>
                        <a
                            href="mailto:rights@kothakhahon.com"
                            className="font-mono text-xs text-parchment hover:text-gold transition-colors duration-300"
                        >
                            rights@kothakhahon.com
                        </a>
                    </div>

                    <address className="font-garamond text-xs text-stone mt-6 leading-relaxed not-italic">
                        Kothakhahon Prakashani<br />
                        Kolkata, West Bengal<br />
                        India
                    </address>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="max-w-7xl mx-auto px-6 border-t border-smoke mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="font-mono text-xs text-stone">
                    © 2025 Kothakhahon Prakashani. All rights reserved.
                </span>
                <span className="font-garamond italic text-xs text-stone">
                    Crafted with care for the love of stories.
                </span>
            </div>
        </footer>
    )
}
