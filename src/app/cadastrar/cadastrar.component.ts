import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from '../model/usuario';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

   user: usuario = new usuario
   confirmarSenha: string
   tipoUsuario: string


  constructor(
    private authService: AuthService,
    private router: Router,
   
  ){ } 

  ngOnInit(): void {
    window.scroll(0,0)

  }

  confirmeSenha(event: any) {
    this.confirmarSenha =event.target.value

  }
  tipoUser(event: any){
    this.tipoUsuario =event.target.value

  }
  cadastrar(){
    this.user.tipo = this.tipoUsuario

    if(this.user.senha  != this.confirmarSenha){
      alert('A senha estão incorretas.')

    }else {
      this.authService.cadastrar(this.user).subscribe((resp: usuario)=>{
        this.user =resp
        this.router.navigate(['/entrar'])
        alert('Usuario cadastrado com sucesso!')
      })

    }

  }


}
