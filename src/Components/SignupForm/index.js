import React from 'react';
import {Formik} from 'formik';
import {Button} from '@material-ui/core';
import axios from 'axios';
const handleClick = () => {
  axios.get('http://localhost:3000/users')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log('clicked');
  });
}

const handleSubmit = (values) => {
  console.log(values);
  const {email, password} = values;
  axios.post('http://localhost:3000/users', {
    email: email,
    password: password
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
const SignupForm = () => (
  <>
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(JSON.stringify(values, null, 2));

        axios.post('http://localhost:3000/users', {
          email: (values.email),
          password: (values.password)
        })
        .then(function (response) {
          alert(JSON.stringify(values, null, 2));
          console.log(response);
        })
        .catch(function (error) {
          alert(error)
        });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>

  <Button variant="contained" onClick={handleClick}>Clickola</Button>
  </>

);

export default SignupForm;