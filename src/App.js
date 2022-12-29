
import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Funcao from './Componentes/Funcao';
import Rodape from './Componentes/Rodape';

function App() {

  const funcoes = [
    {
      nome: 'TOP',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'JUNGLE',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'MID',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'ADC',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'SUP',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [players, setPlayers] = useState([])

  const aoNovoPlayerAdicionado = (player) => {
    setPlayers([...players, player])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        funcoes={funcoes.map(funcao => funcao.nome)}
        aoPlayerCadastrado={player => aoNovoPlayerAdicionado(player)}
      />
      {funcoes.map(funcao =>
        <Funcao
          key={funcao.nome}
          nome={funcao.nome}
          corPrimaria={funcao.corPrimaria}
          corSecundaria={funcao.corSecundaria}
          players={players.filter(player => player.funcao === funcao.nome)}
        />)}

      <Rodape />
    </div>
  );
}

export default App;
