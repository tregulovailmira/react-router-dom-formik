import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstName: Yup.string().trim().max(128).required('Field cannot be empty'),
  lastName: Yup.string().trim().max(128).required('Field cannot be empty'),
  displayName: Yup.string()
    .trim()
    .min(5, 'Display name should be more than 4 characters')
    .max(128),
  email: Yup.string()
    .trim()
    .email('Please check the format of email address')
    .max(128)
    .required('Field cannot be empty'),
  password: Yup.string()
    .trim()
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,128}/,
      'Password must contain from 6 to 128 characters: A-Z, a-z, 0-9, !@#$%^&*'
    )
    .required('Field cannot be empty'),
  passwordConfirmation: Yup.string()
    .trim()
    .oneOf(
      [Yup.ref('password')],
      'Password confirmation needs to match original password'
    )
    .required('Field cannot be empty'),
});
