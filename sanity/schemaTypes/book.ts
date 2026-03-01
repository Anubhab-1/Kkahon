import { defineField, defineType } from 'sanity'

export const bookType = defineType({
    name: 'book',
    title: 'Book',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Book Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'titleEn',
            title: 'English Title (if Bengali)',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'genre',
            title: 'Genre',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Literary Fiction', value: 'Literary Fiction' },
                    { title: 'Poetry', value: 'Poetry' },
                    { title: 'Science Fiction', value: 'Science Fiction' },
                    { title: 'Fantasy', value: 'Fantasy' },
                    { title: 'Mixed', value: 'Mixed' },
                ],
            },
        }),
        defineField({
            name: 'synopsis',
            title: 'Synopsis',
            type: 'text',
            rows: 6,
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'pullQuote',
            title: 'Pull Quote (from the book)',
            type: 'string',
        }),
        defineField({
            name: 'price',
            title: 'Price (e.g. ₹450)',
            type: 'string',
        }),
        defineField({
            name: 'buyLink',
            title: 'Buy Link (URL)',
            type: 'url',
        }),
        defineField({
            name: 'publicationDate',
            title: 'Publication Date',
            type: 'date',
        }),
        defineField({
            name: 'pageCount',
            title: 'Page Count',
            type: 'number',
        }),
        defineField({
            name: 'isbn',
            title: 'ISBN',
            type: 'string',
        }),
        defineField({
            name: 'language',
            title: 'Language',
            type: 'string',
            options: {
                list: [
                    { title: 'Bengali', value: 'Bengali' },
                    { title: 'English', value: 'English' },
                    { title: 'Both', value: 'Both' },
                ],
            },
        }),
        defineField({
            name: 'featured',
            title: 'Featured on Homepage?',
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
