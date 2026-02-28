interface SectionHeaderProps {
    eyebrow: string
    title: string
    subtitle?: string
    centered?: boolean
}

export default function SectionHeader({ eyebrow, title, subtitle, centered = false }: SectionHeaderProps) {
    return (
        <div className={`flex flex-col ${centered ? 'text-center items-center' : 'text-left items-start'}`}>
            <span className="font-cinzel text-xs tracking-widest text-gold uppercase mb-4">
                {eyebrow}
            </span>
            <div className="w-10 h-px bg-gold mb-4" />
            <h2 className="font-cormorant text-4xl md:text-5xl text-ivory font-light leading-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="font-garamond text-stone text-lg mt-4 max-w-xl">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
