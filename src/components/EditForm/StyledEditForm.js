import styled from 'styled-components';
import { Form, Field, ErrorMessage } from "formik";



export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  font-weight: 500;
  text-align: left;

  padding: 10px;
`;

export const StyledInput = styled(Field)`
  width: 90%;
  padding: 10px;
  padding-left: 25px;
  border: none;
  background-color: azure;
  outline: none;

  margin-bottom: 5px;
`;

export const StyledErrorMessageContainer = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
`;

export const StyledButton = styled.button`
  max-width: 120px;
  padding: 10px 25px;
  border: none;
  border-radius: 4px;
  background-color: rgb(103, 216, 216);
  outline: none;
  transition: transform 250ms ease-in-out;
  
  align-self: end;
  
  
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.2);
    background-color: rgb(86, 243, 230);
  }
`;