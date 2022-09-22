import React, { useState } from "react"
import {
  AuthenticationForm,
  FormBtnContainer,
  FormGroup,
  Label,
  Button,
  Error,
  SpinnerContainer,
  SpinnerBox,
  Spinner,
} from "../styled"
import { useFormik } from "formik"
import * as Yup from "yup"
import { login } from "api/session/login"
import { ToastMessage } from "../toast"
import { useRouter } from "next/router"
import { useSession } from "hooks/useSession"

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { setUser } = useSession()
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string()
        .min(6, "Must have atleast 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true)
      await login(values).then((res) => {
        setIsLoading(false)
        if (res.password) {
          formik.setErrors(res)
          ToastMessage({ type: "error", message: res.password })
        } else {
          setUser(res)
          router.push("/bookshelf")
        }
      })
    },
  })

  return (
    <AuthenticationForm>
      <FormGroup>
        <Label>Username</Label>
        <input
          id="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <Error>{formik.errors.username}</Error>
        ) : null}
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <input
          id="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <Error>{formik.errors.password}</Error>
        ) : null}
      </FormGroup>
      <FormBtnContainer>
        <Button
          purple={true}
          onClick={formik.handleSubmit}
          type="submit"
          disabled={isLoading ? true : false}
        >
          Login
        </Button>
        <SpinnerContainer isLoading={isLoading}>
          {isLoading && (
            <SpinnerBox>
              <Spinner viewBox="0 0 24 24" />
            </SpinnerBox>
          )}
        </SpinnerContainer>
      </FormBtnContainer>
    </AuthenticationForm>
  )
}

export default LoginForm
