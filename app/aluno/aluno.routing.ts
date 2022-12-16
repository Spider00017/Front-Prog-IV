import { Routes } from "@angular/router";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoListComponent } from "./aluno-list/aluno-list.component";
import { AlunoComponent } from "./aluno.component";

export const AlunoRoutes: Routes = [
  {
    path: "aluno",
    component: AlunoComponent,
    children: [
      {
        path: "",
        component: AlunoListComponent
      },
      {
        path: "novo",
        component: AlunoFormComponent
      },
      {
        path: "editar/:id",
        component: AlunoFormComponent
      }
    ]
  },
];
