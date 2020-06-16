import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  url='http://localhost:8080/api/requests';

  Url ='http://localhost:8080/api';

  requestUrl = 'http://localhost:8080/api/completedRequests';


  constructor(public http: HttpClient) { }

  getAllRequests(){
    return this.http.get<any[]>(`${this.url}`);
  }

  getRequestPerId(id){
    return this.http.get<any>(`${this.Url}/myRequest/${id}`);
  }
  postData(request,id){
    return this.http.post<any>(`${this.Url}/send-request/${id}`, request);
  }

  getRequests(pageNumber,itemsPerPage, sortBy){
    if(!sortBy){
    return this.http.get<{content: any[], totalElements: number}>(`${this.url}/${pageNumber}/${itemsPerPage}`);
    }else{
    return this.http.get<{content: any[], totalElements: number}>(`${this.url}/${pageNumber}/${itemsPerPage}/${sortBy}`);
    }
  }

  getCompletedRequests(pageNumber,itemsPerPage, sortBy){
    if(!sortBy){
    return this.http.get<{content: any[], totalElements: number}>(`${this.requestUrl}/${pageNumber}/${itemsPerPage}`);
    }else{
    return this.http.get<{content: any[], totalElements: number}>(`${this.requestUrl}/${pageNumber}/${itemsPerPage}/${sortBy}`);
    }
  }


  updateSuccess(id){
    return this.http.put<any>(`${this.Url}/update-success/${id}`,id);
  }
  updateRejected(id){
    return this.http.put<any>(`${this.Url}/update-rejected/${id}`,id);
  }
  updateInProgress(id){
    return this.http.put<any>(`${this.Url}/update-inprogress/${id}`,id);
  }
}
