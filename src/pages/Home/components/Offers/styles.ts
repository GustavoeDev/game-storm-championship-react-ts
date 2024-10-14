import styled from "styled-components";

export const OffersContainer = styled.section`
  padding-top: 9.375rem;

  text-align: center;
`;

export const OffersHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  & > h2 {
    font-size: 2rem;
  }
`;

export const OffersContent = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 1.875rem;
  flex-wrap: wrap;
`;

export const OffersText = styled.div`
  position: relative;
  z-index: 1;
  max-width: 20rem;
  width: 100%;
  margin: 1.25rem 0;
  padding: 1.25rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme["purple-900"]},
      ${(props) => props.theme["purple-100"]}
    );
    filter: blur(4px);
    z-index: -1;
  }

  & > h2 {
    margin: -3.125rem 0 1.25rem 0;
    font-size: 3rem;
    color: ${(props) => props.theme["blue-900"]};
    text-shadow: 0px 0px 13px ${(props) => props.theme["black"]};
  }

  & > h3 {
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;
