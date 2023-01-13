import { Observable, repeat, map } from 'rxjs';
import { Usuarios } from './usuarios';
import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { TmplAstRecursiveVisitor } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LogarService {

private url: string = 'http://localhost:3000/Usuarios'
public listausuarios: Array<Usuarios>=[];
//private listausuarios: any;

private teste: Observable<any>;
public resultadoLogar: boolean;
public Admin: boolean;
public NomeUsuario :string;




  constructor(private http: HttpClient) { 

  this.listarUsuario().subscribe(valor => this.listausuarios = valor)


  }

listarUsuario(){
  return this.http.get<Array<Usuarios>>(this.url)

}

autenticar(objeto: any): boolean {
  
    this.NomeUsuario = objeto.nome;
    console.log(objeto)
    
      
      for(let i=0; i < this.listausuarios.length; i++){
        
        
        if(objeto.nome == this.listausuarios[i].Nome && 
        objeto.senha == this.listausuarios[i].Senha ){
        

          if(objeto.nome == 'admin'){
            
            this.Admin = true
            
            

          }

          else{
            this.Admin = false;
          }
        console.log(this.Admin);
          
        //console.log(this.resultadoLogar)
        
        
        this.resultadoLogar = true

      console.log(this.resultadoLogar);    
      return this.resultadoLogar;
        }
      }
        
       
      
     this.resultadoLogar = false;
      return this.resultadoLogar;
    
    
    
        
    }
  }

  
  
  
  
        //{return true;}
       
        //else { continue;}
        //}
            
      //return false;
        

