import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { GameForm } from "./components/GameForm";
import {
  Contact,
  FormButton,
  FormContainer,
  FormHeader,
  FormInput,
  FormSelectGame,
  Inputs,
} from "./styles";

import { games } from "../../../../Games/games";
import { Envelope, InstagramLogo, WhatsappLogo } from "phosphor-react";
import { useContext } from "react";
import { FormDataContext } from "../../../../contexts/FormData";

const newFormEventValidationSchema = zod.object({
  name: zod.string().min(2).max(50),
  email: zod.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  user: zod.string().min(2).max(20),
  password: zod.string().min(2).max(40),
  game: zod.string(),
});

export interface RegistrationData {
  name: string;
  email: string;
  user: string;
  password: string;
  game: string;
}

export function Form() {
  const { createRegistrationData } = useContext(FormDataContext);

  const { register, handleSubmit } = useForm<RegistrationData>({
    resolver: zodResolver(newFormEventValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      user: "",
      password: "",
      game: "",
    },
  });

  function handleRegistrationEvent(data: RegistrationData) {
    createRegistrationData(data);
  }

  return (
    <FormContainer id="registration">
      <FormHeader>
        <h2>
          ENVIAR <span className="colorStyle">INSCRIÇÃO</span>
        </h2>
        <span className="fontStyle">
          Quer participar do Game Storm Championship? Faça sua inscrição pelo
          formulário abaixo:
        </span>
      </FormHeader>

      <form onSubmit={handleSubmit(handleRegistrationEvent)}>
        <Inputs>
          <FormInput
            placeholder="Gustavo Emanuel"
            {...register("name")}
            required
          />
          <FormInput
            placeholder="exemplo@game.com"
            {...register("email")}
            required
          />
          <FormInput placeholder="gustavox8_" {...register("user")} required />
          <FormInput
            type="password"
            placeholder="insira sua senha"
            {...register("password")}
            required
          />
        </Inputs>

        <p>Escolha seu jogo:</p>

        <FormSelectGame>
          {games.map((game) => {
            return (
              <GameForm
                key={game.name}
                value={game.name}
                img={game.img}
                register={register}
              />
            );
          })}
        </FormSelectGame>

        <FormButton type="submit">Enviar</FormButton>
      </form>

      <Contact>
        <div>
          <WhatsappLogo size={44} />
          <h3>Whatsapp</h3>
          <p>(84) 98155-7099</p>
        </div>
        <div>
          <InstagramLogo size={44} />
          <h3>Instagram</h3>
          <p>@gustavox8_</p>
        </div>
        <div>
          <Envelope size={44} />
          <h3>E-mail</h3>
          <p>gustavoe.dev@gmail.com</p>
        </div>
      </Contact>
    </FormContainer>
  );
}
