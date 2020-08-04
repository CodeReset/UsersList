import * as yup from "yup";

export const SignInSchema = yup.object({
  login: yup.string().max(15).min(10).required(),
  password: yup.string().max(16).min(6).required(),
});
