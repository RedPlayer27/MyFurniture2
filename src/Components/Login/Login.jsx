import React, { useState } from 'react';
import './Payment.css'; // reuse your CSS palette and form styles
import { Formik } from 'formik';
import * as yup from 'yup';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const loginSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const registerSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm your password'),
  });

  const initialLoginValues = { username: '', password: '' };
  const initialRegisterValues = { username: '', email: '', password: '', confirmPassword: '' };

  const handleLogin = (values) => {
    console.log('Logging in:', values);
    // Implement actual login logic here
  };

  const handleRegister = (values) => {
    console.log('Registering:', values);
    // Implement actual registration logic here
  };

  return (
    <div className="tomd">
      <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Create Account'}</h2>

      <Formik
        validationSchema={isLogin ? loginSchema : registerSchema}
        onSubmit={isLogin ? handleLogin : handleRegister}
        initialValues={isLogin ? initialLoginValues : initialRegisterValues}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label htmlFor="username">Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
            </Form.Group>

            {!isLogin && (
              <Form.Group className="mb-3" controlId="email">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="password">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>

            {!isLogin && (
              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  isInvalid={!!errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
              </Form.Group>
            )}

            <Button type="submit" className="w-100">
              {isLogin ? 'Login' : 'Create Account'}
            </Button>

            <div className="text-center mt-3">
              <span>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <Button
                  variant="link"
                  onClick={() => setIsLogin(!isLogin)}
                  style={{ padding: 0, color: 'rgb(255, 112, 4)' }}
                >
                  {isLogin ? 'Create one' : 'Login'}
                </Button>
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AuthForm;
