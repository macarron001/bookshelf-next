export interface BookInterface {
  id: number
  title: string
  author: string
  cover_image_url: string
  publisher: string
  synopsis: string
}

export interface UserInterface {
  id: number
  username: string
  auth: string
}

export interface BooksInterface extends Array<BookInterface> {
  books: BookInterface[]
}
