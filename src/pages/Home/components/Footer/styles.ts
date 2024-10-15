import styled from "styled-components";

export const ContainerFooter = styled.div`
  background-color: ${(props) => props.theme["purple-100"]};
`;

export const FooterContent = styled.section`
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.25rem 2.5rem;
  color: ${(props) => props.theme["black"]};
  font-weight: 700;

  & > span {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    & > p {
      font-size: 0.9rem;
      text-align: center;
    }

    & > span {
      font-size: 1.1rem;
    }
  }
`;
