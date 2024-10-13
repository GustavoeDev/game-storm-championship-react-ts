import styled from "styled-components";

export const AboutEventContainer = styled.section`
  text-align: center;
  padding-top: 3.125rem;

  & > h3 {
    color: ${(props) => props.theme["blue-900"]};
    font-size: 1.5rem;
    margin: 3.125rem 0;
  }
`;

export const AboutEventHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  margin-bottom: 4.375rem;

  & > h2 {
    font-size: 2rem;
  }
`;

const TextHeaderBase = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 6.25rem;

  @media screen and (max-width: 768px) {
    & > img {
      max-width: 13.75rem;
      width: 100%;
    }

    & > p {
      font-size: 87.5%;
    }
  }
`;

export const TextHeaderAbout = styled(TextHeaderBase)`
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 3.125rem;
  }
`;

export const TextHeaderOwner = styled(TextHeaderBase)`
  flex-direction: row-reverse;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 3.125rem;
  }
`;
