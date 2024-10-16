import {
  AboutEventContainer,
  AboutEventHeader,
  TextHeaderAbout,
  TextHeaderOwner,
} from "./styles";

import imgAbout from "./assets/img-about.png";
import imgOwner from "./assets/img-owner.png";

export function AboutEvent() {
  return (
    <AboutEventContainer id="about">
      <AboutEventHeader>
        <h2>
          SOBRE O <span className="colorStyle">EVENTO</span>
        </h2>
        <span className="fontStyle">
          A GameStorm Championship reúne jogadores de todos os níveis em
          desafios intensos e diversificados, oferecendo prêmios e uma
          experiência imersiva única.
        </span>
      </AboutEventHeader>
      <TextHeaderAbout>
        <img src={imgAbout} />
        <p>
          O GameStorm Championship é o evento de eSports definitivo, reunindo
          jogadores de todos os níveis, no dia 20 de Dezembro, em uma competição
          intensa e diversificada. Com uma variedade de jogos, o campeonato
          desafia os participantes a mostrarem suas habilidades e conquistarem a
          vitória. Mais do que um torneio, é uma celebração da paixão pelos
          games, onde a comunidade se une para viver a adrenalina e o espírito
          de competição. Junte-se a essa tempestade e mostre que você é um
          verdadeiro campeão!
        </p>
      </TextHeaderAbout>

      <h3>SAVE THE DATE: 20 / DEZEMBRO</h3>

      <TextHeaderOwner>
        <img src={imgOwner} />
        <p>
          Minha visão é criar um evento que não seja apenas uma competição, mas
          uma verdadeira celebração da cultura gamer. Cada detalhe foi
          cuidadosamente planejado para garantir uma experiência imersiva e
          memorável para todos os participantes. Nossa equipe se dedica a
          proporcionar um ambiente onde o talento é reconhecido, a diversidade
          de jogos é valorizada, e a comunidade se sente conectada e envolvida.
        </p>
      </TextHeaderOwner>
    </AboutEventContainer>
  );
}
