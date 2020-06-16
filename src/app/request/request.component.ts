import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  message: string;
  address: boolean;
  mobile: boolean;
  chequeLeaves: boolean;
  defaultValue = "pending";
  selectedOption = "";
  constructor(public requestService: RequestService) {
    this.address = false;
    this.mobile = false;
    this.chequeLeaves = false;
  }


  ngOnInit() {
  }

  selectOption() {
    if (this.selectedOption === "address") {
      this.address = true;
      this.mobile = false;
      this.chequeLeaves = false;
    } else if (this.selectedOption === "mobile") {
      this.address = false;
      this.mobile = true;
      this.chequeLeaves = false;
    } else if (this.selectedOption === "cheques") {
      this.address = false;
      this.mobile = false;
      this.chequeLeaves = true;
    }
  }
  postRequest(form: NgForm) {
    let userData = JSON.parse(localStorage.getItem('userData'));
    let id = userData.data.customerId;
    this.requestService.postData(form.value, id).subscribe(response => {
      console.log(response);
      if (response.error === false) {
        this.message = response.message;

      }
      if (response.error === true) {
        this.message = response.message;
      }
      form.reset();
    });

  }
}
