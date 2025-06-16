import * as yup from 'yup'

const schemaSignUp = yup.object({
  first_name: yup
    .string()
    .required('First Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Only letters are accepted'),
  last_name: yup
    .string()
    .required('Last Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Only letters are accepted'),
  gender: yup
    .string()
    .required('Gender is required'),
  email: yup
    .string()
    .email('Invalid E-mail')
    .required('E-Mail is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 characters minimum.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.^&*])/, 'The password must have at least 8 characters, one number, one uppercase letter, one lowercase letter and one special character'),
}).required()

const schemaSignIn = yup.object({
  email: yup
    .string()
    .email('Invalid E-mail')
    .required('E-Mail is required'),
  password: yup
    .string()
    .required('Password is required')
}).required()

export { schemaSignUp, schemaSignIn }
