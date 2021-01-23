import React from 'react';

function Perfil(props) {

  const { nome, ocupacao, resumo, perfilProfissional } = props.response

  return (
    <>
      <div className="perfil">
        <img src="https://media-exp1.licdn.com/dms/image/C4E22AQEv6TZSh8bgdw/feedshare-shrink_1280-alternative/0/1611317531767?e=1614211200&v=beta&t=h6-BMQWXADyW8__VUUDzdrre4_xByczGo6ghCHT8KxM" alt="Perfil" />
      </div>

      <div className="biografia">
        <h1>
          {nome}
        </h1>
        <div className="ocupacao">{ocupacao}</div>
        <p>{resumo}</p>
      </div>

      <div className="titulo">
        Perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p>
          {perfilProfissional}
        </p>
      </div>
    </>
  )
}
export default Perfil;