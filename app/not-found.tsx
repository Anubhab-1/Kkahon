import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-void flex items-center justify-center px-6">
            <div className="text-center max-w-2xl">
                {/* Large 404 */}
                <div className="font-cormorant text-[12rem] md:text-[16rem] text-smoke/30 font-light leading-none select-none">
                    404
                </div>

                {/* Message */}
                <div className="mt-[-2rem] relative z-10">
                    <p className="font-cinzel text-xs tracking-widest text-gold mb-6">
                        PAGE NOT FOUND
                    </p>
                    <h1 className="font-cormorant text-4xl md:text-6xl text-ivory font-light leading-tight">
                        This page seems to have<br />
                        <span className="italic text-gold">gone missing.</span>
                    </h1>
                    <p className="font-garamond text-stone text-lg mt-8 italic">
                        Like a manuscript lost in translation — some things cannot be found,
                        only rediscovered.
                    </p>
                </div>

                {/* Gold rule */}
                <hr className="gold-rule max-w-24 mx-auto mt-12 mb-12" />

                {/* CTAs */}
                <div className="flex gap-6 justify-center flex-wrap">
                    <Link href="/"
                        className="border border-gold text-gold font-cinzel text-xs tracking-widest px-8 py-4 hover:bg-gold hover:text-void transition-all duration-300">
                        Return Home
                    </Link>
                    <Link href="/books"
                        className="bg-gold text-void font-cinzel text-xs tracking-widest px-8 py-4 hover:bg-gold-dim transition-all duration-300">
                        Browse Books
                    </Link>
                </div>
            </div>
        </div>
    )
}
