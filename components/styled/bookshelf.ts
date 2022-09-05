import tw from "tailwind-styled-components"

const Container = tw.div`
  w-full
  grid
  grid-cols-1
  auto-rows-auto
  mt-0
  mx-auto
  pt-1
  pb-16
  px-[84px]
  gap-3
`
const LogoutContainer = tw.div`
  flex
  items-center
  pt-2
  px-4
  pb-3
  justify-end
  gap-3
`

const NavBox = tw.nav`
  px-6
  pt-4
  pb-7
  border-solid
  border-[1px]
  border-[#f1f1f4]
  rounded-[3px]
  font-normal
`

const NavList = tw.ul`
  list-none
  p-0
`

const Link = tw.a`
${(p) => (p.$active ? "bg-[#F1F1F4]" : "")}
${(p) => (p.$active ? "border-[#3F51B5]" : "border-transparent")}

  block
  py-2
  pr-4
  pl-[10px]
  my-1
  mx-0
  w-full
  h-full
  rounded-sm
  border-l-[5px]
  border-solid
  cursor-pointer
  hover:text-[#3F51B5]
`

const HeaderBox = tw.div`
  text-xl
  text-center
`
const HeaderItem = tw.p`
  mb-4
  mt-0
`

const ContentContainer = tw.div`
  grid
  grid-cols-[1fr 3fr]
`

const BookCard = tw.div`
  min-h-[270px]
  grid
  grid-flow-col
  auto-cols-max
  gap-5
  border-solid
  border-[1px]
  border-[#E5E4E9]
  text-[#434449]
  p-5
  rounded-[3px]
`

const BookImage = tw.div`
  w-[140px]
`

const BookContent = tw.div`
w-[563px]
`

const HeaderBar = tw.div`
  flex
  justify-between
`

const TitleBar = tw.div`
  flex-grow-1
  flex-shrink-1
  basis-0
`

const Title = tw.h2`
  text-xl
  font-medium
  m-0
  text-[#3F51B5]
`

const SideBar = tw.div`
  right-20
  text-gray-500
  flex
  flex-col
  justify-center
  items-center
  h-full
`

const InfoBox = tw.div`
  mt-[0.4em]
`

const Author = tw.p`
  italic
  text-[0.85em]
`

const Publisher = tw.p`
  text-[0.875em]
`

const Synopsis = tw.p`
  text-[0.85em]
  whitespace-pre-line
  truncate
  max-h-[270px]
`

const PlusButton = tw.button`
  bg-slate-400
  rounded-[50%]
  text-sm
  z-10
  cursor-pointer
`
const RoundBorder = tw.div`
  w-[35px] 
  h-[35px] 
  rounded-[50%] 
  border-solid 
  border-[1px] 
  absolute
`

const SearchForm = tw.form`
  w-full
  p-0
  mt-0
`

const SearchInput = tw.input`
  w-full
  mx-0
  mb-[10px]
`

const SearchLabel = tw.label`
  inline-block
`

const SearchButton = tw.button`
  border-0
  relative
  ml-[-35px]
  bg-transparent
  cursor-pointer
`

export {
  Container,
  LogoutContainer,
  NavBox,
  NavList,
  Link,
  HeaderBox,
  HeaderItem,
  ContentContainer,
  BookCard,
  BookImage,
  SideBar,
  BookContent,
  HeaderBar,
  Title,
  Author,
  Publisher,
  InfoBox,
  Synopsis,
  PlusButton,
  RoundBorder,
  SearchForm,
  SearchButton,
  SearchInput,
  SearchLabel,
}
