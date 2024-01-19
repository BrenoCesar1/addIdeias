import { useState } from 'react';
import Banner from './componentes/Banners/Banner';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categorias';

function App() {

  const categorias = [
    {
      nome: 'Tecnologia',
      corPrimaria: '#4b5133',
      corSecundaria: '#b4bc94'
    },
    {
      nome: 'Empreendedorismo',
      corPrimaria: '#919c62',
      corSecundaria: '#8cac5c'
    },
    {
      nome: 'Entretenimento',
      corPrimaria: '#c5cbad',
      corSecundaria: '#919c62'
    },
    {
      nome: 'Estilo de Vida',
      corPrimaria: '#8cac5c',
      corSecundaria: '#b4bc94'
    },
    {
      nome: 'Outros',
      corPrimaria: '#8ca85a',
      corSecundaria: '#f7faf9'
    },
  ]

  const [ideias, setIdeias] = useState([])

  const aoNovaIdeiaAdicionada = (ideia) => {
    setIdeias([...ideias, ideia])
  }

  return (
    
    <div className="App">
      <Banner />
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoIdeiaCadastrada={ideia => aoNovaIdeiaAdicionada(ideia)}/>
      
      {categorias.map(categoria => 
        <Categoria 
        key={categoria.nome} 
        nome={categoria.nome} 
        corPrimaria={categoria.corPrimaria}
        corSecundaria={categoria.corSecundaria}
        ideias={ideias.filter(ideia => ideia.categoria === categoria.nome)}
      />)}
    </div>
  );
}

export default App;
