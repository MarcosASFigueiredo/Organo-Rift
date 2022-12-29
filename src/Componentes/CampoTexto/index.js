
import './CampoTexto.css'

const CampoTexto = ({ label, placeholder, obrigatorio, valor, aoAlterado }) => {

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>
                {label}
            </label>
            <input
                placeholder={placeholder}
                required={obrigatorio}
                onChange={aoDigitado}
                value={valor}
            />
        </div>
    )
}

export default CampoTexto