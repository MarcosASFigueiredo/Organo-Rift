import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({ aoPlayerCadastrado, funcoes }) => {


    const [nome, setNome] = useState('')
    const [mains, setMains] = useState('')
    const [imagem, setImagem] = useState('')
    const [funcao, setFuncao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoPlayerCadastrado({
            nome,
            mains,
            imagem,
            funcao
        })
        setNome('')
        setMains('')
        setImagem('')
        setFuncao('')
    }

    return (
        <section className='formulario-container'>
            <form className='formulario' onSubmit={aoSalvar}>
                <h2>
                    Preencha os dados para criar o card do team mate.
                </h2>
                <CampoTexto
                    label='Nome'
                    placeholder='Digite o nome do player'
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label='Mains'
                    placeholder='Digite os mains do player'
                    obrigatorio={true}
                    valor={mains}
                    aoAlterado={valor => setMains(valor)}
                />
                <CampoTexto
                    label='Imagem'
                    placeholder='Informe o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    label='Funções'
                    itens={funcoes}
                    obrigatorio={true}
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario