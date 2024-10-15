import { GameFormContainer } from "./styles";

interface GameFormProps {
  value: string;
  img: string;
}

export function GameForm(props: GameFormProps) {
  return (
    <GameFormContainer>
      <input type="radio" name="opc" id={props.value} value={props.value} />
      <label htmlFor={props.value}>
        <img src={props.img} />
      </label>
    </GameFormContainer>
  );
}
