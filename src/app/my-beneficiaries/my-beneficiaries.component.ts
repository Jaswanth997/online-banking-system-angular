import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from '../beneficiary.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-beneficiaries',
  templateUrl: './my-beneficiaries.component.html',
  styleUrls: ['./my-beneficiaries.component.css']
})
export class MyBeneficiariesComponent implements OnInit {
  id: number;
  beneficiaries;
  message: string;
  searchBy="beneficiaryId";

  constructor(public beneficiaryService: BeneficiaryService,
    public router: Router) { 
      this.getBeneficiaryPerId();
    }

  ngOnInit() {
  }


  getBeneficiaryPerId(){
    let userData =JSON.parse(localStorage.getItem('userData'));
    let id = userData.data.customerId;
    this.beneficiaryService.getBeneficiary(id).subscribe(response =>{
      console.log(response);
      this.beneficiaries =response;

    });
  }

  deleteBeneficiary(beneficiary){
    this.beneficiaryService.deleteData(beneficiary).subscribe(response => {
      console.log(response);

      if(response.error === false){
        this.getBeneficiaryPerId();
        this.message = response.message;
        setTimeout(() => {
          this.message =null;
        }, 5000);
      }
    });
  }
}
