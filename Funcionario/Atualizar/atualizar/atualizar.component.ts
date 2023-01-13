import { CrudFuncionarioService } from './../../funcionario/crud-funcionario.service';
import { Funcionario } from './../../funcionario';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  public formulario : FormGroup;
  public idrota: any;
  public valorrecebido: Funcionario;


  constructor(private form: FormBuilder, private rota: ActivatedRoute, private sercrud: CrudFuncionarioService, private rotadir: Router) {

 this.rota.params.subscribe(valor => this.preencherid(valor))
  






  }
  


preencherCampos(objeto){
this.valorrecebido = objeto;
this.formulario = this.form.group({
  id:[this.valorrecebido.id],
  Nome:[this.valorrecebido.Nome],
  Cpf:[this.valorrecebido.Cpf],
  Endereco:[this.valorrecebido.Endereco],
  Fone:[this.valorrecebido.Fone],
  Cargo:[this.valorrecebido.Cargo],
  DataNascimento:[this.valorrecebido.DataNascimento]


})





}



preencherid(objeto){
this.idrota = objeto['id']
this.sercrud.listById(this.idrota).subscribe(valor => this.preencherCampos(valor))



}

update(){
console.log(this.formulario.value)
  this.sercrud.updateFunc(this.formulario.value).subscribe(valor =>  console.log(valor),
  error => this.erroCapturado(error),
  () => console.log(' Com Sucesso'),);

}


erroCapturado(erro){

  alert(`Erro na operação de listar nome ${erro.name} 
    Status ${erro.status} Favor informar a equipe de TI`)
  
   }

  ngOnInit(): void {
    
  }

}
