export type BookType = {
  user_book_id: number
  title: string
  author: string
  cover_image_url: string
  publisher: string
  synopsis: string
  rating: number
  start_date: string
  finish_date: string
  id: number
  notes: string
}

export type UserType = {
  id: number
  username: string
}

export type Token = {
  token: string
}
