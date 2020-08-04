import * as yup from "yup";

export const CreateUserSchema = yup.object({
  name: yup.string().max(25).min(10).required(),
  email: yup.string().email().required(),
  website: yup.string().min(5).required(),
});
