import { SideButton } from "components/styled/bookshelf"
import tw from "tailwind-styled-components"

const BookContainer = tw.div`
  flex
  flex-col
  lg:grid
  grid-cols-[1fr_2fr]
  gap-[1.3em]
  lg:gap-[2em]
  mb-[1em]
`

const BookImageContainer = tw.div`
  w-full
  max-w-[14rem]
`
const BookHeader = tw.div`
  flex
  relative
`

const BookTitleBox = tw.div`
  flex-col
  grow
  shrink
  basis-0
  justify-between
`

const BookTitle = tw.h1`
  text-4xl
  font-medium
  leading-tight
  mb-2
  mt-0
`

const ItalicizedContainer = tw.div`
  flex
`

const ItalicizedText = tw.p`
  italic
`

const Divider = tw.span`
  mx-[6px]
`

const SideButtonContainer = tw.div`
  right-0
  text-gray-500
  flex
  flex-col
  justify-around
  min-h-[100px]
`
const SideBtn = tw(SideButton)`
`
const WhiteSpace = tw.div`
  mt-[10px]
  min-h-[46px]
`

const Synopsis = tw.p`
  whitespace-pre-wrap
  mb-4
  mt-0
`

const DateContainer = tw.div`
  mt-[6px]
`

const NotesContainer = tw.div`
  flex
  flex-col
`

const TextArea = tw.textarea`
  w-full
  min-h-[300px]
  bg-[#F1F2F7]
  border-solid
  border-[1px]
  border-[#F1F1F4]
`
const NoteTitle = tw.p`
  inline-block
  mr-[10px]
  mt-0
  mb-2
  font-bold
`

export {
  BookContainer,
  BookImageContainer,
  BookHeader,
  BookTitleBox,
  BookTitle,
  ItalicizedText,
  Divider,
  ItalicizedContainer,
  SideButtonContainer,
  SideBtn,
  WhiteSpace,
  Synopsis,
  DateContainer,
  NotesContainer,
  TextArea,
  NoteTitle,
}
