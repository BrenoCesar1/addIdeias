import './Formulario.css'
import CampoTexto from '../CampoTexto'
import TextArea from '../TextArea/index';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [titulo, setTitulo] = useState('')
    const [ideia, setIdeia] = useState('')
    const [categoria, setCategoria] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoIdeiaCadastrada({
            nome,
            titulo,
            ideia,
            categoria
        })
        setNome('')
        setTitulo('')
        setIdeia('')
        setCategoria('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para registrar sua ideia!</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu Nome ..."
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="Título"
                    placeholder="Digite o título da sua ideia ..."
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                />
                <TextArea
                    obrigatorio={true}
                    label="Descrição da ideia"
                    placeholder="Descreva a sua ideia ..."
                    valor={ideia}
                    aoAlterado={valor => setIdeia(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Categoria" 
                    itens={props.categorias} 
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                />
                <Botao>
                    Adicionar
                </Botao>
            </form>

        </section>
    )
}

export default Formulario