import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudClientesService {
private url: string = 'http://localhost:3000/Clientes'


  constructor(private http: HttpClient) { }

  ListAll(){

    return this.http.get<Cliente>(this.url)
  }

listById(id){

  return this.http.get<Cliente>(`${this.url}/${id}`)
}

create(objeto){

  return this.http.post(this.url, objeto)
}

update(id, objeto){
JSON.stringify(objeto)
  return this.http.put(`${this.url}/${id}`, objeto)
}

delete(objeto){

  return this.http.delete(`${this.url}/${objeto}`)
}
}





