import React from "react";
import { Section,  Container} from "../../globalStyle";

export const Contact = () => {

  const getSizePage = (resize) => {
    if (resize <= "480") {
      return "small";
    } else if (resize > "480" && resize <= "768") {
      return "medium";
    } else if (resize > "768" && resize <= "1024") {
      return "large";
    } else {
      return "x_large";
    }
  };

  console.log(getSizePage(window.innerWidth));

  return (
    <Section smPadding="50px 10px" position="relative" inverse id="Contact">
      <Container></Container>
    </Section>
  );
};
