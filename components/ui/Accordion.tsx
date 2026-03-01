'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
    question: string
    answer: string
}

interface AccordionProps {
    items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="w-full">
            {items.map((item, index) => {
                const isOpen = openIndex === index

                return (
                    <div key={index} className="border-b border-smoke">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center py-6 cursor-pointer text-left hover:text-gold transition-colors duration-300"
                        >
                            <span className="font-cinzel text-sm tracking-widest text-ivory">
                                {item.question}
                            </span>
                            <ChevronDown
                                className="text-gold w-4 h-4 flex-shrink-0 ml-4"
                                style={{
                                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            />
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <p className="font-garamond text-parchment text-base leading-relaxed pb-6">
                                        {item.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </div>
    )
}
