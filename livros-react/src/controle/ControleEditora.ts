import { Editora } from '../modelo/Editora';

export const editoras: Editora[] = [ 
     {    "codEditora": 1,    "nomeEditora": "Alta Books"  }, 
     {    "codEditora": 2,    "nomeEditora": "Pearson"  },  
     {    "codEditora": 3,    "nomeEditora": "Addison Wesley"  },
    
];
export class ControleEditora {
  private editoras: Editora[];

  constructor(editoras: Editora[]) {
    this.editoras = editoras;
  }

  getNomeEditora(cod: number) {
    return this.editoras.filter((editora) => { return editora.codEditora === cod })
  }

  getEditoras() {
    return this.editoras;
  }
}
  

