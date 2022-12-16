import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoRoutes } from './aluno/aluno.routing';

const routes: Routes = [
  ...AlunoRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
