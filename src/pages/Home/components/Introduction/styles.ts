import styled from "styled-components";

export const IntroductionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2.7rem;

  & > img {
    width: 100%;
    max-width: 18.75rem;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1.875rem);
    }
  }

  @media screen and (max-width: 768px) {
    gap: 4rem;
    padding: 0 2.5rem;

    & > img {
      display: none;
    }
  }
`;

export const IntroductionText = styled.div`
  width: 52%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > h1 {
    font-size: 3rem;
  }

  & > span {
    text-align: justify;
  }

  button {
    border: 0;
    background-color: ${(props) => props.theme["purple-100"]};
    color: ${(props) => props.theme["white"]};
    padding: 1rem 5rem;
    border-radius: 16px 0 16px 0;
    cursor: pointer;
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }

  button:hover {
    background-color: ${(props) => props.theme["purple-900"]};
    transform: translateY(-8px);
    transition: ease-in-out 0.5s;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 25rem;
  }
`;
