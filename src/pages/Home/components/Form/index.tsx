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
import { useContext, useState } from "react";
import { FormDataContext } from "../../../../contexts/FormData";

const newFormEventValidationSchema = zod.object({
  name: zod.string().min(2).max(50),
  email: zod.string().email("O e-mail fornecido é inválido"),
  user: zod.string().min(2).max(20),
  password: zod
    .string()
    .min(5, "A senha deve ter no mínimo 8 caracteres")
    .max(20, "A senha deve ter no máximo 20 caracteres"),
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
  const [errorAnimation, setErrorAnimation] = useState(false);

  const { createRegistrationData } = useContext(FormDataContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>({
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

  function handleError() {
    setErrorAnimation(true);
    setTimeout(() => setErrorAnimation(false), 500);
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

      <form onSubmit={handleSubmit(handleRegistrationEvent, handleError)}>
        <Inputs>
          <FormInput
            placeholder="Nome"
            {...register("name")}
            $hasError={errorAnimation && !!errors.name}
            required
          />
          <FormInput
            placeholder="E-mail"
            {...register("email")}
            $hasError={errorAnimation && !!errors.email}
            required
          />
          <FormInput
            placeholder="Usuário"
            {...register("user")}
            $hasError={errorAnimation && !!errors.user}
            required
          />
          <FormInput
            type="password"
            placeholder="Senha"
            {...register("password")}
            $hasError={errorAnimation && !!errors.password}
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
