import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atm-simulator',
  templateUrl: './atm-simulator.component.html',
  styleUrls: ['./atm-simulator.component.css']
})
export class AtmSimulatorComponent implements OnInit {

  message: string;
  message1: string;

  constructor(private customerService: CustomerService) { }

  postAtmDetails(form: NgForm){
    let userData =JSON.parse(localStorage.getItem('userData'));
    let id = userData.data.customerId;
    this.customerService.postAtm(form.value, id).subscribe(response =>{
      console.log(response);
      if (response.error === false){
           this.message= response.message;
         }
         if (response.error === true){
          this.message1= response.message;
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
