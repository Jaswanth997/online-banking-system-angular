import { Component, OnInit } from '@angular/core';
import { AddCustomerService } from '../add-customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  
  message: string;

  constructor(public addCustomerService: AddCustomerService) { }

  ngOnInit() {
  }

  addCustomer(form: NgForm){
    this.addCustomerService.postData(form.value).subscribe(response =>{

      console.log(response);
      if (response.error === false){
           this.message= response.message;
      }
      if (response.error === true){
        this.message= response.message;
   }
      form.reset();
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
