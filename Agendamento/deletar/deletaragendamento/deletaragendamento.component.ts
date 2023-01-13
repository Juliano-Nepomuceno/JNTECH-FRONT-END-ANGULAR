import { AgendamentoComponent } from './../../agendamento/agendamento.component';
import { ListAllAgendamentoComponent } from './../../listar/list-all-agendamento/list-all-agendamento.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudAgendamentoService } from './../../crud-agendamento.service';
import { Agendamento } from './../../agendamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletaragendamento',
  templateUrl: './deletaragendamento.component.html',
  styleUrls: ['./deletaragendamento.component.css']
})
export class DeletaragendamentoComponent implements OnInit {

  constructor(private crudagendamento: CrudAgendamentoService, private rotaativa: ActivatedRoute, private rota: Router) {

this.rotaativa.params.subscribe(valor => this.delet(valor['id']))

   }



  delet(objeto){

    this.crudagendamento.delete(objeto).subscribe(valor =>  console.log(valor),
    error => this.erroCapturado(error),
    () => {console.log(' Com Sucesso'), alert('Deletado com sucesso'), this.rota.navigate(['/agendamento/listall']).then(() => window.location.reload() )});
    

  }

  erroCapturado(erro){

    alert(`Erro na operação de listar nome ${erro.name} 
      Status ${erro.status} Favor informar a equipe de TI`)
    
     }



  ngOnInit(): void {
  }

}
