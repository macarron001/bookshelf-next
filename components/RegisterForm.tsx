import React from "react"
import {
  AuthenticationForm,
  FormBtnContainer,
  FormGroup,
  Label,
  Button,
  Error,
} from "./styled"
import { useFormik } from "formik"
import * as Yup from "yup"

const RegisterForm = () => {
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
    onSubmit: (values) => {
      console.log(values)
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
        <Button type="submit" onClick={formik.handleSubmit}>
          Register
        </Button>
      </FormBtnContainer>
    </AuthenticationForm>
  )
}

export default RegisterForm
