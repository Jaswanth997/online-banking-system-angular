import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  message: string;
  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
  }

  changePassword(form : NgForm){
    let email = form.value.emailId;
    let password =form.value.password ;


    this.customerService.forgotPassword(form.value,email,password).subscribe(response =>{
      console.log(response);
      if(response.error === false){
        this.message= response.message;
        form.reset();
       this.router.navigateByUrl('/login');
      }
    });

  }

  passwordType = 'password';
  passwordType1 = 'password';
  iconClass= 'fa fa-eye';
  iconClass1= 'fa fa-eye';

showPassword(){
  if(this.passwordType === 'password'){
    this.passwordType = 'text';
    this.iconClass = 'fa fa-eye-slash'  
}else{
  this.passwordType = 'password';
  this.iconClass = 'fa fa-eye'
}
}

showPassword1(){
  if(this.passwordType1 === 'password'){
    this.passwordType1 = 'text';
    this.iconClass1 = 'fa fa-eye-slash'  
}else{
  this.passwordType1 = 'password';
  this.iconClass1 = 'fa fa-eye'
}
}
  
}
