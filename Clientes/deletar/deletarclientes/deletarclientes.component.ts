import { CrudClientesService } from './../../crud-clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletarclientes',
  templateUrl: './deletarclientes.component.html',
  styleUrls: ['./deletarclientes.component.css']
})
export class DeletarclientesComponent implements OnInit {

  constructor(private rotaativa: ActivatedRoute, 
    private crudcliente: CrudClientesService,
    private rota: Router
    ) {

this.rotaativa.params.subscribe(
  valor => this.crudcliente.delete(valor['id']).
  subscribe( valor => console.log(valor['id']),
  error => alert(error),
  () => { alert('Deletado com sucesso'), 
  this.rota.navigate(['/clientes/listartudo/']).
  then(() => window.location.reload()) } ))
}


    
    
   

  ngOnInit(): void {
  }


}
