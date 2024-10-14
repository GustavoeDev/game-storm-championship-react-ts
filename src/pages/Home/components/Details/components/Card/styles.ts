import styled from "styled-components";

export const CardContainer = styled.div`
  border: 3px solid ${(props) => props.theme["blue-100"]};

  border-radius: 8px;

  max-width: 28.125rem;
  height: 28.125rem;
  width: 100%;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  text-align: center;

  & > img {
    margin-top: -2.5rem;
  }

  div > p {
    text-align: justify;
    padding: 0 1rem;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 1100px) {
    padding: 0 0.7rem 2rem 0.7rem;

    div > p {
      font-size: 90%;
    }
  }

  @media screen and (max-width: 768px) {
    div > p {
      font-size: 80%;
    }

    img {
      width: 85%;
    }
  }
`;
