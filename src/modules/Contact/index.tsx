import { Col, Container, Row, Typography } from "restaurant-ui/components";
import InputField from "@/components/InputField";
import React from "react";
import { StyledSection } from "./style";
import InputTextArea from "@/components/InputTextArea";
import Icons from "@/components/Icons";
import Button from "@/components/Button";
import { useFormik } from "formik";
import { ContactFormTypes } from "./contact-form.types";
import { contactSchema } from "./contact.schema";
import emailIcon from "@/assets/images/icons/email.png";
import phoneIcon from "@/assets/images/icons/phone-call.png";
import homeIcon from "@/assets/images/icons/home.png";
import settings from "content/settings/settings.json";
import { theme } from "@/theme/theme";

const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    email = "sherpadaiinsonoma@yahoo.com",
    phone_number = "(707) 963-4439",
  } = settings || {};

  const formik = useFormik<ContactFormTypes>({
    initialValues: {
      email: "",
      message: "",
      name: "",
    },
    enableReinitialize: true,
    validationSchema: contactSchema,
    validateOnMount: true,
    onSubmit: () => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 1e3);
    },
  });

  return (
    <StyledSection>
      <Container>
        <Row>
          <Col>
            <div className="contact-wrapper">
              <div className="form-wrapper">
                <Typography
                  as="h2"
                  className="section-title contact-title"
                  color={theme.color.white}
                >
                  Contact Us
                </Typography>
                <form
                  className="form-inner-wrapper"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!isLoading) {
                      formik.handleSubmit(e);
                    }
                  }}
                >
                  <div className="col-6">
                    <InputField
                      name="name"
                      placeholder="Your Name"
                      label="Name"
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                      touched={formik.touched.name}
                      error={!!formik.errors.name}
                      errorMsg={formik.errors.name}
                      onChange={formik.handleChange}
                    />
                  </div>

                  <div className="col-6">
                    <InputField
                      name="email"
                      placeholder="Your Email"
                      label="Email"
                      touched={formik.touched.email}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      error={!!formik.errors.email}
                      errorMsg={formik.errors.email}
                      onChange={formik.handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <InputTextArea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      label="Message"
                      rows={20}
                      cols={2}
                      onBlur={formik.handleBlur}
                      touched={formik.touched.message}
                      error={!!formik.errors.message}
                      errorMsg={formik.errors.message}
                      onChange={formik.handleChange}
                      value={formik.values.message}
                    />
                  </div>

                  <Button
                    skin="outline"
                    size="md"
                    disabled={isLoading}
                    loader={isLoading}
                  >
                    SEND MESSAGE
                  </Button>
                </form>
              </div>

              <div className="contact-info-warpper">
                {email && (
                  <div className="contact-method">
                    <Icons icon={emailIcon} />
                    <div className="content-info">
                      <Typography as="h5">Email</Typography>
                      <Typography as="subtitle2">
                        <a href={`mail:${email}`}>{email}</a>
                      </Typography>
                    </div>
                  </div>
                )}
                {phoneIcon && (
                  <div className="contact-method">
                    <Icons icon={phoneIcon} />
                    <div className="content-info">
                      <Typography as="h5">Phone</Typography>
                      <Typography as="subtitle2">
                        {" "}
                        <a href={`tel:${phone_number}`}>{phone_number}</a>
                      </Typography>
                    </div>
                  </div>
                )}
                <div className="contact-method">
                  <Icons icon={homeIcon} />
                  <div className="content-info">
                    <Typography as="h5">Location</Typography>
                    <Typography as="subtitle2">
                      1148 Main Street
                      <br />
                      St. Helena, CA 94574
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Contact;
