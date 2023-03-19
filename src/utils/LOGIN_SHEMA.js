import * as Yup from "yup";
const SHEMA = Yup.object({
  email: Yup.string().trim().min(1).max(25).required("Cant be empty"),
  password: Yup.string()
    .min(5, "Min 5 symbols")
    .max(15,"Max 5 symbols")
    .required("Cant be empty"),
});

export default SHEMA