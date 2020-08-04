import * as yup from "yup";

export const SignUpSchema = yup.object({
  login: yup.string().max(15).min(10).required(),
  password: yup.string().max(16).min(6).required(),
  passwordConfirm: yup.string().max(16).min(6).required(),
  phone: yup.string().max(13).min(11).required(),
});
