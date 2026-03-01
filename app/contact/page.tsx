'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

/* ── Form Schema ── */
const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    subject: z.enum([
        'General Inquiry',
        'Media & Press',
        'Rights & Licensing',
        'Author Submission',
        'Reader Feedback',
        'Other'
    ], { errorMap: () => ({ message: 'Please select a subject' }) }),
    message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FormData = z.infer<typeof schema>

const DEPARTMENTS = [
    { dept: "EDITORIAL", label: "Manuscripts & Publishing", email: "editorial@kothakhahon.com" },
    { dept: "PRESS", label: "Media & Publicity", email: "press@kothakhahon.com" },
    { dept: "RIGHTS", label: "Foreign Rights & Licensing", email: "rights@kothakhahon.com" },
]

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1200))
        console.log('Contact form data:', data)
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    return (
        <>
            {/* ═══════════════════════════════════════════════
          SECTION 1 — Page Header
      ═══════════════════════════════════════════════ */}
            <section className="bg-void pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto border-b border-smoke pb-16 flex flex-col md:flex-row justify-between items-end gap-8">

                    {/* Left Side */}
                    <div>
                        <span className="font-cinzel text-xs tracking-widest text-gold mb-6 block uppercase">
                            GET IN TOUCH
                        </span>
                        <div className="w-10 h-px bg-gold mb-6" />

                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2 }}>
                            <h1 className="font-cormorant text-7xl md:text-9xl text-ivory font-light leading-none">
                                Let's Talk
                            </h1>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5 }}>
                            <h2 className="font-cormorant text-7xl md:text-9xl italic text-gold font-light leading-none">
                                About Books.
                            </h2>
                        </motion.div>
                    </div>

                    {/* Right Side */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="md:mb-4">
                        <p className="font-garamond italic text-stone text-lg max-w-sm">
                            Whether you are a reader, a writer, a journalist, or simply someone who loves books — we would love to hear from you.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 2 — Split Layout (Info + Form)
      ═══════════════════════════════════════════════ */}
            <section className="bg-void py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">

                    {/* ── LEFT COLUMN — Contact Information ── */}
                    <div>
                        {/* Department Emails */}
                        <div>
                            {DEPARTMENTS.map((dept, i) => (
                                <div key={i} className={`mb-10 pb-10 ${i !== DEPARTMENTS.length - 1 ? 'border-b border-smoke' : ''}`}>
                                    <h3 className="font-cinzel text-xs tracking-widest text-gold mb-1 uppercase">{dept.dept}</h3>
                                    <p className="font-mono text-xs text-stone tracking-widest mb-3 uppercase">{dept.label}</p>
                                    <a href={`mailto:${dept.email}`} className="font-garamond text-parchment text-lg hover:text-gold transition-colors duration-300">
                                        {dept.email}
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Office Address */}
                        <div className="mt-4">
                            <h3 className="font-cinzel text-xs tracking-widest text-stone mb-4 uppercase">FIND US</h3>
                            <p className="font-garamond text-parchment text-base leading-relaxed whitespace-pre-line">
                                Kothakhahon Prakashani{'\n'}
                                12 Bankim Chatterjee Street{'\n'}
                                College Street, Kolkata — 700073{'\n'}
                                West Bengal, India
                            </p>
                        </div>

                        {/* Office Hours */}
                        <div className="mt-8">
                            <h3 className="font-cinzel text-xs tracking-widest text-stone mb-4 uppercase">OFFICE HOURS</h3>
                            <p className="font-garamond text-parchment text-base">Monday — Friday: 10:00 AM to 6:00 PM</p>
                            <p className="font-garamond text-parchment text-base mt-1">Saturday: 11:00 AM to 3:00 PM</p>
                            <p className="font-garamond text-stone text-sm mt-1 italic">Closed on Sundays and public holidays.</p>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h3 className="font-cinzel text-xs tracking-widest text-stone mb-4 uppercase">FOLLOW US</h3>
                            <div className="flex gap-6">
                                {['Facebook', 'Instagram', 'Twitter/X', 'Goodreads'].map((platform) => (
                                    <Link href="#" key={platform} className="font-mono text-xs text-stone hover:text-gold transition-colors duration-300 uppercase">
                                        {platform}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT COLUMN — Contact Form ── */}
                    <div>
                        <h2 className="font-cormorant text-4xl text-ivory font-light mb-2">Send Us a Message</h2>
                        <p className="font-garamond italic text-stone text-sm mb-12">We read and respond to every message.</p>

                        {isSubmitted ? (
                            <div className="py-16 text-center">
                                <span className="text-gold text-3xl block">✦</span>
                                <h3 className="font-cormorant text-5xl text-ivory mt-4">Message Received.</h3>
                                <p className="font-garamond text-parchment text-lg mt-4 max-w-sm mx-auto">
                                    Thank you for reaching out. We will get back to you within 2–3 business days.
                                </p>
                                <p className="font-mono text-xs text-gold tracking-widest mt-8 uppercase">— Kothakhahon Prakashani</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Name & Email Row */}
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

                                {/* Subject Full Width */}
                                <div className="mb-8">
                                    <label className="font-cinzel text-xs tracking-widest text-stone mb-2 block uppercase">Subject</label>
                                    <select
                                        {...register('subject')}
                                        className="w-full bg-transparent border-b border-smoke text-parchment font-garamond text-base py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-stone/50 appearance-none bg-void"
                                    >
                                        <option value="" className="bg-obsidian">Select a subject...</option>
                                        <option value="General Inquiry" className="bg-obsidian">General Inquiry</option>
                                        <option value="Media & Press" className="bg-obsidian">Media & Press</option>
                                        <option value="Rights & Licensing" className="bg-obsidian">Rights & Licensing</option>
                                        <option value="Author Submission" className="bg-obsidian">Author Submission</option>
                                        <option value="Reader Feedback" className="bg-obsidian">Reader Feedback</option>
                                        <option value="Other" className="bg-obsidian">Other</option>
                                    </select>
                                    {errors.subject && <p className="font-mono text-xs text-ember mt-1">{errors.subject.message}</p>}
                                </div>

                                {/* Message Full Width */}
                                <div className="mb-8">
                                    <label className="font-cinzel text-xs tracking-widest text-stone mb-2 block uppercase">Message</label>
                                    <textarea
                                        {...register('message')}
                                        rows={6}
                                        className="w-full bg-transparent border-b border-smoke text-parchment font-garamond text-base py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-stone/50 resize-y"
                                        placeholder="How can we help you?"
                                    />
                                    {errors.message && <p className="font-mono text-xs text-ember mt-1">{errors.message.message}</p>}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-gold text-void font-cinzel text-xs tracking-widest px-12 py-5 w-full mt-4 hover:bg-gold-dim transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase"
                                >
                                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════════
          SECTION 3 — Bottom Banner
      ═══════════════════════════════════════════════ */}
            <section className="bg-obsidian border-t border-smoke py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="font-cormorant italic text-3xl md:text-4xl text-ivory font-light">
                        "Every great book begins with a conversation."
                    </p>
                    <p className="font-mono text-xs text-gold tracking-widest mt-6 uppercase">
                        — The Editorial Team, Kothakhahon Prakashani
                    </p>

                    <div className="mt-12 flex gap-6 justify-center flex-wrap">
                        <Link
                            href="/books"
                            className="border border-gold text-gold font-cinzel text-xs tracking-widest px-8 py-4 hover:bg-gold hover:text-void transition-all duration-300 uppercase"
                        >
                            Browse Our Books
                        </Link>
                        <Link
                            href="/for-authors"
                            className="bg-gold text-void font-cinzel text-xs tracking-widest px-8 py-4 hover:bg-gold-dim transition-all duration-300 uppercase"
                        >
                            Submit a Manuscript
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
