import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
  cliente: Cliente;
  success: boolean = false;
  errors : String[] | null;
  id : number;

  constructor(private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ){
    this.cliente = new Cliente();
  }

  ngOnInit(): void{
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams =>{
      this.id = urlParams['id'];
      if(this.id){
        this.service
        .getClientesById(this.id)
        .subscribe({
          next: response =>{
            this.cliente = response},
         error: errorResponse => {
           this.cliente = new Cliente()}
      })
      }
    })
  }
  voltarparaListagem(){
    this.router.navigate(['/clientes/lista'])
  }

  onSubmit(){
    if(this.id){
      this.service
      .atualizar(this.cliente)
      .subscribe({
        next: response => {
          this.success = true;
          this.errors = null;
        },
        error: errorResponse => {
          this.errors = ['Erro ao atualizar o cliente.']
        }
      })
    }
    else{
      this.service
      .salvar(this.cliente)
      .subscribe({next:response =>{
      this.success = true;
      this.errors = null;
      this.cliente = response;
      },error: errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
    });
    }
  }

}
