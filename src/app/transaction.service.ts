import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  url ='http://localhost:8080/api';

  Url= 'http://localhost:8080/api/allTransactions';

  constructor(public http: HttpClient) { }


  getTransactions(pageNumber,itemsPerPage, sortBy){
    if(!sortBy){
    return this.http.get<{content: any[], totalElements: number}>(`${this.Url}/${pageNumber}/${itemsPerPage}`);
    }else{
    return this.http.get<{content: any[], totalElements: number}>(`${this.Url}/${pageNumber}/${itemsPerPage}/${sortBy}`);
    }
  }

  getTransaction(id){
    return this.http.get<any>(`${this.url}/myTransaction/${id}`);
  }

}
