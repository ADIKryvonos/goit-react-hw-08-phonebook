import styled from 'styled-components';
import {
  Form as FormWrap,
  Field as Input,
  ErrorMessage as Error,
} from 'formik';

export const Form = styled(FormWrap)`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 400px;
  margin: 0 auto;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Field = styled(Input)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  font-size: 25px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled(Error)``;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`;
