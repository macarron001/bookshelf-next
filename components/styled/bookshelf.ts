import tw from "tailwind-styled-components"

const Container = tw.div`
  w-full
  grid
  grid-cols-1
  auto-rows-auto
  my-0
  mx-auto
  py-16
  px-[84px]
  gap-3
  lg:grid-cols-[1fr_3fr]
  lg:px-[2em]
  lg:py-[4em]
  lg:my-0
  lg:mx-auto
  lg:max-w-[840px]
  lg:gap-[1em]
`

const Main = tw.div`
  w-full
`

const LogoutContainer = tw.div`
  flex
  items-center
  absolute
  top-[10px]
  right-[10px]
`

const LogoutButton = tw.button`
  cursor-pointer
  py-[10px]
  px-[15px]
  border-0
  leading-none
  rounded-[3px]
  bg-[#F1F2F7]
  text-[#333333]
  ml-[10px]
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
  lg:sticky
  lg:top-1
  lg:px-[1.5em]
  lg:py-[1em]
`

const NavList = tw.ul`
  list-none
  p-0
  lg:mb-4
`

const NavContainer = tw.div`
  relative
`

const Link = tw.a`
${(p) => (p.active ? "bg-[#F1F1F4]" : "")}
${(p) => (p.active ? "border-[#3F51B5]" : "border-transparent")}

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
  hover:text-[#3F51B5]
  cursor-pointer
`

const HeaderBox = tw.div`
  text-xl
  text-center
  lg:mt-5
`
const HeaderItem = tw.p`
  mb-4
  mt-0
`

const ContentContainer = tw.div`
  grid
  grid-cols-[1fr 3fr]
`

const ExtendedSideBar = tw.div`
  right-20
  text-gray-500
  h-full
  flex
  flex-col
  justify-around
`

const ReadingHeader = tw.div`
  mt-5
  text-xl
`

const HeaderLink = tw.a`
  mx-1
  text-[#3F51B5]
  cursor-pointer
`

const BookList = tw.ul`
  list-none
  p-0
  grid
  gap-[1em]
  mt-5
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
  ExtendedSideBar,
  ReadingHeader,
  HeaderLink,
  BookList,
  NavContainer,
  LogoutButton,
  Main,
}
