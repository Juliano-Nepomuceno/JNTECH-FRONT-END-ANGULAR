import { Usuarios } from './../logar/usuarios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudusuariosService {

private url: string ='http://localhost:3000/Usuarios'

  constructor(private http: HttpClient  ) { }

listall(){

  return this.http.get<Usuarios>(this.url)
}


listById(id){

  return this.http.get<Usuarios>(`${this.url}/${id}`)
}

update(id, objeto){

  return this.http.put(`${this.url}/${id}`, objeto)
}

criar(objeto){

  return this.http.post(this.url, objeto)
}

delete(id){

  return this.http.delete(`${this.url}/${id}`)
}

}
