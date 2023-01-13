import { CrudFuncionarioService } from './../../funcionario/crud-funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletarfuncionario',
  templateUrl: './deletarfuncionario.component.html',
  styleUrls: ['./deletarfuncionario.component.css']
})
export class DeletarfuncionarioComponent implements OnInit {

  constructor(private rotaativa: ActivatedRoute,private crudfuncionario: CrudFuncionarioService, private rota: Router) {

    this.rotaativa.params.subscribe(valor => this.crudfuncionario.delete(valor['id']).
    subscribe(valor => console.log(valor) ,
     error => alert(error),
     () => {alert('deletado com sucesso'), 
     this.rota.navigate(['/funcionario/listall/']).
     then(() => window.location.reload())
     }
    )
     )
    
   }

  ngOnInit(): void {
  }

}
