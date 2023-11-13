import { useDispatch, useSelector } from "react-redux";
import authOperations from "redux/auth/auth-operations";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useEffect } from "react";
import { selectAuth } from "redux/selectors";
import { useNavigate } from "react-router-dom";


const validationSchema = yup.object().shape({
  name: yup.string().min(3, 'Name must be at least three characters long').max(10, 'Name must be less then ten characters').required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Password must contain at least eight symbols').max(14, 'Password must be less then fourteen symbols').required('Password is required')
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const nav = useNavigate()

  const { isLoggedIn } = useSelector(selectAuth)
  
  useEffect(() => {
    if (isLoggedIn) {
      nav('/')
    }
  }, [isLoggedIn, nav])

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.register(values))
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label> Name </label>
            <Field type='text' name='name' placeholder="enter name" />
            <ErrorMessage name="name" component="div" />
          </div>
          
          <div>
            <label> Email </label>
            <Field type='email' name="email" placeholder="enter email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label> Password </label>
            <Field type='password' name="password" placeholder="enter password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type='submit'> Add Contact </button>
        </Form>
      </Formik>
    </div>
  )
};


export default RegisterForm