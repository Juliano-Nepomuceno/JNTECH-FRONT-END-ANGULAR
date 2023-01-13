import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from '../funcionario';




@Injectable({
  providedIn: 'root'
})
export class CrudFuncionarioService {

  private url:string = "http://localhost:3000/Funcionario";

  constructor(
private http: HttpClient

  ) { 

  }

listAll(){

  return this.http.get<Funcionario>(this.url)
}

listById(id){
console.log(id)
  return this.http.get<Funcionario>(`${this.url}/${id}`)
}

updateFunc(objeto){

  
  console.log(objeto)
  return this.http.put(`${this.url}/${objeto.id}`, objeto)

}

createForm(objeto){
return this.http.post(this.url, objeto)

}


delete(id){
return this.http.delete(`${this.url}/${id}`)
}

}
