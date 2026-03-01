import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'heroTagline',
            title: 'Hero Tagline (Bengali)',
            type: 'string',
        }),
        defineField({
            name: 'heroTaglineEn',
            title: 'Hero Tagline (English)',
            type: 'string',
        }),
        defineField({
            name: 'missionStatement',
            title: 'Mission Statement',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'featuredBooks',
            title: 'Featured Books (Homepage)',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'book' }] }],
            validation: Rule => Rule.max(6),
        }),
        defineField({
            name: 'featuredAuthor',
            title: 'Featured Author (Homepage)',
            type: 'reference',
            to: [{ type: 'author' }],
        }),
        defineField({
            name: 'socialFacebook',
            title: 'Facebook URL',
            type: 'url',
        }),
        defineField({
            name: 'socialInstagram',
            title: 'Instagram URL',
            type: 'url',
        }),
        defineField({
            name: 'socialTwitter',
            title: 'Twitter/X URL',
            type: 'url',
        }),
        defineField({
            name: 'socialGoodreads',
            title: 'Goodreads URL',
            type: 'url',
        }),
    ],
})
