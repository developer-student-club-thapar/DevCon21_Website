import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name should atleast be 3 characters!")
    .max(50, "Name cannot be greater than 50 characters!")
    .required("Required"),
  institution: Yup.string()
    .min(3, "Institution should atleast be 3 characters!")
    .max(50, "Institution cannot be greater than 50 characters!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  year: Yup.string()
    .min(3, "Year should atleast be 3 characters!")
    .max(50, "Year cannot be greater than 50 characters!")
    .required("Required"),
  contact: Yup.string()
    .min(10, "Please enter a valid contact no")
    .required("Required"),
  code: Yup.string(),
});
