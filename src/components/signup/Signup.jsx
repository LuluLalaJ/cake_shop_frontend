import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useFormik } from "formik";
import * as yup from "yup";


function Signup() {
  const { user, setUser} = useContext(UserContext);
  const [refreshPage, setRefreshPage] = useState(false);

  useEffect(() => {
    fetch("/check_session")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [refreshPage]);

  const formSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Must enter email"),
    username: yup.string().required("Must enter a username").max(20),
    password: yup
      .string()
      .required("Must enter password")
      .max(125),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((res) => {
        if (res.status == 201) {
          setRefreshPage(!refreshPage);
        }
      });
    },
  });

  if (user) {
    return <Redirect to="/"/>;
  }

  return (
    <div className='container'>
      <h1>sign up</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <p> {formik.errors.email}</p>
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
        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  );
}

export default Signup
