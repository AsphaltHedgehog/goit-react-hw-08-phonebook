import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "redux/selectors";
import { useNavigate } from "react-router-dom";

import authOperations from "redux/auth/auth-operations";

import { Formik } from 'formik';
import * as yup from 'yup';


import {
  StyledContainer,
  StyledFormContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledErrorMessageContainer,
  StyledButton,
} from "./StyledLoginForm.js";



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
      nav('/contacts')
    }
  }, [isLoggedIn, nav]);


  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.logIn(values))
    resetForm();
  };




  return (
    <StyledContainer>
      <StyledFormContainer>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <StyledForm>
            <div>
              <StyledLabel> Email </StyledLabel>
              <StyledInput type='email' name="email" placeholder="enter email" />
              <StyledErrorMessageContainer name="email" component="div" />
            </div>
            <div>
              <StyledLabel> Password </StyledLabel>
              <StyledInput type='password' name="password" placeholder="enter password" />
              <StyledErrorMessageContainer name="password" component="div" />
            </div>
            <StyledButton type='submit'> Login </StyledButton>
          </StyledForm>
        </Formik>
      </StyledFormContainer>
    </StyledContainer>
  );
};


export default LogInForm;