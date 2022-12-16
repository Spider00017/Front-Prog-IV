import { Aluno } from './../shared/aluno';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../shared/aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    console.log("antes");

    this.alunoService.getAlunos().subscribe((alunos:Aluno[]) => {
      console.log("Aluno",alunos);
      this.alunos = alunos;
    });


    console.log("depois");
  }

  confirmaRemocao(aluno: Aluno){
    let mensagem = "Deseja remover o Item: "+aluno.primeiroNome+" "+aluno.sobreNome + ", Item: "+aluno.id+"?";
    if(confirm(mensagem)){
      this.alunoService.remover(aluno.id).subscribe( (aluno)=>{
        let alunoIdx = this.alunos.findIndex( (value) => value.id == aluno.id);
        this.alunos.splice(alunoIdx, 1);
        alert("Item removido com sucesso!!!");
      }, erro => {
        alert("Erro ao excluir Item. Mensagem: "+erro?.error?.message);
      });
    }
  }

}
