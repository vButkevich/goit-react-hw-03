import { useId } from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import css from "./ContactForm.module.css";

import { Formik } from "formik";
import { Form, Field } from "formik";
import { ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = ({ onAdd }) => {
  // const [formData, setFormData] = useState({ name: "", number: "" });
  // const initialValues = { formData };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "min.length - 3")
      .max(50, "max.length - 50")
      .required("is required"),
    number: Yup.string()
      .min(3, "min.length - 3")
      .max(50, "max.length - 50")
      .required("is required"),
  });

  // const handleChange = (e) => {
  //   // console.log("handleChange", values);
  //   // const disableValue = values.name !== "" && values.number !== "";
  //   // SetIsDisabled(disableValue);
  //   const { name, value } = e.target;
  //   setFormData((data) => ({
  //     ...data,
  //     [name]: value,
  //   }));
  // };
  // const isFormValid =
  //   formData.name.trim() === "" || formData.number.trim() === "";

  const onSubmit = (values, { resetForm }) => {
    console.log("onSubmit:", values);
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
          <label htmlFor="name">
            Name:
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>
          {/* <Field type="text" id="name" name="name" /> */}
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            // value={formData.name}
            // onChange={handleChange}
          />
        </div>
        <div className={css["form-element"]}>
          <label htmlFor="number">
            Number:
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </label>
          {/* <Field type="text" id="number" name="number" /> */}
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            // value={formData.number}
            // onChange={handleChange}
          />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
