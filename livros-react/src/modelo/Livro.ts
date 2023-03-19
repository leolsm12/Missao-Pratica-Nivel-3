export class Livro {
    codigo: number;
    codEditora: number;
    editora:string;
    titulo: string;
    resumo: string;
    autores: string[];

    constructor(codigo: number, codEditora: number, editora:string, titulo: string, resumo: string, autores: string[]) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.editora = editora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
      }
}



