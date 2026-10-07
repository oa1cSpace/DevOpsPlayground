import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { parse, isValid, format } from "date-fns";
import { Link } from "react-router-dom";
import { API_URL } from "../api";

// This interface represents the shape of form's data
interface FormValues {
  date: string;
  meal: string;
  measure: string;
  amount: number;
  hunger: number;
}

// And this represents the shape of form's errors
interface FormErrors {
  date?: string;
  meal?: string;
  measure?: string;
  amount?: string;
  hunger?: string;
}

const validate = (values: FormValues) => {
  const errors: FormErrors = {};

  if (!values.meal) {
    errors.meal = "Required";
  }

  if (!values.measure) {
    errors.measure = "Required";
  }

  if (!values.amount) {
    errors.amount = "Required";
  } else if (isNaN(Number(values.amount))) {
    errors.amount = "Must be a number";
  }

  if (values.date) {
    const date = parse(values.date, "yyyy-MM-dd HH:mm", new Date());
    if (!isValid(date)) {
      errors.date = "Invalid date format. Must be YYYY-MM-DD HH:MM";
    }
  }

  if (!values.hunger) {
    errors.hunger = "Required";
  } else if (isNaN(Number(values.hunger))) {
    errors.amount = "Must be a number";
  }

  return errors;
};

export const AddProductForm = () => {
  return (
    <div>
      <div>
        <nav>
          <Link to="/logs">View Logs</Link>
        </nav>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Add meal</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Formik
          initialValues={{ date: "", meal: "", measure: "", amount: 0, hunger: 3 }}
          validate={validate}
          onSubmit={async (values, { resetForm, setSubmitting }) => {
            setSubmitting(true);
            if (!values.date) {
              values.date = format(new Date(), "yyyy-MM-dd HH:mm");
            }
            const response = await fetch(`${API_URL}/meal`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values).toLowerCase(),
            });

            if (!response.ok) {
              console.error("Failed to submit form", await response.text());
            } else {
              console.log("Form submitted successfully");
              resetForm();
            }

            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <div className="form-field">
                <Field
                  className="field"
                  type="text"
                  name="meal"
                  placeholder="oatmeal"
                  required
                />
                <ErrorMessage name="meal" component="div" />
              </div>

              <div className="form-field">
                <Field
                  className="field"
                  type="number"
                  name="amount"
                  placeholder="250"
                  required
                />
                <ErrorMessage name="amount" component="div" />
              </div>

              <div className="form-field">
                <Field className="field" as="select" name="measure" required>
                  <option value="">Select...</option>
                  <option value="ml">ml</option>
                  <option value="g">g</option>
                </Field>
                <ErrorMessage name="measure" component="div" />
              </div>

              <div className="form-field">
                <Field
                  className="field"
                  type="number"
                  name="hunger"
                  placeholder="from 1 to 5"
                  required
                />
                <ErrorMessage name="hunger" component="div" />
              </div>

              <div className="form-field">
                <Field
                  type="text"
                  name="date"
                  placeholder="YYYY-MM-DD HH:MM"
                  className="field"
                />
                <ErrorMessage name="date" component="div" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="submitButton"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
