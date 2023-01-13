import { Agendamento } from './../../agendamento';
import { CrudAgendamentoService } from './../../crud-agendamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-all-agendamento',
  templateUrl: './list-all-agendamento.component.html',
  styleUrls: ['./list-all-agendamento.component.css']
})
export class ListAllAgendamentoComponent implements OnInit {

public agendamento: Agendamento[]
displayedColumns: string[] = ['id', 'Data', 'Empresa', 'DescricaoAtividade','Endereco','Responsavel','Funcionario','Atualizar','Deletar'];

  constructor(private crudagendamento: CrudAgendamentoService) {

this.crudagendamento.listall().subscribe(
  valor => this.preencherCampos(valor)),
  error => this.erroCapturado(error),
() => console.log(' Com Sucesso')

   }

preencherCampos(objeto){

  this.agendamento = objeto
  console.log(this.agendamento)
}

delet(objeto){

  this.crudagendamento.delete(objeto).subscribe(valor =>  console.log(valor),
  error => this.erroCapturado(error),
  () => {console.log(' Com Sucesso'), alert('Deletado com sucesso')},);
}


erroCapturado(erro){

  alert(`Erro na operação de listar nome ${erro.name} 
    Status ${erro.status} Favor informar a equipe de TI`)
  
   }
  ngOnInit(): void {
  }

}
