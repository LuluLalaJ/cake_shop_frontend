import React, { useContext} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useFormik } from "formik";
import * as yup from "yup";

function Login() {
  const { user, refresh } = useContext(UserContext);

  const formSchema = yup.object().shape({
    username: yup.string().required("Must enter a username").max(20),
    password: yup
      .string()
      .required("Must enter password")
      .max(125),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((res) => {
        if (res.status === 200) {
          refresh();
        }
      });
    },
  });

  if (user) {
    return <Redirect to="/"/>;
  }

  return (
    <div className='container'>
      <section className="login-form">
        <h1>log in</h1>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />

          <input
            id="username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <p> {formik.errors.username}</p>

          <label htmlFor="password">password</label>
          <br />

          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <p> {formik.errors.password}</p>
          <button type="submit" className='btn'>Log in</button>
        </form>
      </section>

      <section className="new-user">
        <p>New User?</p>
        <Link to="/signup"> Sign up here </Link>

      </section>
    </div>
  )
}

export default Login
