import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const Accordion = ({ title, children, className }: Props) => {
  return (
    <div>
      <div>{title}</div>

      <div>{children}</div>
    </div>
  );
};

export default Accordion;
