import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  Url = 'http://localhost:8080/api';
  
  constructor(public http: HttpClient) { }
  
  
   
  postData(beneficiary,id){
    return this.http.post<any>(`${this.Url}/addBeneficiary/${id}`, beneficiary);
  }

  getBeneficiaries(pageNumber,itemsPerPage, sortBy){
    if(!sortBy){
    return this.http.get<{content: any[], totalElements: number}>(`${this.Url}/${pageNumber}/${itemsPerPage}`);
    }else{
    return this.http.get<{content: any[], totalElements: number}>(`${this.Url}/${pageNumber}/${itemsPerPage}/${sortBy}`);
    }
  }

  getBeneficiary(id){
    return this.http.get<any>(`${this.Url}/myBeneficiary/${id}`);     
  }


  deleteData(beneficiary){
    return this.http.delete<any>(`${this.Url}/deleteBeneficiary/${beneficiary.beneficiaryId}`);
  }
}
