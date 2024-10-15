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

export function Form() {
  return (
    <FormContainer>
      <FormHeader>
        <h2>
          ENVIAR <span className="colorStyle">INSCRIÇÃO</span>
        </h2>
        <span className="fontStyle">
          Quer participar do Game Storm Championship? Faça sua inscrição pelo
          formulário abaixo:
        </span>
      </FormHeader>

      <form>
        <Inputs>
          <FormInput placeholder="Nome" />
          <FormInput placeholder="E-mail" />
          <FormInput placeholder="Usuário" />
          <FormInput placeholder="Senha" />
        </Inputs>

        <p>Escolha seu jogo:</p>

        <FormSelectGame>
          {games.map((game) => {
            return <GameForm value={game.name} img={game.img} />;
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
