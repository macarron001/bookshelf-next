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
  token: string
}

export type Token = {
  token: string
}

export interface Books extends Array<BookType> {
  books: BookType[]
}
