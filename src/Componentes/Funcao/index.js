import Player from '../Player'
import './Funcao.css'

const Funcao = ({ nome, corPrimaria, corSecundaria, players }) => {


    return (
        players.length > 0 ? (

            <section
                className='funcao'
                style={{ backgroundColor: corSecundaria, backgroundImage: 'url(/imagens/fundo.png)' }}
            >
                <h3
                    style={{ borderColor: corPrimaria }}
                >
                    {nome}
                </h3>
                <div className='players'>
                    {players.map(player => <Player
                        corPrimaria={corPrimaria}
                        nome={player.nome}
                        mains={player.mains}
                        imagem={player.imagem}
                        key={player.nome}
                    />)}
                </div>
            </section>)
            : ''
    )
}

export default Funcao