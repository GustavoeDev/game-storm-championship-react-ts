import { IntroductionContainer, IntroductionText } from "./styles";

import manImg from "./assets/man.png";

export function Introduction() {
  return (
    <IntroductionContainer>
      <IntroductionText>
        <h1>
          GAME STORM <br />
          <span className="colorStyle">CHAMPIONSHIP</span>
        </h1>
        <span className="fontStyle">
          Junte-se a nós e faça parte da tempestade. A vitória espera por
          aqueles que ousam enfrentar o desafio! Proporcionando uma experiência
          memorável com os eSports para pessoas de todas as idades –
          funcionários, estudantes, amigos, equipes – não importando idade,
          localização ou nível gamer.
        </span>
        <a href="#registration">
          <button>Inscreva-se</button>
        </a>
      </IntroductionText>
      <img src={manImg} alt="" />
    </IntroductionContainer>
  );
}
