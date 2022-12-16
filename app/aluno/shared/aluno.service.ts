import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  urlBackend: string = "http://localhost:8080"

  constructor(private http: HttpClient) {
  }

  public getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.urlBackend+"/api/v1/aluno/");
  }
  public salvar(aluno: Aluno): Observable<Aluno>{
    if(!aluno.id){
      return this.http.post<Aluno>(this.urlBackend+"/api/v1/aluno/",aluno);
    }else{
      return this.http.post<Aluno>(this.urlBackend+"/api/v1/aluno/"+aluno.id, aluno);
    }

  }

  public getById(id: number): Observable<Aluno>{
    return this.http.get<Aluno>(this.urlBackend+"/api/v1/aluno/"+id);
  }

  public remover(id: number): Observable<Aluno>{
    return this.http.delete<Aluno>(this.urlBackend+"/api/v1/aluno/"+id);
  }
}
