import styles from "./Contact.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { setLocalData } from "../../../utils/localStorage";
import { useNavigate } from "react-router-dom";

export function Contact() {
  const navigate = useNavigate();
  return (
    <div className={styles.mainContainer}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        }}
        validationSchema={yup.object({
          firstName: yup
            .string()
            .min(6, "Too short")
            .max(14, "Too long")
            .required("first name is required"),
          lastName: yup
            .string()
            .min(4, "Too short")
            .max(10, "Too long")
            .required("lastName is required"),
          email: yup
            .string()
            .email("please enter valid email")
            .required("Email is required"),
          phone: yup
            .string()
            .min(10, "should be 10 digits")
            .max(10, "not exceeds 10 digits")
            .matches(/^[0-9]+$/, "Must be a number")
            .required("mobile number please"),
        })}
        onSubmit={(values, { resetForm }) => {
        //   setTimeout(() => {
            resetForm();
            console.log(values);
            setLocalData(values);
            localStorage.setItem('isContact',JSON.stringify(true));
            navigate('/')
        //   }, 4000);
        }}
      >
        {/* {({ isSubmitting }) => ( */}
          <Form className={styles.formcontainer}>
            <span className={styles.formHead}>Stay in touch...</span>
            <Field
              type="text"
              placeholder="firstName"
              className={styles.input}
              name="firstName"
            />
            <ErrorMessage
              name="firstName"
              component="Field"
              className={styles.error}
            />
            <Field
              type="text"
              placeholder="lastName"
              className={styles.input}
              name="lastName"
            />
            <ErrorMessage
              name="lastName"
              component="Field"
              className={styles.error}
            />
            <Field type="text" placeholder="phone" name="phone" className={styles.input} />
            <ErrorMessage
              name="phone"
              component="Field"
              className={styles.error}
            />
            <Field type="text" placeholder="email" className={styles.input} name="email"/>
            <ErrorMessage
              name="email"
              component="Field"
              className={styles.error}
            />
            <button type="submit" className={styles.btn}>
              Submit
            </button>
          </Form>
        {/* )} */}
      </Formik>
    </div>
  );
}
