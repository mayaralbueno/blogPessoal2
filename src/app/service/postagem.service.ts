import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { postagem } from '../model/postagem';
import { usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token ={
    headers: new HttpHeaders().set('Authorization',environment.token)
  }


  getAllPostagem(): Observable<postagem[]>{
    return this.http.get<postagem[]>('http://localhost:8080/postagens', this.token)
  }
  getByIdPostagem(id: number):Observable<postagem>{
    return this.http.get<postagem>(`http://localhost:8080/postagens/${id}`,this.token)
  }
  getByIdCriador(idUsuario: number): Observable<usuario>{
    return this.http.get<usuario>(`http://localhost:8080/usuario/idUsuario/${idUsuario}`)
  }
  postPostagem(postagem: postagem):Observable<postagem>{
    return this.http.post<postagem>('http://localhost:8080/postagens/salvar',postagem,this.token )
  }
  putPostagem(postagem: postagem): Observable<postagem>{
    return this.http.put<postagem>('http://localhost:8080/postagens',postagem,this.token)
  }
  deletePostagem(id: number){
    return this.http.delete(`http://localhost:8080/postagens/${id}`,this.token)
  }
}
