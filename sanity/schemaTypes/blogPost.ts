import { defineField, defineType } from 'sanity'

export const blogPostType = defineType({
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Essays', value: 'Essays' },
                    { title: 'Author Interviews', value: 'Author Interviews' },
                    { title: 'Book Reviews', value: 'Book Reviews' },
                    { title: 'News', value: 'News' },
                ],
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'object',
                    name: 'pullQuote',
                    title: 'Pull Quote',
                    fields: [
                        { name: 'text', type: 'string', title: 'Quote Text' }
                    ],
                },
            ],
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
        }),
        defineField({
            name: 'featured',
            title: 'Featured Post?',
            type: 'boolean',
            initialValue: false,
        }),
    ],
    preview: {
        select: { title: 'title', author: 'author.name', media: 'coverImage' },
        prepare({ title, author, media }) {
            return { title, subtitle: author, media }
        },
    },
})
