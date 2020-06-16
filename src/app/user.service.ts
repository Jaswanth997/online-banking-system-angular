import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Url ='http://localhost:8080/api';

  constructor(public http: HttpClient,
    public router: Router) { }

  registerUser(userDetails){
    return this.http.post<any>(`${this.Url}/register`,userDetails);
  }

  loginUser(userCredentials){
    return this.http.post<any>(`${this.Url}/login`,userCredentials);
  }

  isAdmin(): boolean{
    const userData= JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.data.role === 'ROLE_ADMIN'){
      return true;
    }else{
      return false;
    }
 }

  isUser(): boolean{
     const userData= JSON.parse(localStorage.getItem('userData'));
     if(userData && userData.data.role === 'ROLE_USER'){
       return true;
     }else{
       return false;
     }
  }

  isLogged(): boolean{
    const userData= JSON.parse(localStorage.getItem('userData'));
    if(userData){
      return true;
    }else{
      return false;
    }
 }
 logout(){
   localStorage.clear();
   this.router.navigateByUrl('/login');
 }
}
