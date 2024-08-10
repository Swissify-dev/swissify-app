import * as yup from 'yup'

export const createEvent = yup.object().shape({
  event_type: yup.string().required('Event type is required'),
  note: yup.string().optional(),
  date: yup.string().required('Date is required'),
  address: yup.string().required('Addess is required'),
})
