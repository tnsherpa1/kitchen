import { Col } from "@/components/Col";
import { Container } from "@/components/Container";
import InputField from "@/components/InputField";
import { Row } from "@/components/Row";
import React from "react";
import { StyledSection } from "./style";
import InputTextArea from "@/components/InputTextArea";
import Icons from "@/components/Icons";

const Contact = () => (
  <StyledSection>
    <Container>
      <Row>
        <Col>
          <div className="contact-wrapper">
            <div className="form-wrapper">
              <h2 className="contact-title">Contact</h2>
              <form className="form-inner-wrapper">
                <div className="col-6">
                  <InputField
                    id="name"
                    name="name"
                    placeholder="sherpa..."
                    label="Name"
                  />
                </div>

                <div className="col-6">
                  <InputField
                    id="email"
                    name="email"
                    placeholder="sherpa@exmaple.com"
                    label="Email"
                  />
                </div>

                <div className="col-12">
                  <InputTextArea
                    id="message"
                    name="message"
                    placeholder="Food is...."
                    label="Message"
                    rows={20}
                    cols={20}
                  />
                </div>
              </form>
            </div>

            <div className="contact-info-warpper">
              <div className="contact-method show-border">
                <Icons icon="/images/icons/email.png" />
                <div className="content-info show-border">
                  <h3>Email</h3>
                  <a href="mail:sherpadaiinsonoma@yahoo.com">
                    sherpadaiinsonoma@yahoo.com
                  </a>
                </div>
              </div>
              <div className="contact-method show-border">
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

export default Contact;
