import { Header } from "./components/Header";
import videoSource from "./assets/background.mp4";
import { IntroductionContainer } from "./styles";
import { Introduction } from "./components/Introduction";

export function Home() {
  return (
    <IntroductionContainer>
      <video autoPlay muted loop>
        <source src={videoSource} type="video/mp4" />
      </video>
      <Header />
      <Introduction />
      <div className="blur"></div>
    </IntroductionContainer>
  );
}
