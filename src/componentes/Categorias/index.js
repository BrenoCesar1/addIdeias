import Ideias from '../Ideias'
import './Categoria.css'
import caminhoDaImagem from '../../imagens/Logo.png';

const Categoria = (props) => {

    return(

        props.ideias.length > 0 && <section className='categoria' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='cardIdeia'>
             {props.ideias.map( ideia => <Ideias 
                corDeFundo={props.corPrimaria}
                key={ideia.nome}
                nome={ideia.nome} 
                titulo={ideia.titulo} 
                descricao={ideia.ideia} 
                imagem={caminhoDaImagem}/>)}
            </div>
        </section>
    )
}

export default Categoria