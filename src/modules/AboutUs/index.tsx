import React from "react";
import { StyledSection } from "./style";
import { Container } from "@/components/Container";
import { Row } from "@/components/Row";
import { Col } from "@/components/Col";
import ShowCaseList from "./components/ShowCaseList";
import { AboutUsBlogType } from "@/pages/about-us/types/about-us-type";

type Props = {
  data: Array<AboutUsBlogType>;
};
const AboutUs = ({ data }: Props) => {
  return (
    <StyledSection>
      <div className="about-us-wrapper">
        <Container>
          <Row>
            <Col>
              <h1 className="about-us-title">Our Story</h1>

              <div className="story-content">
                <p>
                  In the late nineties, owners Kam Chhiring moved to California
                  and found a home in the heart of Sonoma Valley. In 1997 Kam
                  opened his first restaurant which he named Himalayan Sherpa
                  Cuisine in Glen Ellen.
                </p>

                <p>
                  Food is at the heart of the human experience. Everyone eats,
                  and the experience should be an enjoyable one. With this in
                  mind, Himalayan Sherpa Kitchen was born. There was no promise
                  of success as most of St. Helena’s restaurants fall under
                  French and Italian influence. A Nepalese place would be out of
                  the norm but the quaint location excited the pair and on May
                  29, 2012, Himalayan Sherpa Kitchen opened its doors to the
                  public, and it has been a fantastic adventure ever since.
                </p>

                <p>
                  Himalayan Sherpa has become a staple in the St. Helena
                  community. Whether it’s a place to catch up with old friends,
                  have a casual dinner out with the family or to grab a quick
                  lunch before work. Locals refer to the chicken tikka masala as
                  a drug they have no hopes of quitting. They feel blessed to be
                  able to be a part of such a wonderful community.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <ShowCaseList data={data} />
    </StyledSection>
  );
};

export default AboutUs;
