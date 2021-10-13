import { CardProps } from "../../utils/types";
import { Container } from "./style";

export const Card = ({title, image, onClick, children}: CardProps) => {
  return (
    <Container onClick={onClick}>
      <img
        src={image}
        alt={title}
      />
      <section>
        <h4>{title}</h4>
        {children}
      </section>
    </Container>
  );
};
