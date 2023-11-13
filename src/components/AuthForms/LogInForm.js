import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "redux/selectors";
import { useNavigate } from "react-router-dom";

import authOperations from "redux/auth/auth-operations";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Password must contain at least eight symbols').max(14, 'Password must be less then fourteen symbols').required('Password is required')
});

const LogInForm = () => {
  const nav = useNavigate()
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(selectAuth);
  
  useEffect(() => {
    if (isLoggedIn) {
      nav('/')
    }
  }, [isLoggedIn, nav]);


  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.logIn(values))
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
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
          <button type='submit'> Login </button>
        </Form>
      </Formik>
    </div>
  );
};


export default LogInForm;