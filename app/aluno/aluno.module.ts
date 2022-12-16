import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './aluno.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { RouterModule } from '@angular/router';
import { AlunoRoutes } from './aluno.routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlunoComponent,
    AlunoFormComponent,
    AlunoListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(AlunoRoutes)
  ]
})
export class AlunoModule { }
