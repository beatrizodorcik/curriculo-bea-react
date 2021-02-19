import React, { useState } from "react";
import "./App.css";

import Perfil from './components/Perfil'
import Aside from "./components/Aside";
import ExpProfissional from "./components/ExpProfissional";

function App() {

  const fakeAPI =
  {
    nome: 'Beatriz Odorcik',
    ocupacao: 'Developer Full Stack',
    resumo: 'A doida dos post-its, caderninhos e canetas (além do meu amado planner!)',

    perfilProfissional: 'Engenheira Agrônoma pela ESALQ-USP, Graduanda em Gestão da TI pela FATEC Campinas e Análise, MBA em Segurança da Informação pelo Descomplica|Pós. ',
    contatos: [
      {
        id: 1,
        tipo: 'telefone',
        contato: '19 99232-4682'
      },
      {
        id: 2,
        tipo: 'email',
        contato: 'beaodorcik@gmail.com'
      }
    ],
    educacao: [
      {
        id: 1,
        instituicao: 'FATEC Campinas',
        curso: 'Gestão da Tecnologia da Informação'
      },
      {
        id: 2,
        instituicao: 'Universidade de São Paulo',
        curso: 'Engenharia Agronômica'
      }
    ],
    experiencia: [
      {
        id: 1,
        cargo: 'Assistente de Inovação',
        periodo: 'Julho 2019 - Janeiro 2020',
        empresa: 'AnimalsHub',
        local: 'Piracicaba-SP',
        conteudo: 'Suporte em metodologias agéis e às startups residentes e associadas. '
      },
      {
        id: 2,
        cargo: 'Analista Pleno - Química',
        periodo: 'Julho 2013 - Março 2015',
        empresa: 'Biominerais Análises Químicas',
        local: 'Campinas-SP',
        conteudo: 'Análises químicas e físicas de amostras químicas, mineirais e biológicas. '
      }
    ]
  }
  const [response] = useState(fakeAPI);

  return (
    <main>

      <Perfil response={response} />
      <Aside response={response} />
      <ExpProfissional response={response} />

    </main>
  );
}

export default App;