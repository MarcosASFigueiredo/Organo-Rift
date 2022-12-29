import './Player.css'

const Player = ({ corPrimaria, nome, mains, imagem }) => {
    return (
        <div className='player'>
            <div
                className='cabecalho'
                style={{ backgroundColor: corPrimaria }}
            >
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>
                    {nome}
                </h4>
                <h5>
                    {mains}
                </h5>
            </div>
        </div>
    )
}

export default Player