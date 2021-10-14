import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { postagem } from '../model/postagem';
import { tema } from '../model/tema';
import { usuario } from '../model/usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  Postagem: postagem = new postagem ()
  listaPostagens: postagem[]
  tema: tema  = new tema( )
  listaTemas: tema[]
  idTema: number
  usuario: usuario = new usuario()
  idcriador = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService
  ){ }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.getAlltemas()
    this.getAllPostagens()
  }

  getAlltemas(){
    this.temaService.getAllTema().subscribe((resp: tema[])=>{
      this.listaTemas = resp
    })
  }

  findByidTema(){
    this.temaService.getByidTema(this.idTema).subscribe((resp: tema)=>{
      this.tema = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagem().subscribe((resp: postagem[])=>{
     this.listaPostagens = resp
    } )
  }
  findByUsuario(){
    this.authService.getByIdUsuario(this.idcriador).subscribe((resp: usuario)=> {
      this.usuario
    })

  }

  publicar(){
  this.tema.id = this.idTema
  this.Postagem.tema = this.tema
  this.usuario.id = this.idcriador
  this.Postagem.criador = this.usuario

  this.postagemService.postPostagem(this.Postagem).subscribe((resp: postagem)=>{
    this.Postagem = resp
    alert('Postagem realizada com Sucesso!')
    this.Postagem = new postagem()
    this.getAllPostagens()
  })
  }

}
