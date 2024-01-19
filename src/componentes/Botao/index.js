import './Botao.css'

const Botao = (props) => {
    return (<button className='botao'>
        {props.children}
        <div className="arrow-wrapper">
            <div className="arrow"></div>
        </div>
    </button>
    )
}

export default Botao