import { CrudClientesService } from './../../crud-clientes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

private id: number;

  constructor(private rota: ActivatedRoute, private crudcliente: CrudClientesService) { 
this.rota.params.subscribe(valor => console.log(valor))

  }

  ngOnInit(): void {
  }

}
