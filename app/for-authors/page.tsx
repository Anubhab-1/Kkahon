'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import SectionHeader from '@/components/ui/SectionHeader'
import Accordion from '@/components/ui/Accordion'

/* ── Form Schema ── */
const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    bookTitle: z.string().min(1, 'Book title is required'),
    genre: z.enum(['Literary Fiction', 'Poetry', 'Science Fiction', 'Fantasy', 'Other']),
    wordCount: z.string().min(1, 'Word count is required'),
    language: z.enum(['Bengali', 'English', 'Both']),
    synopsis: z.string().min(100, 'Synopsis must be at least 100 characters').max(500, 'Synopsis must be under 500 words'),
    authorBio: z.string().min(50, 'Bio must be at least 50 characters'),
    notes: z.string().optional(),
})

type FormData = z.infer<typeof schema>

/* ── Accordion Data ── */
const FAQ_ITEMS = [
    {
        question: "Do you accept submissions from outside India?",
        answer: "Yes. We publish authors from anywhere in the world, as long as the work has a meaningful connection to Bengali language, culture, or experience. We have published authors from the UK, USA, Bangladesh, and beyond."
    },
    {
        question: "Can I submit if I have already published the work elsewhere?",
        answer: "We only accept previously unpublished work. This includes work that has been self-published, published on blogs or social media platforms, or published in any print format. Work that has appeared in literary journals as excerpts may be considered — please mention this in your notes."
    },
    {
        question: "Do you accept simultaneous submissions?",
        answer: "Yes, we accept simultaneous submissions. However, please notify us immediately if your work is accepted elsewhere so we can update our records."
    },
    {
        question: "What happens if my manuscript is rejected?",
        answer: "We respond to all submissions. If we pass on your work, it does not mean the work is without merit — it simply means it is not right for our list at this time. We encourage you to continue submitting elsewhere and to submit to us again in the future."
    },
    {
        question: "Do you charge reading fees?",
        answer: "Never. We do not charge reading fees, submission fees, or any fees of any kind. If a publisher charges you to read your manuscript, that is not a publisher — that is a predator. We are a publisher."
    },
    {
        question: "How do royalties work?",
        answer: "We offer competitive royalty rates that are discussed in detail during the contract stage. We believe authors should be paid fairly for their work. Our standard rate is 10% of net receipts for print and 25% for digital editions."
    },
]

