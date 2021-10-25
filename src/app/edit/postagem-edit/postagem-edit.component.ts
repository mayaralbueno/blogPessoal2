import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { postagem } from 'src/app/model/postagem';
import { tema } from 'src/app/model/tema';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: postagem = new postagem()

  tema: tema = new tema()
  listaTemas: tema[]
  idTema: number



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService
  ){ }

  ngOnInit() {

    window.scroll(0,0)

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
  }

  let id = this.route.snapshot.params['id']
  this.findByIdPostagem(id)
  this.findAllTemas()
}
 
  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: postagem)=>{
      this.postagem = resp
    })
  } 
  findByIdTema(){
    this.temaService.getByidTema(this.idTema).subscribe((resp: tema)=>{
      this.tema = resp
    })

  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: tema[])=>{
      this.listaTemas = resp
    })
  }
  atualizar(){
  
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    this.postagemService.putPostagem(this.postagem).subscribe((resp: postagem)=>{
      this.postagem = resp
      alert('postagem atualizada com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }
 }



