import { CrudClientesService } from './../../crud-clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listartudo',
  templateUrl: './listartudo.component.html',
  styleUrls: ['./listartudo.component.css']
})
export class ListartudoComponent implements OnInit {


  
  constructor(private crudcliente: CrudClientesService) { 
this.crudcliente.ListAll()

  }

  ngOnInit(): void {
  }

}
