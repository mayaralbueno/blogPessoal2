import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import {tema} from '../model/tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {


  constructor(private http: HttpClient) { }

 token ={
   headers: new HttpHeaders().set('Authorization',environment.token)
 }
   getAllTema(): Observable<tema[]>{
     return this.http.get<tema[]>('http://localhost:8080/tema')
   }
   getByidTema(id: number): Observable<tema>{
    return this.http.get<tema>(`http://localhost:8080/tema/${id}`)
   }
   postTema(tema: tema):Observable<tema>{
     return this.http.post<tema>('http://localhost:8080/tema/salvar',tema)

   }
   putTema(tema: tema):Observable<tema>{
     return this.http.put<tema>('http://localhost:8080/tema/salvar  ',tema)
   }
   deleteTema(id: number){
    return this.http.delete(`http://localhost:8080/tema/id/${id}`)
   }
}
