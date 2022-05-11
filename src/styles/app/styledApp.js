import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 80px;

  transition: 0.3s ease-in;
  transform: ${({ inicio }) => (inicio ? "translate(10vw, 25vh)" : "")};

  @media (max-width: 670px) {
    gap: 30px;
    flex-flow: column nowrap;
    align-items: center;
    jusify-content: center;
  } ;
`;

export const LinkContainer = styled.div`
  display: flex;
  position: ${({ inicio }) => (inicio ? "absolute" : "static")};
  trnsform: ${({ inicio }) => (inicio ? "translate(100vw)" : "static")};
  flex-flow: row nowrap;
  justify-content: space-around;
  gap: 20px;
  transition: 0.5s ease-in;
  opacity: ${({ inicio }) => (inicio ? "0" : "1")};
  @media (max-width: 670px) {
    font-size: 0.8rem;
    gap: 15px;
    flex-flow: column nowrap;
  }
  @media (max-width: 610px) {
    gap: 10px;
  }
  @media (max-width: 586px) {
    flex-flow: column nowrap;
  }
`;
