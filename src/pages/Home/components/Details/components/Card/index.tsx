import { CardContainer } from "./styles";

import { GameProps } from "../..";

import imgDefault from "../../../../../../Games/assets/bg-default.png";

interface CardProps {
  game: GameProps | null;
}

export function Card({ game }: CardProps) {
  if (!game) {
    return (
      <CardContainer
        style={{ backgroundImage: `url(${imgDefault})` }}
      ></CardContainer>
    );
  }

  return (
    <CardContainer
      style={{
        backgroundImage: `url(${game.bg})`,
        borderColor: `${game.color}`,
      }}
    >
      <img src={game.logo} />
      <div>
        {game.paragraph.map((item, index) => (
          <p key={index}>
            <span style={{ color: `${game.color}` }}>{item.title}</span>{" "}
            {item.content}
          </p>
        ))}
      </div>
    </CardContainer>
  );
}
