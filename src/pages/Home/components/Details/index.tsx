import { Desktop, DeviceMobileCamera, GameController } from "phosphor-react";
import {
  DetailsCarousel,
  DetailsContainer,
  DetailsContentText,
  DetailsIcons,
} from "./styles";

import { games } from "../../../../Games/games";
import { Card } from "./components/Card";
import { useState } from "react";

export interface GameProps {
  id: number;
  name: string | undefined;
  img: string | undefined;
  logo: string | undefined;
  bg: string;
  color: string;
  paragraph: {
    title: string;
    content: string;
  }[];
}

export function Details() {
  const [selectedGame, setSelectedGame] = useState<GameProps | null>(null);

  function handleChangeImage(game: GameProps) {
    setSelectedGame(game);
  }

  return (
    <DetailsContainer>
      <DetailsContentText>
        <h1>
          <span className="colorStyle">DETALHES</span> DOS JOGOS
        </h1>
        <span className="fontStyle">
          Seja um game atual ou um jogo tradicional, em qualquer plataforma,
          conectamos jogadores, organizamos as dinâmicas da competição,
          agendamos as partidas e nossa equipe está sempre pronta para atender e
          orientar os participantes.
        </span>
        <DetailsIcons>
          <div>
            <GameController size={32} />
            VIDEOGAME
          </div>
          <div>
            <DeviceMobileCamera size={32} />
            MOBILE
          </div>
          <div>
            <Desktop size={32} />
            PC
          </div>
        </DetailsIcons>
        <DetailsCarousel>
          <div>
            {games.concat(games).map((game) => {
              return (
                <img
                  key={game.id}
                  src={game.img}
                  onClick={() => handleChangeImage(game)}
                />
              );
            })}
          </div>
        </DetailsCarousel>
        <p>clique no jogo para saber mais detalhes</p>
      </DetailsContentText>

      <Card game={selectedGame} />
    </DetailsContainer>
  );
}