export default function ForAuthorsPage() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    // Watch synopsis to show length
    const synopsisLength = watch('synopsis')?.length || 0

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('Form data:', data)
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    return (
        <>
            {/* ═══════════════════════════════════════════════
          SECTION 1 — Aspirational Hero
      ═══════════════════════════════════════════════ */}
            <section className="bg-void pt-32 pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <span className="font-cinzel text-xs tracking-widest text-gold mb-8 block uppercase">
                        FOR WRITERS
                    </span>
                    <div className="w-10 h-px bg-gold mb-8" />

                    {/* Main Headline */}
                    <div>
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}>
                            <h1 className="font-cormorant text-6xl md:text-8xl text-ivory font-light leading-tight">
                                We Are Looking for
                            </h1>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}>
                            <h2 className="font-cormorant text-6xl md:text-8xl text-ivory font-light leading-tight">
                                Voices That Demand
                            </h2>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}>
                            <h3 className="font-cormorant text-6xl md:text-8xl italic text-gold gold-shimmer font-light leading-tight">
                                to Be Heard.
                            </h3>
                        </motion.div>
                    </div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
                        <p className="mt-12 font-garamond text-parchment text-xl leading-relaxed max-w-3xl">
                            Kothakhahon Prakashani reads every submission with care and intention. We are not looking for what sells — we are looking for what matters. If you have written something honest, something brave, something necessary — we want to read it.
                        </p>

                        <div className="mt-12 flex flex-col sm:flex-row gap-8">
                            <div className="glass-panel hover-glow-card px-6 py-6 hover:-translate-y-2 transition-transform duration-500">
                                <div className="font-cormorant text-4xl text-gold font-light">100%</div>
                                <div className="font-mono text-[10px] text-stone tracking-widest mt-2 uppercase">Submissions Read</div>
                            </div>
                            <div className="glass-panel hover-glow-card px-6 py-6 hover:-translate-y-2 transition-transform duration-500">
                                <div className="font-cormorant text-4xl text-gold font-light">4–6 Weeks</div>
                                <div className="font-mono text-[10px] text-stone tracking-widest mt-2 uppercase">Average Response</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 2 — What We're Looking For
      ═══════════════════════════════════════════════ */}
            <section className="bg-obsidian py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        eyebrow="EDITORIAL VISION"
                        title="What Excites Us"
                        centered={false}
                    />

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Left */}
                        <div className="font-garamond text-parchment text-lg leading-relaxed">
                            <p className="mb-6">
                                We are drawn to writing that takes risks. Stories where the language itself is alive — where the sentences feel inevitable, and the silences between them carry weight. We are especially interested in work that engages with Bengali identity, history, and experience, but we are not limited by geography or language.
                            </p>
                            <p>
                                We publish in Bengali and English, and we welcome manuscripts that move between languages, that refuse easy translation, that exist in the hyphen between cultures.
                            </p>
                        </div>

                        {/* Right */}
                        <div>
                            <span className="font-cinzel text-xs tracking-widest text-stone mb-8 block uppercase">We are actively seeking:</span>
                            <ul className="mb-8 space-y-4">
                                {[
                                    "Debut novels with a distinct voice",
                                    "Poetry collections that take formal risks",
                                    "Science fiction rooted in Bengali mythology",
                                    "Literary fiction that engages with history",
                                    "Cross-language and experimental works",
                                    "Stories from rural Bengal rarely told"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <span className="text-gold font-cormorant text-lg flex-shrink-0">✦</span>
                                        <span className="font-garamond text-parchment text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <span className="font-cinzel text-xs tracking-widest text-stone mb-4 block uppercase">We do not currently publish:</span>
                                <ul className="space-y-2">
                                    {[
                                        "Genre romance or erotica",
                                        "Self-help or business books",
                                        "Previously self-published works"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-ember font-mono text-sm leading-none mt-1">✕</span>
                                            <span className="font-garamond text-stone text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 3 — Submission Guidelines
      ═══════════════════════════════════════════════ */}
            <section className="bg-void py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <SectionHeader
                        eyebrow="GUIDELINES"
                        title="How to Submit"
                        centered={false}
                    />

                    <div className="mt-16">
                        <div className="border-t border-smoke pt-8 mb-12">
                            <div className="font-mono text-xs text-gold tracking-widest mb-4">01</div>
                            <h3 className="font-cinzel text-sm tracking-widest text-ivory mb-4 uppercase">What to Send</h3>
                            <p className="font-garamond text-parchment text-base leading-relaxed">
                                Send us the complete manuscript for novels and short story collections. For poetry, send a selection of 15–20 poems that represent the full collection. Include a synopsis of no more than 500 words and a brief author biography. We accept PDF and DOCX formats only.
                            </p>
                        </div>

                        <div className="border-t border-smoke pt-8 mb-12">
                            <div className="font-mono text-xs text-gold tracking-widest mb-4">02</div>
                            <h3 className="font-cinzel text-sm tracking-widest text-ivory mb-4 uppercase">How to Send</h3>
                            <p className="font-garamond text-parchment text-base leading-relaxed">
                                Use the submission form below. Do not send manuscripts by email — submissions sent by email will not be read. Attach your manuscript as a single file. In the synopsis field, tell us what the book is about, who it is for, and why you wrote it. That last question matters most.
                            </p>
                        </div>

                        <div className="border-t border-smoke pt-8 mb-12">
                            <div className="font-mono text-xs text-gold tracking-widest mb-4">03</div>
                            <h3 className="font-cinzel text-sm tracking-widest text-ivory mb-4 uppercase">What Happens Next</h3>
                            <p className="font-garamond text-parchment text-base leading-relaxed">
                                Every submission is read by a member of our editorial team. We respond to all submissions within 4–6 weeks. If we are interested, we will reach out to request the full manuscript if you sent a partial, or to arrange a call. We do not provide detailed feedback on rejected manuscripts, but we read every word.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 4 — Our Process
      ═══════════════════════════════════════════════ */}
            <section className="bg-obsidian py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <SectionHeader
                        eyebrow="THE JOURNEY"
                        title="Our Process"
                        centered={true}
                    />

                    <div className="mt-16 relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        {/* Desktop Connector Line */}
                        <div className="hidden md:block absolute top-[2rem] left-0 right-0 h-px bg-smoke z-0" />

                        {[
                            { number: "01", title: "Submit", description: "Complete the form below with your manuscript and synopsis." },
                            { number: "02", title: "We Read", description: "Every submission is read carefully by our editorial team." },
                            { number: "03", title: "Response", description: "We respond within 4–6 weeks with our decision." },
                            { number: "04", title: "Contract", description: "If selected, we move to editorial review and contract." },
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center md:flex-1 relative z-10 w-full md:w-auto glass-panel p-8 hover:-translate-y-2 transition-transform duration-500 hover-glow-card">
                                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                                    <span className="font-mono text-[10px] text-gold tracking-widest">{step.number}</span>
                                </div>
                                <h4 className="font-cinzel text-xs tracking-widest text-ivory mt-2 uppercase">{step.title}</h4>
                                <p className="font-garamond text-stone text-xs mt-3 max-w-[160px] mx-auto leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 5 — Manuscript Submission Form
      ═══════════════════════════════════════════════ */}
            <section className="bg-void py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <SectionHeader
                        eyebrow="SUBMIT YOUR WORK"
                        title="Send Us Your Manuscript"
                        centered={false}
                    />

                    <div className="mt-16">
                        {isSubmitted ? (
                            <div className="py-24 text-center">
                                <span className="text-gold text-4xl block">✦</span>
                                <h3 className="font-cormorant text-6xl text-ivory mt-6">Thank You.</h3>
                                <p className="font-garamond text-parchment text-xl mt-6 max-w-md mx-auto">
                                    We have received your manuscript and will be in touch within 4–6 weeks.
                                </p>
                                <p className="font-mono text-xs text-gold tracking-widest mt-8 uppercase">— The Editorial Team</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* 1 & 2 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <label className="font-cinzel text-xs tracking-widest text-stone mb-2 block uppercase">Full Name</label>
                                        <input
                                            {...register('name')}
                                            type="text"
                                            className="w-full bg-transparent border-b border-smoke text-parchment font-garamond text-base py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-stone/50"
                                            placeholder="Your name"
                                        />
                                        {errors.name && <p className="font-mono text-xs text-ember mt-1">{errors.name.message}</p>}
                                    </div>
                                    <div>
                                        <label className="font-cinzel text-xs tracking-widest text-stone mb-2 block uppercase">Email Address</label>
                                        <input
                                            {...register('email')}
                                            type="email"
                                            className="w-full bg-transparent border-b border-smoke text-parchment font-garamond text-base py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-stone/50"
                                            placeholder="hello@example.com"
                                        />
                                        {errors.email && <p className="font-mono text-xs text-ember mt-1">{errors.email.message}</p>}
                                    </div>
                                </div>

                                {/* 3 & 4 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <label className="font-cinzel text-xs tracking-widest text-stone mb-2 block uppercase">Book Title</label>
                                        <input
                                            {...register('bookTitle')}
                                            type="text"
                                            className="w-full bg-transparent border-b border-smoke text-parchment font-garamond text-base py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-stone/50"
                                            placeholder="Title of your manuscript"
                                        />
                                        {errors.bookTitle && <p className="font-mono text-xs text-ember mt-1">{errors.bookTitle.message}</p>}
                                    </div>
                                    <div>
                                        <label className="font-cinzel text-xs tracking-widest text-stone mb-2 block uppercase">Genre</label>
                                        <select
                                            {...register('genre')}
                                            className="w-full bg-transparent border-b border-smoke text-parchment font-garamond text-base py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-stone/50 appearance-none bg-void"
                                        >
                                            <option value="" className="bg-obsidian">Select a genre...</option>
                                            <option value="Literary Fiction" className="bg-obsidian">Literary Fiction</option>
                                            <option value="Poetry" className="bg-obsidian">Poetry</option>
                                            <option value="Science Fiction" className="bg-obsidian">Science Fiction</option>
                                            <option value="Fantasy" className="bg-obsidian">Fantasy</option>
                                            <option value="Other" className="bg-obsidian">Other</option>
                                        </select>
                                        {errors.genre && <p className="font-mono text-xs text-ember mt-1">{errors.genre.message}</p>}
                                    </div>
                                </div>

                                {/* 5 & 6 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <label className="font-cinzel text-xs tracking-widest text-stone mb-2 block uppercase">Word Count</label>
                                        <input
                                            {...register('wordCount')}
                                            type="text"
                                            className="w-full bg-transparent border-b border-smoke text-parchment font-garamond text-base py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-stone/50"
                                            placeholder="e.g. 82,000"
                                        />
                                        {errors.wordCount && <p className="font-mono text-xs text-ember mt-1">{errors.wordCount.message}</p>}
                                    </div>
                                    <div>
                                        <label className="font-cinzel text-xs tracking-widest text-stone mb-2 block uppercase">Language</label>
                                        <select
                                            {...register('language')}
                                            className="w-full bg-transparent border-b border-smoke text-parchment font-garamond text-base py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-stone/50 appearance-none bg-void"
                                        >
                                            <option value="" className="bg-obsidian">Select language...</option>
                                            <option value="Bengali" className="bg-obsidian">Bengali</option>
                                            <option value="English" className="bg-obsidian">English</option>
                                            <option value="Both" className="bg-obsidian">Both</option>
                                        </select>
                                        {errors.language && <p className="font-mono text-xs text-ember mt-1">{errors.language.message}</p>}
                                    </div>
                                </div>

                                {/* Synopsis */}
                                <div className="mb-8">
                                    <label className="font-cinzel text-xs tracking-widest text-stone mb-2 block uppercase">Synopsis</label>
                                    <textarea
                                        {...register('synopsis')}
                                        rows={6}
                                        maxLength={2000} // approx for 500 words
                                        className="w-full bg-transparent border-b border-smoke text-parchment font-garamond text-base py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-stone/50 resize-y"
                                        placeholder="Tell us what the book is about, who it is for, and why you wrote it. (Max 500 words)"
                                    />
                                    <div className="flex justify-between items-start mt-1">
                                        {errors.synopsis ? (
                                            <p className="font-mono text-xs text-ember">{errors.synopsis.message}</p>
                                        ) : <span />}
                                        <span className="font-mono text-xs text-stone">{synopsisLength} characters</span>
                                    </div>
                                </div>

                                {/* Author Bio */}
                                <div className="mb-8">
                                    <label className="font-cinzel text-xs tracking-widest text-stone mb-2 block uppercase">Author Bio</label>
                                    <textarea
                                        {...register('authorBio')}
                                        rows={4}
                                        className="w-full bg-transparent border-b border-smoke text-parchment font-garamond text-base py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-stone/50 resize-y"
                                        placeholder="A brief biography"
                                    />
                                    {errors.authorBio && <p className="font-mono text-xs text-ember mt-1">{errors.authorBio.message}</p>}
                                </div>

                                {/* Notes */}
                                <div className="mb-8">
                                    <label className="font-cinzel text-xs tracking-widest text-stone mb-2 block uppercase">Additional Notes (Optional)</label>
                                    <textarea
                                        {...register('notes')}
                                        rows={3}
                                        className="w-full bg-transparent border-b border-smoke text-parchment font-garamond text-base py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-stone/50 resize-y"
                                        placeholder="Any further information..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-gold text-void font-cinzel text-xs tracking-widest px-12 py-5 w-full mt-4 hover:bg-gold-dim transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Manuscript'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 6 — FAQ Accordion
      ═══════════════════════════════════════════════ */}
            <section className="bg-obsidian py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <SectionHeader
                        eyebrow="QUESTIONS"
                        title="Frequently Asked"
                        centered={false}
                    />
                    <div className="mt-16">
                        <Accordion items={FAQ_ITEMS} />
                    </div>
                </div>
            </section>
        </>
    )
}
