import styled from "styled-components";

export const DetailsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 6.25rem;

  padding-top: 9.375rem;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DetailsContentText = styled.div`
  max-width: 31.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: justify;

  & > h1 {
    font-size: 3rem;
    text-align: left;
    margin-bottom: 0.625rem;
  }

  & > p {
    font-size: 0.8rem;
    color: ${(props) => props.theme["purple-100"]};
  }
`;

export const DetailsIcons = styled.div`
  margin: 1.875rem 0;
  width: 100%;

  display: flex;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.313rem;
    margin-right: 1rem;

    font-size: 1.6rem;
    font-weight: bold;
    font-family: "Redwing", sans-serif;
  }

  @media screen and (max-width: 768px) {
    & > div {
      font-size: 1.2rem;
    }
  }
`;

export const DetailsCarousel = styled.div`
  margin-bottom: 0.938rem;
  white-space: nowrap;
  overflow: hidden;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    width: max-content;

    animation: 10s slide infinite linear;
    cursor: pointer;

    &:hover {
      animation-play-state: paused;
    }
  }

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  img {
    border-radius: 8px;
    cursor: pointer;
  }
`;
