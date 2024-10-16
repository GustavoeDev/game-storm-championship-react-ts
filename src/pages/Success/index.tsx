import { ArrowLeft, GameController, MapPinLine, User } from "phosphor-react";
import {
  SuccessContainer,
  SuccessWrapper,
  SuccessHeader,
  SuccessContent,
  SuccessText,
} from "./styles";

import manRegistration from "./assets/man-registration.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormDataContext } from "../../contexts/FormData";

export function Success() {
  const { dataRegistration } = useContext(FormDataContext);

  const navigate = useNavigate();

  function handleChangePage() {
    navigate("/");
  }

  return (
    <SuccessContainer>
      <SuccessHeader>
        <button onClick={handleChangePage}>
          <ArrowLeft size={36} />
        </button>
      </SuccessHeader>
      <SuccessWrapper>
        <h2>Uhu! Inscrição confirmada</h2>
        <span className="fontStyle">
          Agora é só aguardar o dia da tempestade!
        </span>
        <SuccessContent>
          <SuccessText>
            <div>
              <span>
                <User size={20} />
              </span>
              <div>
                <p>
                  Olá, <strong>{dataRegistration?.name}</strong>, seja bem-vindo
                  à tempestade!
                </p>
                <p>
                  Nickname: <strong>{dataRegistration?.user}</strong>
                </p>
              </div>
            </div>

            <div>
              <span>
                <GameController />
              </span>
              <div>
                <p>Jogo selecionado</p>
                <p>
                  <strong>{dataRegistration?.game}</strong>
                </p>
              </div>
            </div>

            <div>
              <span>
                <MapPinLine />
              </span>
              <div>
                <p>Data e Local</p>
                <p>
                  <strong>20/12 no IFRN</strong>
                </p>
              </div>
            </div>
          </SuccessText>

          <img src={manRegistration} alt="" />
        </SuccessContent>
      </SuccessWrapper>
    </SuccessContainer>
  );
}
