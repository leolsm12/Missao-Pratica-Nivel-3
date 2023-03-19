import { Livro } from '../modelo/Livro';

export class ControleLivro {
   livros: Livro[] = [ 
    {
        "codigo": 1,
        "codEditora": 100,
        "editora": "Alta Books",
        "titulo": "Use a Cabea: Java",
        "resumo": "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java",
        "autores": ["Bert Bates","Kathy Sierra"]
      },
      {
        "codigo": 2,
        "codEditora": 200,
        "editora": "Pearson",
        "titulo": "Java, como programar",
        "resumo": "Milhões de alunos e profissionais aprenderam, programação e desenvolvimento de software com os livros de deitel",
        "autores": ["Paul Deitel","Harvey Deitel"]
      },
      {
        "codigo": 3,
        "codEditora": 300,
        "editora": "Addison Wesley",
        "titulo": "Core java for the impatient",
        "resumo": "eaders familiar with Horstmann's original, two-volume \"Core java\" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of java Se 9 will learn how these new features impact the language and core libraries",
        "autores": ["Cay Horstmann"]
      }
    ]
   
    obterLivros() {
      return this.livros;
    }
  
    incluir(livro: Livro) {
            const maiorCodigo = this.livros.reduce((maior, livro) => {
            return livro.codigo > maior ? livro.codigo : maior;
          }, 0);
        livro.codigo = maiorCodigo + 1;
        this.livros.push(livro);
    }
  
    excluir(codigo: number): void {
        const index = this.livros.findIndex(livro => livro.codigo === codigo);

        if (index !== -1) {
          this.livros.splice(index, 1);
        }
    }
  }


