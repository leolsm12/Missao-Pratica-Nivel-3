
import { useState, useEffect, useMemo } from 'react';
import {ControleEditora} from './controle/ControleEditora'
import {ControleLivro} from './controle/ControleLivros'

function LinhaLivro(props) {
  const { livro, excluir } = props;
  const nomeEditora = ControleEditora.getNomeEditora(livro.codEditora);
  console.log(nomeEditora)
  
  return (
    <tr>
      <td><h1>djfgskhjfbdks</h1>
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}



function LivroLista() {
    const controleLivro = useMemo(() => new ControleLivro(), []);
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);
  
    useEffect(() => {
        async function obterLivros() {
          const listaLivros = await controleLivro.obterLivros();
          setLivros(listaLivros);
          setCarregado(true);
        }
    
        obterLivros();
      }, [carregado, controleLivro]);

    const excluir = async (codLivro) => {
        controleLivro.excluir(codLivro);
        setCarregado(false);
    
      };

      return (
        <main>
          <h1>Catálogo de Livros</h1>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Título</th>
                <th>Resumo</th>
                <th>Editora</th>
                <th>Autores</th>
              </tr>
            </thead>
            <tbody><h1>jkalsdlahjksd</h1>
              {livros.map((livro) => (
              <LinhaLivro
              key={livro.codigo}
              livro={livro}
              excluir={() => excluir(livro.codigo)}
              />
              ))}
            </tbody>
          </table>
        </main>
      );

  
    
  
}
  
export default LivroLista;


