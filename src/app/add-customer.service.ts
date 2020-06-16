import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddCustomerService {

  Url ='http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  postData(customer){
    return this.http.post<any>(`${this.Url}/addCustomer`, customer, {
    });
  }
}
