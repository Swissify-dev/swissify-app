import * as yup from 'yup'

export const profileSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  lastname: yup.string().required('lastname is required'),
  email: yup.string().email().required('Email is required'),
  phone: yup.string().required('Phone is require'),
})
