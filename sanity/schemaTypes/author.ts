import { defineField, defineType } from 'sanity'

export const authorType = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'photo',
            title: 'Author Photo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'bio',
            title: 'Biography',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'featured',
            title: 'Featured Author on Homepage?',
            type: 'boolean',
            initialValue: false,
        }),
    ],
    preview: {
        select: { title: 'name', media: 'photo' },
    },
})
