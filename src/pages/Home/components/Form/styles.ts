import styled from "styled-components";

export const FormContainer = styled.section`
  text-align: center;
  padding-top: 6.25rem;

  form {
    max-width: 53.125rem;
    width: 100%;
    margin: 0 auto;

    & > p {
      text-align: left;
      margin: 1rem 0;
    }
  }
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  margin-bottom: 2.5rem;

  & > h2 {
    font-size: 2rem;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const FormInput = styled.input<{ $hasError: boolean }>`
  width: 100%;
  border: 0;
  padding: 0.75rem;
  background: none;
  border: 1px solid ${(props) => props.theme["purple-100"]};
  color: ${(props) => props.theme["white"]};
  border-radius: 8px;

  animation: ${(props) => (props.$hasError ? "shake 0.5s ease" : "none")};

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
      border: 1px solid ${(props) => props.theme["purple-100"]};
    }
    25%,
    75% {
      transform: translateX(-5px);
      border: 1px solid red;
    }
    50% {
      transform: translateX(5px);
      border: 1px solid red;
    }
  }
`;

export const FormSelectGame = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.875rem;
  flex-wrap: wrap;
`;

export const FormButton = styled.button`
  width: 100%;
  padding: 0.625rem;
  border: none;
  background-color: ${(props) => props.theme["purple-100"]};
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;

  margin-top: 2.5rem;
`;

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.75rem 0;
  gap: 2.5rem;

  flex-wrap: wrap;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
    letter-spacing: 0.125rem;

    @media screen and (max-width: 768px) {
      font-size: 65%;
    }
  }
`;
