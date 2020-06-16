import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message : string;

  constructor(private userService :UserService,
    private router : Router) { }

  login(form: NgForm){
    console.log(form.value);
    this.userService.loginUser(form.value).subscribe(response =>{
     console.log(response);
     
     if(response.error === true){
       this.message = response.message;
     
      } else{
        localStorage.setItem('userData',JSON.stringify(response));
        if(response.data.role === 'ROLE_ADMIN'){
         
         
          this.router.navigateByUrl('/welcome-admin');
          
        }else if (response.data.role === 'ROLE_USER'){
         
          this.router.navigateByUrl('/beneficiaries');
          
      
        }
      }
     
    });
  }

  ngOnInit(){}

  passwordType = 'password';
  iconClass= 'fa fa-eye';

  showPassword(){
    if(this.passwordType === 'password'){
      this.passwordType = 'text';
      this.iconClass = 'fa fa-eye-slash'  
  }else{
    this.passwordType = 'password';
    this.iconClass = 'fa fa-eye'
  }
 }
}
