import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Payment.css";

const BillingForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    zip: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    cardNumber: Yup.string().required("Required"),
    cardName: Yup.string().required("Required"),
    expiry: Yup.string().required("Required"),
    cvv: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    console.log("Submitted:", values);
  };

  return (
    <div className="billing-container horizontal-layout ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="billing-form po1">
          <div className="form-column">
            <h2>Billing Info</h2>

            <div className="form-group">
              <label>Full Name</label>
              <Field type="text" name="fullName" />
              <ErrorMessage name="fullName" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Street Address</label>
              <Field type="text" name="address" />
              <ErrorMessage name="address" component="div" className="error" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <Field type="text" name="city" />
                <ErrorMessage name="city" component="div" className="error" />
              </div>

              <div className="form-group">
                <label>State</label>
                <Field type="text" name="state" />
                <ErrorMessage name="state" component="div" className="error" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>ZIP</label>
                <Field type="text" name="zip" />
                <ErrorMessage name="zip" component="div" className="error" />
              </div>

              <div className="form-group">
                <label>Country</label>
                <Field as="select" name="country">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </Field>
                <ErrorMessage name="country" component="div" className="error" />
              </div>
            </div>
          </div>

          <div className="form-column">
            <h3>Payment Info</h3>

            <div className="form-group">
              <label>Card Number</label>
              <Field type="text" name="cardNumber" />
              <ErrorMessage name="cardNumber" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Name on Card</label>
              <Field type="text" name="cardName" />
              <ErrorMessage name="cardName" component="div" className="error" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expiry</label>
                <Field type="text" name="expiry" placeholder="MM/YY" />
                <ErrorMessage name="expiry" component="div" className="error" />
              </div>

              <div className="form-group">
                <label>CVV</label>
                <Field type="text" name="cvv" />
                <ErrorMessage name="cvv" component="div" className="error" />
              </div>
            </div>

            <button type="submit" className="submit-button">Pay Now</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default BillingForm;
