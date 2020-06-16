import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent implements OnInit {

  customerToUpdate;
   
  message: string;
  
  defaultValue = 'ROLE_USER';

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router
    ) { 
    this.route.queryParams.subscribe(data =>{
         this.customerToUpdate =data;
         console.log(this.customerToUpdate);
    });
  }

  updateCustomer(form: NgForm){
    this.customerService.updateData(form.value).subscribe(response =>{
      console.log(response);
      this.router.navigateByUrl('/customer/customers-list');
    });
  }
  
 
  ngOnInit() {
  }

}
