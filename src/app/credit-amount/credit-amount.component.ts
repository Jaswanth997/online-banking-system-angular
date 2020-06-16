import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-credit-amount',
  templateUrl: './credit-amount.component.html',
  styleUrls: ['./credit-amount.component.css']
})
export class CreditAmountComponent implements OnInit {

  message: string;
  constructor(public customerService: CustomerService) { }

  ngOnInit() {
  }

  creditAmount(form: NgForm){
    let userData =JSON.parse(localStorage.getItem('userData'));
    let id = userData.data.customerId;
    this.customerService.creditAmount(form.value, id).subscribe(response =>{
      console.log(response);
      if (response.error === false){
           this.message= response.message;
      }
      form.reset();
    });
  
  }

}
