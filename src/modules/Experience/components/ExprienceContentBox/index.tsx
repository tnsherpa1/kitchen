import React from "react";
import { StyledDiv } from "./style";

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
      <h5 className="experience-box-title">{title}</h5>

      <p className="experience-box-content">{content}</p>
    </StyledDiv>
  );
};

export default ExperienceContentBox;
