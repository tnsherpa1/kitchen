import React from "react";
import { StyledDiv } from "./style";
import { Typography } from "restaurant-ui/components";

type Props = {
  title: string;
  content: string;
};
const ExperienceContentBox = ({
  title = "title",
  content = "content",
}: Props) => {
  return (
    <StyledDiv>
      <Typography as="h5" className="experience-box-title" color="#fff">
        {title}
      </Typography>

      <Typography as="p" className="experience-box-content" color="#fff">
        {content}
      </Typography>
    </StyledDiv>
  );
};

export default ExperienceContentBox;
