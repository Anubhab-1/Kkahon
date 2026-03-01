import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: '6jm0csg0',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}

// Fetch all books
export async function getAllBooks() {
    return client.fetch(`
    *[_type == "book"] | order(publicationDate desc) {
      _id, title, titleEn, slug, genre, price, language, featured, publicationDate,
      coverImage, "author": author->{ name, slug }
    }
  `)
}

// Fetch featured books for homepage
export async function getFeaturedBooks() {
    return client.fetch(`
    *[_type == "book" && featured == true] | order(publicationDate desc)[0...6] {
      _id, title, titleEn, slug, genre, price, language,
      coverImage, "author": author->{ name, slug }
    }
  `)
}

// Fetch single book by slug
export async function getBookBySlug(slug: string) {
    return client.fetch(`
    *[_type == "book" && slug.current == $slug][0] {
      _id, title, titleEn, slug, synopsis, pullQuote, price, buyLink,
      publicationDate, pageCount, isbn, language, genre, coverImage,
      "author": author->{ _id, name, slug, photo, bio }
    }
  `, { slug })
}

// Fetch all blog posts
export async function getAllBlogPosts() {
    return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id, title, slug, category, excerpt, publishedAt, featured,
      coverImage, "author": author->{ name }
    }
  `)
}

// Fetch single blog post by slug
export async function getBlogPostBySlug(slug: string) {
    return client.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id, title, slug, category, excerpt, body, publishedAt,
      coverImage, "author": author->{ name, slug }
    }
  `, { slug })
}

// Fetch all authors
export async function getAllAuthors() {
    return client.fetch(`
    *[_type == "author"] | order(name asc) {
      _id, name, slug, photo, bio, featured
    }
  `)
}

// Fetch site settings
export async function getSiteSettings() {
    return client.fetch(`
    *[_type == "siteSettings"][0] {
      heroTagline, heroTaglineEn, missionStatement,
      "featuredBooks": featuredBooks[]->{ _id, title, slug, coverImage, genre, "author": author->{ name } },
      "featuredAuthor": featuredAuthor->{ _id, name, slug, photo, bio },
      socialFacebook, socialInstagram, socialTwitter, socialGoodreads
    }
  `)
}
