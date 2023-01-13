import { Usuarios } from './../../../logar/usuarios';
import { Component, OnInit } from '@angular/core';
import { CrudusuariosService } from '../../crudusuarios.service';

@Component({
  selector: 'app-listartudousuarios',
  templateUrl: './listartudousuarios.component.html',
  styleUrls: ['./listartudousuarios.component.css']
})
export class ListartudousuariosComponent implements OnInit {

public usuarios: Usuarios[];
displayedColumns: string[] = ['id', 'Nome', 'Senha', 'Grupo','Atualizar','Deletar'];
  


  constructor(private crudusuarios: CrudusuariosService) {

    this.crudusuarios.listall().subscribe(
      valor => this.prenchercampos(valor),
    
      error => this.erroCapturado(error),
    () => console.log(' Com Sucesso'),)

  
    }


   erroCapturado(erro){

    alert(`Erro na operação de listar nome ${erro.name} 
      Status ${erro.status} Favor informar a equipe de TI`)
    
     }

prenchercampos(objeto){
this.usuarios = objeto
console.log(this.usuarios)

}

delete(id){

  this.crudusuarios.delete(id).subscribe(

    valor =>  console.log(valor),
  error => this.erroCapturado(error),
  () => console.log(' Com Sucesso'),);
  
}

  ngOnInit(): void {
  }

}
