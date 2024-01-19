import './TextArea.css'

const TextArea = (props) => {
    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="text-area">
            <label>{props.label}</label>
            <textarea value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextArea