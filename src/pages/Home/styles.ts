import styled from "styled-components";

export const IntroductionContainer = styled.div`
  position: relative;

  video {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0.25;
    overflow: hidden;
    z-index: -1;
  }

  .blur {
    width: 100vw;
    height: 6.25rem;
    background-image: linear-gradient(
      to bottom,
      rgb(255, 255, 255, 0),
      ${(props) => props.theme["background"]}
    );
  }
`;
