import * as React from "react";
import { CardProps } from "../../utils/types";
import { Container } from "./style";

export const Card = ({ title, image, onClick, children, id }: CardProps) => {
  return (
    <Container onClick={(e: React.MouseEvent) => onClick(e)} id={id}>
      {/* Então pra todos onClicks que ele receber, eu vou estar mandando o MouseEvent, como pode ver nos types */}
      <img src={image} alt={title} />
      <section>
        <h3>{title}</h3>
        {children}
      </section>
    </Container>
  );
};
