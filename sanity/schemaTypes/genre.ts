import { defineField, defineType } from 'sanity'

export const genreType = defineType({
    name: 'genre',
    title: 'Genre',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Genre Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name', maxLength: 96 },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
        }),
    ],
})
