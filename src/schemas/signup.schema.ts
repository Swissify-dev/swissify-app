import * as yup from 'yup'

export const signupSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is require'),
})
