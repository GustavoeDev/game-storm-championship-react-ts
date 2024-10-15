import styled from "styled-components";

export const GameFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  @media screen and (max-width: 768px) {
    img {
      width: 6.25rem;
    }
  }
`;
