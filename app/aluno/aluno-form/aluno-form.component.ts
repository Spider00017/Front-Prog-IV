import { AlunoService } from './../shared/aluno.service';
import { Aluno } from './../shared/aluno';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {
  aluno: Aluno = new Aluno();
  constructor(private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //pegar na rota atual o prametro especificado na rota
    if(id){
      this.alunoService.getById(parseInt(id)).subscribe( (aluno) => {
        if(aluno){
          this.aluno = aluno;
        }
      }, erro => {
        alert("Erro ao buscar o item com id:"+id);
      });
    }
  }

  public salvar(aluno: Aluno){
    let acao="Armazenado";

    if(aluno.id){
      acao = "alterado";
    }
    this.alunoService.salvar(aluno).subscribe((aluno) => {
      alert("Item "+acao+" com sucesso, Item:"+aluno.id);
      this.router.navigate(['aluno'])
    }, erro => {
      alert(erro?.error?.message);
      console.log(erro);
    })
  }

}
