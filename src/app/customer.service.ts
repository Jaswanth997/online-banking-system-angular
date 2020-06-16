import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  updateUrl ='http://localhost:8080/api/updateCustomer';

  backendUrl ='http://localhost:8080/api/customer';
  
  url='http://localhost:8080/api';

  Url ='http://localhost:8080/api/get-news';
  
 constructor(public http: HttpClient) { }

  getAllCustomers(){
     return this.http.get<any>('http://localhost:8080/api/customer');
  }

  getCustomers(pageNumber, itemsPerPage, sortBy){
    if(!sortBy) {
      return this.http.get<{content :any[], totalElements: number}>(`${this.backendUrl}/${pageNumber}/${itemsPerPage}`);
    }else{
      return this.http.get<{content :any[], totalElements: number}>(`${this.backendUrl}/${pageNumber}/${itemsPerPage}/${sortBy}`);
    }
  }

  updateData(customer){
    return this.http.put<any>(`${this.updateUrl}`,customer);
  }
 
  postAtm(atm,id){
    return this.http.post<any>(`${this.url}/atm/${id}`,atm);
  }

  transferAmount(amount,id){
    return this.http.post<any>(`${this.url}/transfer/${id}`,amount);
  }

  creditAmount(amount,id){
    return this.http.post<any>(`${this.url}/credit/${id}`,amount);
  }
  

  getCustomerById(customer){
    return this.http.post<any>(`${this.url}/customer/${customer.customerId}`,customer);
  }
  
  getTransaction(transaction,id){
    return this.http.post<any>(`${this.url}/myTransaction/${id}`,transaction);
  }

  getProfile(id){
   return this.http.get<any>(`${this.url}/customer/${id}`)
  }

  getAllNews(){
    return this.http.get<any>(`${this.Url}`);
}

forgotPassword(forgot , emailId,password){
  return this.http.put<any>(`${this.url}/forgotPassword/${emailId}/${password}`,forgot);

}

}
