import { useDispatch, useSelector } from "react-redux";
import authOperations from "redux/auth/auth-operations";

import { Formik } from 'formik';
import * as yup from 'yup';
import { useEffect } from "react";
import { selectAuth } from "redux/selectors";
import { useNavigate } from "react-router-dom";


// styles
import {
  StyledContainer,
  StyledFormContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledErrorMessageContainer,
  StyledButton,
} from "./StyledRegisterForm.js";


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
      nav('/contacts')
    }
  }, [isLoggedIn, nav])

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.register(values))
    resetForm();
  };

  return (
    <StyledContainer>
      <StyledFormContainer>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <StyledForm>
            <div>
              <StyledLabel> Name </StyledLabel>
              <StyledInput type='text' name='name' placeholder="enter name" />
              <StyledErrorMessageContainer name="name" component="div" />
            </div>

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

            <StyledButton type='submit'>Register</StyledButton>
          </StyledForm>
        </Formik>
      </StyledFormContainer>
    </StyledContainer>
  );
};


export default RegisterForm