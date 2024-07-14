import * as yup from 'yup'

export class ProfileSchema {
  static getSchema() {
    return yup.object().shape({
      name: yup.string().required('Name is required'),
      lastname: yup.string().required('lastname is required'),
      email: yup.string().email().required('Email is required'),
      phone: yup.string().required('Phone is required'),
    })
  }
}

export class ContactProfileSchema extends ProfileSchema {
  static getSchema() {
    return super.getSchema().shape({
      address: yup
        .string()
        .min(10, 'Ingrese una dirección correcta')
        .required('Address is required'),
      hbd: yup.date().required('Birthday is required'),
    })
  }
}
