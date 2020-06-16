import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from '../beneficiary.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.css']
})
export class BeneficiariesComponent implements OnInit {
 
  message: string;

  constructor(private beneficiaryService: BeneficiaryService) { }


  ngOnInit() {
  }

  postBeneficiary(form: NgForm){
    let userData =JSON.parse(localStorage.getItem('userData'));
    let id = userData.data.customerId;
    this.beneficiaryService.postData(form.value, id).subscribe(response =>{
      console.log(response);
      if (response.error === false){
           this.message = response.message;
      }
      if (response.error === true){
        this.message = response.message;
   }
   form.reset();
    });
    
  }
}
