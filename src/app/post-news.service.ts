import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostNewsService {

  Url ='http://localhost:8080/api';

  constructor(public http: HttpClient) { }

  sendNews(news){
    return this.http.post<any>(`${this.Url}/post-news`,news);
  }
}
