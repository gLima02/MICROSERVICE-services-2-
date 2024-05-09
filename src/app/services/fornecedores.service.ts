import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Fornecedor } from '../interfaces/fornecedor';

@Injectable({
  providedIn: 'root'
})

export class FornecedoresService {
  private fornecedorUrl = "http://localhost:3000/fornecedores"
  constructor(private http:HttpClient) {

  }

  fornecedores:Fornecedor[] = [];

  listar():Observable<Fornecedor[]>{
    return this.http.get<Fornecedor[]>(this.fornecedorUrl) as Observable<Fornecedor[]>
  }

  getById(id:string){
    return this.http.get(`${this.fornecedorUrl}/${id}`) as Observable<Fornecedor>
  }

  remover(id:string){
    return this.http.delete(`${this.fornecedorUrl}/${id}`)
  }

  httpHeader = {
    headers:{
      "Content-Type":"application/json"
    }
  };

  atualizar(fornecedor:Fornecedor){
    return this.http.put(`${this.fornecedorUrl}/${fornecedor.id}`, fornecedor, this.httpHeader)
  }

  adicionar(fornecedor:Fornecedor){
    return this.http.post(this.fornecedorUrl, fornecedor, this.httpHeader)
  }
}
