import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "tailwindcss/tailwind.css";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").min(2, "Name is too short"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must be only digits")
      .min(10, "Phone number is too short")
      .max(15, "Phone number is too long"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message is too short"),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (values) => {
    console.log("Form data:", values);
    // Handle form submission here, e.g., sending data to an API
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, touched, errors, submitCount }) => (
        <Form className="space-y-4 py-2 flex flex-col">
          <div className="flex justify-between gap-8">
            <div className=" w-full">
              <Field
                name="name"
                type="text"
                placeholder="Name"
                className="w-full p-4 border bg-transparent border-gray-700 rounded focus:border-orange-500 text-white"
              />
              <ErrorMessage name="name">
                {(msg) =>
                  submitCount > 0 ? (
                    <div className="text-red-500 text-sm">{msg}</div>
                  ) : null
                }
              </ErrorMessage>
            </div>

            <div className=" w-full">
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-4 border bg-transparent border-gray-700 rounded  focus:border-orange-500 text-white"
              />
              <ErrorMessage name="email">
                {(msg) =>
                  submitCount > 0 ? (
                    <div className="text-red-500 text-sm ">{msg}</div>
                  ) : null
                }
              </ErrorMessage>
            </div>
          </div>

          <div className="flex justify-between gap-8">
            <div className=" w-full">
              <Field
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="w-full border bg-transparent border-gray-700 rounded focus:border-orange-500 text-white p-4"
              />
              <ErrorMessage name="phone">
                {(msg) =>
                  submitCount > 0 ? (
                    <div className="text-red-500 text-sm">{msg}</div>
                  ) : null
                }
              </ErrorMessage>
            </div>

            <div className=" w-full">
              <Field
                name="subject"
                as="select"
                className="w-full p-4 border bg-transparent border-gray-700 rounded focus:border-orange-500 text-white"
              >
                <option value="" label="Select subject" />
                <option value="general" label="General Inquiry" />
                <option value="support" label="Support" />
                <option value="feedback" label="Feedback" />
              </Field>
              <ErrorMessage name="subject">
                {(msg) =>
                  submitCount > 0 ? (
                    <div className="text-red-500 text-sm">{msg}</div>
                  ) : null
                }
              </ErrorMessage>
            </div>
          </div>

          <div>
            <Field
              name="message"
              as="textarea"
              placeholder="Message"
              className="w-full p-4 border h-40 bg-transparent border-gray-700 rounded focus:border-orange-500 text-white"
            />
            <ErrorMessage name="message">
              {(msg) =>
                submitCount > 0 ? (
                  <div className="text-red-500 text-sm">{msg}</div>
                ) : null
              }
            </ErrorMessage>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-6 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
