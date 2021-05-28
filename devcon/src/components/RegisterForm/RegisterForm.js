import React, { useContext, useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { useFormik } from "formik";
import Swal from "sweetalert2";
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
import { ModalContext } from "../../context/ModalContext";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setIsVisible } = useContext(ModalContext);
  const formData = new FormData();
  const formik = useFormik({
    initialValues: {
      name: "",
      institution: "",
      email: "",
      year: "",
      contact: "",
      code: "",
      event: "",
    },
    validationSchema: RegistrationSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
      const { name, institution, email, year, contact, code, event } = values;
      formData.append("name", name);
      formData.append("institution", institution);
      formData.append("email", email);
      formData.append("yos_designation", year);
      formData.append("mobile", contact);
      formData.append("referralCode", code);
      formData.append("event", event);
      setIsLoading(true);
      axios
        .post("https://devcon21.herokuapp.com/participant/form/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setIsVisible(false);
          setIsLoading(false);
          Swal.fire({
            title: "Registration Successful",
            icon: "success",
            background: "#171717",
          });
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setIsVisible(false);

          Swal.fire({
            title: "Registration Failed",
            text: "Please try again",
            icon: "error",
            background: "#171717",
          });
        });
    },
  });
  const { touched } = formik;
  const {
    name,
    institution,
    email,
    year,
    contact,
    code,
    event,
  } = formik.values;

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
          {touched.code && formik.errors.code && (
            <span>{formik.errors.code}</span>
          )}
        </InputWrapper>
        <InputWrapper>
          <StyledInput
            as={"select"}
            id="event"
            value={event}
            onChange={changeHandler}
          >
            <option value="">Select an event</option>
            <option value="Webinar">Webinar</option>
            <option value="Designique">Designique</option>
            <option value="Both">Both</option>
          </StyledInput>
          {touched.event && formik.errors.event && (
            <span>{formik.errors.event}</span>
          )}
        </InputWrapper>
      </Form>
      <SubmitButton onClick={formik.handleSubmit} disabled={isLoading}>
        {!isLoading ? (
          <>
            <span>Register</span>&nbsp; <AiOutlineRight className="icon" />
          </>
        ) : (
          <span>Registering...</span>
        )}
      </SubmitButton>
    </FormWrapper>
  );
};

export default RegisterForm;
