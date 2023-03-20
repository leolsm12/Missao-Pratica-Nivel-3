import { Livro } from "../modelo/Livro";

export class ControleLivro {
  private livros: Livro[] = [
      {
        "codigo": 1,
        "codEditora": 100,
        "titulo": "Use a Cabea: Java",
        "resumo": "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java",
        "autores": ["Bert Bates","Kathy Sierra"]
      },
      {
        "codigo": 2,
        "codEditora": 200,
        "titulo": "Java, como programar",
        "resumo": "Milhões de alunos e profissionais aprenderam, programação e desenvolvimento de software com os livros de deitel",
        "autores": ["Paul Deitel","Harvey Deitel"]
      },
      {
        "codigo": 3,
        "codEditora": 300,
        "titulo": "Core java for the impatient",
        "resumo": "eaders familiar with Horstmann's original, two-volume \"Core java\" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of java Se 9 will learn how these new features impact the language and core libraries",
        "autores": ["Cay Horstmann"]
      }
    ];


obterLivros() {
  return this.livros;
}

incluir(livroRecebido: Livro) {
  const codigoMaisAlto = this.livros.reduce((codAtual, livroAtual) => {
    return codAtual > livroAtual.codigo ? codAtual : livroAtual.codigo;
  }, 0);
  livroRecebido.codigo = codigoMaisAlto + 1;
  this.livros.push(livroRecebido);
}

excluir(codLivro: number) {
  const index = this.livros.findIndex((livro) => livro.codigo === codLivro);
  if (index !== -1) {
    this.livros.splice(index, 1);
  }
}
}
 