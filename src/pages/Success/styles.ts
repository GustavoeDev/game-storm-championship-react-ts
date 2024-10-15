import styled from "styled-components";

export const SuccessContainer = styled.div``;

export const SuccessHeader = styled.div`
  padding: 3.5rem 4rem 2rem 4rem;

  & > button {
    border: 0;
    background: none;
    color: ${(props) => props.theme["white"]};
    cursor: pointer;
  }
`;

export const SuccessWrapper = styled.section`
  & > h2 {
    color: ${(props) => props.theme["blue-900"]};
    font-size: 2rem;
    margin-bottom: 0.25rem;
  }
`;

export const SuccessContent = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    & > img {
      display: none;
    }
  }
`;

export const SuccessText = styled.div`
  padding: 2.5rem;
  max-width: 32.875rem;
  width: 100%;
  border: 1px solid ${(props) => props.theme["blue-900"]};
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 10vw;
      height: 10vw;
      max-width: 2rem;
      max-height: 2rem;
      border-radius: 50%;

      color: ${(props) => props.theme["white"]};

      @media screen and (max-width: 768px) {
        width: 5vw;
        height: 5vw;
      }
    }
  }

  div:nth-child(1) span {
    background-color: ${(props) => props.theme["purple-100"]};
  }

  div:nth-child(2) span {
    background-color: ${(props) => props.theme["blue-900"]};
  }

  div:nth-child(3) span {
    background-color: ${(props) => props.theme["purple-900"]};
  }
`;
