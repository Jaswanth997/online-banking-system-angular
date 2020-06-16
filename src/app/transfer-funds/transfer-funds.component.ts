import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.css']
})
export class TransferFundsComponent implements OnInit {

  
  message: string;
  constructor(public customerService :CustomerService) { }
  
  
transferFunds(form: NgForm){
  let userData =JSON.parse(localStorage.getItem('userData'));
    let id = userData.data.customerId;
  this.customerService.transferAmount(form.value, id).subscribe(response =>{
    console.log(response);
    if (response.error === false){
         this.message= response.message;
    }
    form.reset();
  });

  
}
 

  ngOnInit() {
  }

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
