import {
  OffersContainer,
  OffersContent,
  OffersHeader,
  OffersText,
} from "./styles";

export function Offers() {
  return (
    <OffersContainer id="offers">
      <OffersHeader>
        <h2>
          O QUE PODEMOS <span className="colorStyle">OFERECER?</span>
        </h2>
        <span className="fontStyle">
          Organizamos e oferecemos suporte para que você tenha uma ótima
          experiência!
        </span>
      </OffersHeader>
      <OffersContent>
        <OffersText>
          <h2>01</h2>
          <h3>Competição Intensa</h3>
          <p>
            Enfrente os melhores jogadores em uma série de jogos desafiadores e
            prove suas habilidades em um ambiente competitivo de alto nível.
          </p>
        </OffersText>

        <OffersText>
          <h2>02</h2>
          <h3>Premiações Atrativas</h3>
          <p>
            Conquiste prêmios em dinheiro, troféus e outros incentivos para os
            melhores colocados, reconhecendo e recompensando o talento e a
            dedicação.
          </p>
        </OffersText>

        <OffersText>
          <h2>03</h2>
          <h3>Diversidade de Jogos</h3>
          <p>
            Participe de uma ampla gama de jogos, de diferentes gêneros e
            estilos, oferecendo algo para todos os gostos e permitindo que você
            mostre suas habilidades em várias frentes.
          </p>
        </OffersText>

        <OffersText>
          <h2>04</h2>
          <h3>Oportunidades de Networking</h3>
          <p>
            Conecte-se com outros jogadores, desenvolvedores e profissionais da
            indústria, ampliando suas redes e abrindo portas para futuras
            colaborações e oportunidades.
          </p>
        </OffersText>

        <OffersText>
          <h2>05</h2>
          <h3>Experiência Imersiva</h3>
          <p>
            Desfrute de um evento bem organizado, com infraestrutura de
            qualidade, tecnologia de ponta e um ambiente envolvente que realça a
            experiência do jogo.
          </p>
        </OffersText>

        <OffersText>
          <h2>06</h2>
          <h3>Atividades e Entretenimento</h3>
          <p>
            Participe de atrações adicionais, como painéis, workshops, sorteios
            e desafios paralelos, que proporcionam diversão extra além das
            competições principais.
          </p>
        </OffersText>
      </OffersContent>
    </OffersContainer>
  );
}
