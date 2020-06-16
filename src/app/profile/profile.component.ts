import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  message: String;
  users ;
  id:number;

  constructor(public customerService: CustomerService,
    public router: Router) {
      this.getProfilePerId();
     }

  ngOnInit() {
  }

  getProfilePerId(){
    let userData = JSON.parse(localStorage.getItem('userData'));
    let id = userData.data.customerId;
    this.customerService.getProfile(id).subscribe(response => {

      console.log(response);
      this.users = response.data;

    
  });
  }

  }

