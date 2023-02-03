import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : string;
  password : string;
  cadastrando : boolean;
  mensagemSucesso : string | null;
  errors : string[];

  constructor(
    private router : Router,
    private authService : AuthService
    ){

  }
  onSubmit(){
    this.authService
    .tentarLogar(this.username, this.password)
    .subscribe({
      next: response => {
        const access_token = JSON.stringify(response);
        localStorage.setItem('access_token', access_token)
        this.router.navigate(['/home'])
      }, error: errorResponse =>{
        this.errors = ['Usuário e/ou Senha incorreto(s).']
      }
    })
  }
  preparaCadastrar(event : any){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar() {
    const usuario : Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
    .salvar(usuario)
    .subscribe({
      next: response => {
        this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o Login.";
        this.cadastrando = false;
        this.errors = [];
        this.username = '';
        this.password = '';
      }, error: errorResponse =>{
        this.mensagemSucesso = null;
        this.errors = errorResponse.error.errors;
    }
    })
  }
}
