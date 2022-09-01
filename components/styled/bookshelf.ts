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
const Name = tw.div`
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
export {
  Container,
  LogoutContainer,
  Name,
  NavBox,
  NavList,
  Link,
  HeaderBox,
  HeaderItem,
}
