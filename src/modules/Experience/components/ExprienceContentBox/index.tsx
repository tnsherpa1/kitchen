import React from "react";
import { StyledDiv } from "./style";
import Typography from "@/components/Typography";

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
      <Typography as="h5" className="experience-box-title">
        {title}
      </Typography>

      <Typography as="p" className="experience-box-content">
        {content}
      </Typography>
    </StyledDiv>
  );
};

export default ExperienceContentBox;
