import React from "react";
import SHEMA from "./../../../utils/REGISTER_SHEMA";
import { Formik, Form, Field, ErrorMessage} from "formik";
import styles from "./RegisterForm.module.scss";
const initialValues = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  password: "",
  passwordConfirm: "",
  isButer: '',
};
const RegisterForm = () => {
  const onSubmit = (values, formikBag) => {
    console.log("values", values);
    console.log("formikBag", formikBag);
    formikBag.resetForm();
  };
  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={SHEMA}
      >
        <Form className={styles.form}>
          <label className={styles.fielWrapper}>
            <Field
              type="text"
              name="firstName"
              placeholder="First name"
              className={styles.input}
            />
            <ErrorMessage
              component="div"
              name="firstName"
              className={styles.errorMesage}
            />
          </label>
          <label className={styles.fielWrapper}>
            <Field
              type="text"
              name="lastName"
              placeholder="Last Name"
              className={styles.input}
            />
            <ErrorMessage
              component="div"
              name="lastName"
              className={styles.errorMesage}
            />
          </label>
          <label className={styles.fielWrapper}>
            <Field
              type="text"
              name="displayName"
              placeholder="Display Name"
              className={styles.input}
            />
            <ErrorMessage
              component="div"
              name="displayName"
              className={styles.errorMesage}
            />
          </label>
          <label className={styles.fielWrapper}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
            />
            <ErrorMessage
              component="div"
              name="email"
              className={styles.errorMesage}
            />
          </label>
          <label className={styles.fielWrapper}>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={styles.input}
            />
            <ErrorMessage
              component="div"
              name="password"
              className={styles.errorMesage}
            />
          </label>
          <label className={styles.fielWrapper}>
            <Field
              type="password"
              name="passwordConfirm"
              placeholder="Confirm Password"
              className={styles.input}
            />
            <ErrorMessage
              component="div"
              name="password"
              className={styles.errorMesage}
            />
          </label>
            <label className={styles.radioInput}>
              <Field
                type="radio"
                name="isButer"
                value="buyer"
                placeholder="Confirm Password"
                className={styles.input}
              />
              <div className={styles.description}>
                <p>Join As a Buyer</p>
                <span>
                  I am looking for a Name, Logo or Tagline for my business,
                  brand or product.
                </span>
              </div>
              <ErrorMessage component="div" name="isButer" className={styles.errorMesage}/>
            </label>
            <label className={styles.radioInput}>
              <Field
                type="radio"
                name="isButer"
                value="notBuyer"
                placeholder="Confirm Password"
                className={styles.input}
              />
              <div className={styles.description}>
                <p>Join As a Creative or Marketplace Seller</p>
                <span>
                  I plan to submit name ideas, Logo designs or sell names in
                  Domain Marketplace
                </span>
              </div>
              <ErrorMessage component="div" name="isButer" className={styles.errorMesage}/>
            </label>
          <input
            type="submit"
            value="Create account"
            className={styles.button}
          />
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;
