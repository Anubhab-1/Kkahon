export interface Book {
    _id: string
    title: string
    slug: { current: string }
    author: Author
    coverImage: any
    genre: string[]
    synopsis: string
    price: number
    buyLink: string
    publicationDate: string
    pageCount: number
    isbn: string
    featured: boolean
    language: string
}

export interface Author {
    _id: string
    name: string
    slug: { current: string }
    photo: any
    bio: string
}

export interface BlogPost {
    _id: string
    title: string
    slug: { current: string }
    category: string
    coverImage: any
    body: any
    publishedAt: string
    excerpt: string
}

export interface Genre {
    _id: string
    name: string
    slug: { current: string }
    description: string
}
