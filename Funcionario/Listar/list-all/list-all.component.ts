import { Router } from '@angular/router';
import { CrudFuncionarioService } from './../../funcionario/crud-funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../funcionario';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  public ListAll:any;
  displayedColumns: string[] = ['Id','Nome','Cpf','Endereco','Fone','Cargo','DataNascimento', 'Atualizar', 'Deletar' ];

  constructor(private servicocrud: CrudFuncionarioService, private rota: Router) {

//servicocrud.listAll().subscribe(valor => console.log(valor))
this.servicocrud.listAll().subscribe(valor =>  this.preencherCampos(valor),
error => this.erroCapturado(error),
() => console.log(' Com Sucesso'),);
;

console.log(this.ListAll)


   }


   preencherCampos(objeto){
this.ListAll= objeto
   }

   erroCapturado(erro){

    alert(`Erro na operação de listar nome ${erro.name} 
      Status ${erro.status} Favor informar a equipe de TI`)
    
     }

delete(id){
  this.servicocrud.delete(id.id).subscribe(valor =>  console.log(valor),
  error => this.erroCapturado(error),
  () => console.log(' Com Sucesso'),);

  this.rota.navigateByUrl('funcionario/listall')


}

  ngOnInit(): void {
  }








}



