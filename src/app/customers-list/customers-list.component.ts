import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers;

  pageNumber=0;
  itemsPerPage=5;
  totalItems;
  fieldName;
  searchValue;
  searchBy= "accountNumber";
  message : String;

  constructor(
    public customerService : CustomerService,
    private router: Router
    ) { }

  ngOnInit(): void{
   this.customerService.getCustomers(this.pageNumber, this.itemsPerPage, null).subscribe(data =>{
     console.log(data);
     this.customers = data.content;
     this.totalItems=data.totalElements;
   }) 

   }

   getCustomers(fieldName){
    this.customerService.getCustomers(this.pageNumber, this.itemsPerPage, fieldName).subscribe(data =>{
      console.log(data);
      this.customers = data.content;
      this.totalItems=data.totalElements;
    }) 
 
    }
   getNextPageItems(event){
     console.log(event);
     this.pageNumber= event.pageIndex;
     this.itemsPerPage = event.pageSize;
     this.getCustomers(null);

   }

   getSortedData(){
     console.log(this.fieldName);
     this.getCustomers(this.fieldName);
   }
  
   updateCustomer(customer){
       this.router.navigate(['/manage-customer'], {queryParams: customer});
   }
  }
