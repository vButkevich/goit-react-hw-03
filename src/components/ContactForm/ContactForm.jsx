import css from "./ContactForm.module.css";

import { useId } from "react";
import { Formik } from "formik";
import { Form, Field } from "formik";
import { ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "min.length - 3")
      .max(50, "max.length - 50")
      .required("fileld [Name] is required"),
    number: Yup.string()
      .min(3, "min.length - 3")
      .max(50, "max.length - 50")
      .required("fileld [Nnumber] is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={css.form}>
        <div className={css["form-element"]}>
          <label htmlFor="name">Name</label>
          {/* <Field type="text" id="name" name="name" /> */}
          <Field type="text" id={nameFieldId} name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div className={css["form-element"]}>
          <label htmlFor="number">Number</label>
          {/* <Field type="text" id="number" name="number" /> */}
          <Field type="text" id={numberFieldId} name="number" />
          <ErrorMessage name="number" component="div" />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
