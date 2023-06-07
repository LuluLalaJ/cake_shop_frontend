import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";

function Login() {
  return (
    <div className='container'>
      <section className="login-form">
        Login form
      </section>
      <section className="new-user">
        <p>New User?</p>
        <Link to="/signup"> Sign up here </Link>

      </section>
    </div>
  )
}

export default Login
