import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  Name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Address is required"),
});
