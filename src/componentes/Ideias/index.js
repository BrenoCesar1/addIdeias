import './Ideias.css'

const Ideias = ({nome, titulo, descricao, imagem, corDeFundo}) => {
    return(
        <div className='ideias'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt=''/>
            </div>
            <div className='rodape'>
                <h1>{nome}</h1>
                <h4>{titulo}</h4>
                <h5>{descricao}</h5>
            </div>
        </div>
    )
}

export default Ideias