import { Editora } from '../modelo/Editora';

export class ControleEditora {
   editoras: Editora[] = [ 
     {    "codEditora": 100,    "nome": "Alta Books"  }, 
     {    "codEditora": 200,    "nome": "Pearson"  },  
     {    "codEditora": 300,    "nome": "Addison Wesley"  }
];

  
    getNomeEditora(codEditora:number) {
        return this.editoras.filter((editora) => {
        return editora.codEditora === codEditora;
      });
      }
  
    getEditoras() {
      return this.editoras;
    }
  }

