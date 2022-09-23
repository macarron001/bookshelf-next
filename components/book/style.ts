import tw from "tailwind-styled-components"

const BookContainer = tw.div`
  flex
  items-center
  justify-end
  relative
`
const BookCard = tw.div`
  text-ellipsis
  overflow-hidden
  max-h-[270px]
  grid
  grow-2
  grid-cols-[140px_1fr]
  gap-5
  border-solid
  border-[1px]
  border-[#E5E4E9]
  text-[#434449]
  p-[1.25em]
  rounded-[3px]
`
const BookImage = tw.div`
  w-[140px]
  block
  cursor-pointer
`
const BookContent = tw.div`
  grow
  shrink
  basis-0
`

const HeaderBar = tw.div`
  flex
  justify-between
`

const TitleBar = tw(BookContent)`
`

const Title = tw.h2`
  text-xl
  w-full
  font-medium
  m-0
  text-[#3F51B5]
  cursor-pointer
`

const RatingContainer = tw.div`
  flex
  items-center
  float-left
`

const InfoBox = tw.div`
  ml-[10px]
`

const Publisher = tw.p`
  text-[0.875em]
`

const Synopsis = tw.p`
  text-[0.875em]
  overflow-hidden
  text-ellipsis
  cursor-pointer
`

const Author = tw.p`
  mt-[0.4em]
  italic
  text-[0.85em]
`

const SideBar = tw.div`
  ml-5
  absolute
  right-[-20px]
  flex
  flex-col
  justify-around
  h-full
`

const SideButton = tw.div`
  cursor-pointer
  p-0
  leading-none
  flex
  items-center
  justify-center
  bg-white
  border-solid
  border-[1px]
  w-[40px]
  h-[40px]
  rounded-[30px]
`

export {
  BookCard,
  BookImage,
  BookContent,
  HeaderBar,
  Title,
  Author,
  Publisher,
  InfoBox,
  Synopsis,
  BookContainer,
  TitleBar,
  RatingContainer,
  SideButton,
  SideBar,
}
