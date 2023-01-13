import { Funcionario } from './../../../Funcionario/funcionario';
import { ActivatedRoute } from '@angular/router';
import { Agendamento } from './../../agendamento';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudAgendamentoService } from './../../crud-agendamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atualizaragendamento',
  templateUrl: './atualizaragendamento.component.html',
  styleUrls: ['./atualizaragendamento.component.css']
})
export class AtualizaragendamentoComponent implements OnInit {
private id: number;
public resultado: Agendamento;
public formulario: FormGroup;

  constructor(private  rota: ActivatedRoute,  private crudagendamento: CrudAgendamentoService, private form: FormBuilder) {

    this.rota.params.subscribe((valor) => {this.id = valor['id'],
    crudagendamento.listById(this.id).
    subscribe((valor) => {this.preencherCampos(valor), 
    
    
      this.formulario = this.form.group({
        Data:[valor.id],
        Empresa:[valor.Empresa],
        DescricaoAtividade:[valor.DescricaoAtividade],
        Endereco:[valor.Empresa],
        Responsavel:[valor.Responsavel],
        Funcionario:[valor.Funcionario],
        
      
      
      
      })
  
  } )
    
    
    
    } )

    

   }


   update(){
console.log(this.formulario.value)
    this.crudagendamento.update(this.resultado.id, this.formulario.value).subscribe(valor =>  console.log(valor),
    error => this.erroCapturado(error),
    () => {console.log(' Com Sucesso'), alert('atualizado com sucesso')},);
    
   }

   erroCapturado(erro){

    alert(`Erro na operação de listar nome ${erro.name} 
      Status ${erro.status} Favor informar a equipe de TI`)
    
     }

preencherCampos(objeto){

  this.resultado = objeto

  console.log(this.resultado)

  
  
}

  ngOnInit(): void {
  }

}
