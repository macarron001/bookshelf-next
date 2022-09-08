import tw from "tailwind-styled-components"

const Button = tw.div`
  ${(p: { purple: boolean }) => (p.purple ? "bg-[#3F51B5]" : "bg-[#F1F2F7]")} 
  ${(p: { purple: boolean }) => (p.purple ? "text-white" : "text-black")} 

  py-2.5
  px-[15px]
  border-none
  leading-normal
  rounded-[3px]
  cursor-pointer
  text-[15px]
  text-center
`

const ButtonContainer = tw.div`
  grid
  grid-cols-2
  gap-3
`

const IndexContainer = tw.div`
  flex
  flex-col
  items-center
  justify-center
  w-full
  h-screen
`

const Title = tw.div`
  text-4xl
  font-medium
  mb-2
  mt-0
`

const ModalContainer = tw.div`
  flex
  justify-center
  items-center
  overflow-x-hidden
  fixed
  inset-0
  z-50
  outline-none
  focus:outline-none
  bg-black
  bg-opacity-30
`

const ModalContent = tw.div`
  bg-white
  w-[450px]
  max-h-[500px]
  rounded-[3px]
  px-5
  pb-14
  shadow-lg
  shadow-[000014]
`

const CloseContainer = tw.div`
  flex
  justify-end
  align-center
  py-2
`

const CircleButton = tw.div`
  rounded-[30px]
  p-0
  w-10
  h-10
  leading-1
  flex
  items-center
  justify-center
  bg-white
  text-[#434449]
  border-[1.5px]
  border-solid
  border-[#f1f1f4]
  cursor-pointer
  hover:bg-black
  hover:opacity-30
  hover:text-white
`

const FormTitle = tw.div`
  text-center
  leading-relaxed
  mb-2
  mt-0
  text-[2em]
  font-medium
`

const AuthenticationForm = tw.form`
  flex
  flex-col
  items-stretch
  mt-0
  p-7
`

const FormInput = tw.input`
  rounded
  border-solid
  border-[1px]
  border-[#f1f1f4]
  py-2
  px-3
  text-base
  mx-4
  mt-0.5
  mb-5
`

const FormGroup = tw.div`
  flex
  flex-col
`

const Label = tw.div`
  inline-block
  ml-4
`

const FormBtnContainer = tw(ButtonContainer)`
  p-4
  mt-0
  pt-0
  grid-cols-3
`
const Error = tw.span`
  text-red-700
  mt-2
  pl-4
  relative
  bottom-[18px]
`

export {
  Button,
  ButtonContainer,
  IndexContainer,
  Title,
  ModalContainer,
  ModalContent,
  CloseContainer,
  CircleButton,
  FormTitle,
  AuthenticationForm,
  FormInput,
  FormGroup,
  Label,
  FormBtnContainer,
  Error,
}
