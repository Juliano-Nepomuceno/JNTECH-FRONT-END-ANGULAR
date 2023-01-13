import { Agendamento } from './agendamento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudAgendamentoService {


  private url: string = 'http://localhost:3000/Agendamento'
  constructor(private http: HttpClient) { }


  listall(){

    return this.http.get<Agendamento>(this.url)

}


listById(id){

  return this.http.get<Agendamento>(`${this.url}/${id}`)
}

update(id, objeto){

  return this.http.put(`${this.url}/${id}`, objeto)
}

create(objeto){

  return this.http.post(this.url, objeto)
}


delete(id){

  return this.http.delete(`${this.url}/${id}`)
}
}