import imgCod from "./assets/img/img-cod.png";
import imgValorant from "./assets/img/img-valorant.png";
import imgPubg from "./assets/img/img-pubg.png";
import imgLol from "./assets/img/img-lol.png";
import imgFifa from "./assets/img/img-fifa.png";

import logoCod from "./assets/logo/logo-cod.png";
import logoValorant from "./assets/logo/logo-valorant.png";
import logoPubg from "./assets/logo/logo-pubg.png";
import logoLol from "./assets/logo/logo-lol.png";
import logoFifa from "./assets/logo/logo-fifa.png";

import bgCod from "./assets/bg/background-cod.png";
import bgValorant from "./assets/bg/background-valorant.png";
import bgPubg from "./assets/bg/background-pubg.png";
import bgLol from "./assets/bg/background-lol.png";
import bgFifa from "./assets/bg/background-fifa.png";

export const games = [
  {
    id: 1,
    name: "Call Of Duty",
    img: imgCod,
    logo: logoCod,
    bg: bgCod,
    color: "#fbff00",
    paragraph: [
      {
        title: "Objetivo:",
        content:
          "Dependendo do modo de jogo, o objetivo pode ser eliminar o time adversário ou capturar e manter objetivos.",
      },
      {
        title: "Partidas:",
        content: "Jogos geralmente ocorrem em equipes de 5 a 6 jogadores.",
      },
      {
        title: "Equipamento:",
        content:
          "Todos os jogadores devem usar as armas e equipamentos fornecidos pelo jogo. Modificações são permitidas conforme as regras do evento.",
      },
      {
        title: "Proibição:",
        content:
          "Hacks, cheats e qualquer forma de trapaça são estritamente proibidos.",
      },
      {
        title: "Limite de Tempo:",
        content:
          "As partidas têm um limite de tempo que varia conforme o modo de jogo.",
      },
    ],
  },
  {
    id: 2,
    name: "Valorant",
    img: imgValorant,
    logo: logoValorant,
    bg: bgValorant,
    color: "#e82f45",
    paragraph: [
      {
        title: "Objetivo:",
        content:
          "Em modos como 'Desarmar a Bomba', um time deve plantar uma bomba enquanto o outro tenta impedir.",
      },
      {
        title: "Partidas:",
        content: "As partidas são jogadas em equipes de 5 jogadores.",
      },
      {
        title: "Equipamento:",
        content:
          "Apenas armas e habilidades específicas dos agentes podem ser usadas.",
      },
      {
        title: "Proibição:",
        content: "Hacks, cheats e trapaças são proibidos.",
      },
      {
        title: "Limite de Tempo:",
        content:
          "Cada rodada tem um limite de tempo, e o jogo completo pode ter um número fixo de rodadas.",
      },
    ],
  },
  {
    id: 3,
    name: "Playerunknown's Battlegrounds",
    img: imgPubg,
    logo: logoPubg,
    bg: bgPubg,
    color: "#bd6f00",
    paragraph: [
      {
        title: "Objetivo:",
        content:
          "Ser o último jogador ou equipe sobrevivente em um mapa que encolhe progressivamente.",
      },
      {
        title: "Partidas:",
        content:
          "Jogadores podem competir individualmente, em duplas ou em equipes de 4 jogadores.",
      },
      {
        title: "Equipamento:",
        content:
          "Os jogadores devem coletar armas e equipamentos durante o jogo. Modificações de armas são permitidas.",
      },
      {
        title: "Proibição:",
        content: "Hacks e trapaças são proibidos.",
      },
      {
        title: "Limite de Tempo:",
        content:
          "O jogo continua até que reste apenas um jogador ou equipe, ou até que o tempo de jogo estabelecido termine.",
      },
    ],
  },
  {
    id: 4,
    name: "League of Legends",
    img: imgLol,
    logo: logoLol,
    bg: bgLol,
    color: "#dfcd89",
    paragraph: [
      {
        title: "Objetivo:",
        content:
          "Destruir o Nexus inimigo, que está localizado dentro da base adversária.",
      },
      {
        title: "Partidas:",
        content: "Jogadores competem em equipes de 5 jogadores.",
      },
      {
        title: "Equipamento:",
        content:
          "Apenas campeões e itens permitidos pelo jogo podem ser usados. Modificações não são permitidas.",
      },
      {
        title: "Proibição:",
        content: "Uso de cheats, hacks e comportamento antiético é proibido.",
      },
      {
        title: "Limite de Tempo:",
        content:
          "As partidas não têm um limite de tempo fixo, mas podem durar entre 20 e 60 minutos.",
      },
    ],
  },
  {
    id: 5,
    name: "FC 24",
    img: imgFifa,
    logo: logoFifa,
    bg: bgFifa,
    color: "#72b0d5",
    paragraph: [
      {
        title: "Objetivo:",
        content:
          "Marcar mais gols que o adversário dentro do tempo regulamentar.",
      },
      {
        title: "Partidas:",
        content:
          "Jogos são disputados individualmente, com um jogador controlando cada time.",
      },
      {
        title: "Equipamento:",
        content:
          "Apenas os controles e configurações fornecidos pelo evento são permitidos.",
      },
      {
        title: "Proibição:",
        content: "Cheats e trapaças são estritamente proibidos.",
      },
      {
        title: "Limite de Tempo:",
        content:
          "As partidas têm uma duração padrão de 90 minutos, divididos em dois tempos de 45 minutos cada.",
      },
    ],
  },
];
