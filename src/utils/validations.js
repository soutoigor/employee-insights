import * as yup from 'yup'

const MESSAGES = {
  REQUIRED: 'Campo obrigatório',
  // eslint-disable-next-line no-template-curly-in-string
  MIN: 'Mínimo ${min} caracteres',
  EMAIL: 'E-mail inválido',
  CONFIRM: 'As senhas devem ser iguais.',
}

export const name = yup
  .string()
  .min(2, MESSAGES.MIN)
  .required(MESSAGES.REQUIRED)
  .label('Nome')
export const email = yup
  .string()
  .email(MESSAGES.EMAIL)
  .required(MESSAGES.REQUIRED)
  .label('E-mail')
export const password = yup
  .string()
  .min(6, MESSAGES.MIN)
  .required(MESSAGES.REQUIRED)
  .label('Senha')
export const confirm = yup
  .string()
  .oneOf([yup.ref('password'), null], MESSAGES.CONFIRM)
