import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SHEMA from "./../../../utils/LOGIN_SHEMA";
import styles from "./LoginForm.module.scss";
const initialValues = {
  email: "",
  password: "",
  remember: false,
};
const LoginForm = (props) => {
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
        {(formProps) => {
          return (
            <Form className={styles.form}>
              <label className={styles.fielWrapper}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className={styles.input}
                />
                <ErrorMessage
                  name="email"
                  component="div"
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
                  name="password"
                  component="div"
                  className={styles.errorMesage}
                />
              </label>

              <label className={styles.rememberMe}>
                <Field type="checkbox" name="remember" />
                Remember Me
              </label>
              <input type="submit" value="Login" className={styles.button} />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
