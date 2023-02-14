import React from "react";
import { useFormik } from 'formik'
// TODO: import useFormik from formik library

const App = () => {
  // TODO: add a const called formik assigned to useFormik()
  const validate = values => {
    const errors = {}

    if(values.emailField === '') {
      errors.emailField = "field required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
      errors.emailField = "username should be an email"
    }

    if(values.pswField === '') {
      errors.pswField = "field required"
    }
    return errors
  }
  
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: '',
    },
    validate,
  
    onSubmit: values => {
      alert("Login Successful")
  }
  });
  
  return (
    <div>
  <h1>WELCOME.</h1>
  <h2>ENTER YOUR DETAILS. I NEED THEM.</h2>
  <form onSubmit={formik.handleSubmit}>
  
    <label htmlFor="emailField">email:</label><br />
      <input
        type="text"
        name="emailField"
        id="emailField"
        placeholder="email..."
        onChange={formik.handleChange}
        value={formik.values.emailField}
        />
        <br /><br />

      {formik.errors.emailField ? <div>{formik.errors.emailField}</div> : null}<br />
    
    <label htmlFor="pswField">password:</label><br />
      <input 
        type="password"
        name="pswField"
        id="pswField"
        placeholder="password..."
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.pswField}
        />
        <br /><br />
      { formik.errors.pswField ? <div>{formik.errors.pswField}</div> : null }<br />

  
      <button type="submit" id="submitBtn">submit</button>

  </form>


    </div>
  );
}

export default App;
