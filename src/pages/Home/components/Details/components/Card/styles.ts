import styled from "styled-components";

export const CardContainer = styled.div`
  border: 3px solid ${(props) => props.theme["blue-100"]};
  width: 100%;
  border-radius: 8px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  text-align: center;

  & > img {
    margin-top: -2.5rem;
  }

  & > p {
    text-align: justify;
    padding: 0 1rem;
    margin-top: 0.5rem;
  }
`;
