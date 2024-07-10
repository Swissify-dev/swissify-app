import * as yup from 'yup'

export const createContactSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  lastname: yup.string().required('lastname is required'),
  phone: yup.string().required('Phone is required'),
  address: yup.string().required('Address is required'),
  civil_status: yup.string().required('Civil_status is required'),
  rp: yup.string().required('RP is required'),
  interest: yup.string().required('Interest is required'),
  prize: yup.string().required('Prize is required'),
})
