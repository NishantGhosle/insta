import Yup from "./validate";

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  full_name: Yup.string().required(),
  username: Yup.mixed().required().test({
    message: "Geçerli bir kullanıcı adı girin",
  }),
  password: Yup.string().required(),
});
