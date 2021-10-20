import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { usuarioLogin } from '../model/usuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
   
  usuarioLogin: usuarioLogin = new usuarioLogin()
  constructor( 
    private auth: AuthService,
    private router: Router
  ){}

  ngOnInit()  {
    window.scroll(0,0)
  }
  entrar(){
   this.auth.entrar(this.usuarioLogin).subscribe((resp: usuarioLogin)=>{
     this.usuarioLogin =resp
     environment.token = this.usuarioLogin.token
     environment.usuario = this.usuarioLogin.usuario
     environment.foto = this.usuarioLogin.foto
     environment.id = this.usuarioLogin.id

     console.log(environment.token)

     console.log(environment.usuario)

     console.log(environment.foto)
     
     console.log(environment.id)

    
     this.usuarioLogin.foto
     this.router.navigate(['/inicio'])
   },erro =>{
     if(erro.status == 500){
       alert('Usuario ou senha estão incorretos !')
     }
   })
  }

}
