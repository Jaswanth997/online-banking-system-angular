import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

 
  transactions;

  pageNumber=0;
  itemsPerPage=5;
  totalItems;
  fieldName;
  searchValue;
  searchBy='transactionId';

  constructor(public transactionService: TransactionService) { }
  
  ngOnInit(): void {
    this.transactionService.getTransactions(this.pageNumber, this.itemsPerPage, null).subscribe(data =>{
      console.log(data);
      this.transactions= data.content;
      this.totalItems= data.totalElements
    });
    
  }

  getTransactions(fieldName){
    this.transactionService.getTransactions(this.pageNumber, this.itemsPerPage, fieldName).subscribe(data =>{
      console.log(data);
      this.transactions= data.content;
      this.totalItems= data.totalElements
    })
  }

  getNextPageItems(event){
      console.log(event);
     this.pageNumber= event.pageIndex;
     this.itemsPerPage = event.pageSize;
     this.getTransactions(null);
      
    }
   
    getSortedData(){
       console.log(this.fieldName);
       this.getTransactions(this.fieldName)
    }
}
