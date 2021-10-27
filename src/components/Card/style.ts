import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  box-shadow: 1em 0.5em 1em rgba(168, 168, 168, 0.23);
  background: rgba(250, 250, 250, 1);


  border-radius: 4px;
  border-top-left-radius: .4rem;
  border-top-right-radius: .4rem;

  color: #171616;

  cursor: pointer;

  transition: all ease-in .3s;

  &:hover{
    box-shadow: 0em 0em 1em #d9b9ce;
  }

  img{
    border-radius: inherit;
  }

  section{
    padding: 0.5rem;

    display: flex;
    align-items: center;

    h3{
      color: #393939;
    }
  }
`;
