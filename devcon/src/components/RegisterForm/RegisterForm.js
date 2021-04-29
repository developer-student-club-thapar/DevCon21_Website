import React from "react";
import { useFormik } from "formik";
import { AiOutlineRight } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import {
  Form,
  FormWrapper,
  InputWrapper,
  StyledInput,
  SubmitButton,
  TitleRow,
} from "./RegisterForm.styles";
import { RegistrationSchema } from "../../utils/RegistrationSchema";

const RegisterForm = ({ setIsVisible }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      institution: "",
      email: "",
      year: "",
      contact: "",
      code: "",
    },
    validationSchema: RegistrationSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
      setIsVisible(false);
    },
  });
  const { touched } = formik;
  const { name, institution, email, year, contact, code } = formik.values;

  const changeHandler = (e) => {
    formik.handleChange(e);
    formik.setFieldTouched(e.target.id, true, false);
  };

  return (
    <FormWrapper>
      <TitleRow>
        <h1 className="heading">Register</h1>
        <IoMdClose
          onClick={() => {
            setIsVisible(false);
            formik.resetForm();
          }}
        />
      </TitleRow>
      <Form>
        <InputWrapper>
          <StyledInput
            type="text"
            placeholder="Name"
            id="name"
            value={name}
            onChange={changeHandler}
          />
          {touched.name && formik.errors.name && (
            <span>{formik.errors.name}</span>
          )}
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            type="text"
            placeholder="Institution"
            id="institution"
            value={institution}
            onChange={changeHandler}
          />
          {touched.institution && formik.errors.institution && (
            <span>{formik.errors.institution}</span>
          )}
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            type="text"
            placeholder="Email id"
            id="email"
            value={email}
            onChange={changeHandler}
          />
          {touched.email && formik.errors.email && (
            <span>{formik.errors.email}</span>
          )}
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            type="text"
            placeholder="Year of Study / Designation"
            id="year"
            value={year}
            onChange={changeHandler}
          />
          {touched.year && formik.errors.year && (
            <span>{formik.errors.year}</span>
          )}
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            type="text"
            placeholder="Contact Details"
            id="contact"
            value={contact}
            onChange={changeHandler}
          />
          {touched.contact && formik.errors.contact && (
            <span>{formik.errors.contact}</span>
          )}
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            type="text"
            placeholder="Referral Code(if any)"
            id="code"
            value={code}
            onChange={changeHandler}
          />
          {touched.contact && formik.errors.code && (
            <span>{formik.errors.code}</span>
          )}
        </InputWrapper>
      </Form>
      <SubmitButton onClick={formik.handleSubmit}>
        <span>Register</span>&nbsp; <AiOutlineRight className="icon" />
      </SubmitButton>
    </FormWrapper>
  );
};

export default RegisterForm;
