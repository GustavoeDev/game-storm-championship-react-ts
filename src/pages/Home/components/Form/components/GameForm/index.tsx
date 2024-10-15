import { UseFormRegister } from "react-hook-form";
import { GameFormContainer } from "./styles";
import { RegistrationData } from "../..";

interface GameFormProps {
  value: string;
  img: string;
  register: UseFormRegister<RegistrationData>;
}

export function GameForm({ value, img, register }: GameFormProps) {
  return (
    <GameFormContainer>
      <input
        type="radio"
        id={value}
        value={value}
        {...register("game", { required: true })}
        required
      />
      <label htmlFor={value}>
        <img src={img} />
      </label>
    </GameFormContainer>
  );
}
