export type BookType = {
  id: number
  title: string
  author: string
  cover_image_url: string
  publisher: string
  synopsis: string
}

export type UserType = {
  id: number
  username: string
  auth: string
}

export interface Books extends Array<BookType> {
  books: BookType[]
}
