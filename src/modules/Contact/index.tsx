import { Col } from "@/components/Col";
import { Container } from "@/components/Container";
import InputField from "@/components/InputField";
import { Row } from "@/components/Row";
import React from "react";
import { StyledSection } from "./style";
import InputTextArea from "@/components/InputTextArea";
import Icons from "@/components/Icons";
import Button from "@/components/Button";
import { useFormik } from "formik";
import { ContactFormTypes } from "./contact-form.types";
import { contactSchema } from "./contact.schema";

const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);

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

      console.log("fired");

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
                <h2 className="contact-title">Contact Us</h2>
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
                      placeholder="sherpa..."
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
                      placeholder="sherpa@exmaple.com"
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
                      placeholder="Food is...."
                      label="Message"
                      rows={20}
                      cols={2}
                      onBlur={formik.handleBlur}
                      touched={formik.touched.message}
                      error={!!formik.errors.email}
                      errorMsg={formik.errors.email}
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
                <div className="contact-method">
                  <Icons icon="/images/icons/email.png" />
                  <div className="content-info">
                    <h3>Email</h3>
                    <a href="mail:sherpadaiinsonoma@yahoo.com">
                      sherpadaiinsonoma@yahoo.com
                    </a>
                  </div>
                </div>
                <div className="contact-method">
                  <Icons icon="/images/icons/phone-call.png" />
                  <div className="content-info">
                    <h3>Phone</h3>
                    <a href="tel:1-707-963-4439">(707) 963-4439</a>
                  </div>
                </div>
                <div className="contact-method">
                  <Icons icon="/images/icons/home.png" />
                  <div className="content-info">
                    <h3>Location</h3>
                    <span>
                      1148 Main Street
                      <br />
                      St. Helena, CA 94574
                    </span>
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
