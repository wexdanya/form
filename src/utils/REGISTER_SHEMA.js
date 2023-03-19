


import * as Yup from "yup";
const SHEMA = Yup.object({
  firstName: Yup.string().trim().min(3,"Min 3 symbols").max(15,"Man 3 symbols").required("Cant be empty"),
  lastName: Yup.string().trim().min(3,"Min 3 symbols").max(15,"Man 3 symbols").required("Cant be empty"),
  displayName: Yup.string().trim().min(3,"Min 3 symbols").max(15,"Man 3 symbols").required("Cant be empty"),
  password: Yup.string()
    .min(5, "Min 5 symbols")
    .max(15, "Max 5 symbols")
    .required("Cant be empty"),
  passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  isButer: Yup.string().oneOf(["notBuyer","buyer"], 'Field must be checked').required("Chose one"),
  email: Yup.string().trim().min(1).max(25).required("Cant be empty"),
});

export default SHEMA;
