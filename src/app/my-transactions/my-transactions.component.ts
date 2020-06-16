import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.css']
})
export class MyTransactionsComponent implements OnInit {
  id: number;
  transactions;
  message: string;
  searchBy="transactionId";

  constructor(public transactionService: TransactionService) {
    this.getTransactionPerId();
   }

  ngOnInit() {
  }

  getTransactionPerId(){
    let userData =JSON.parse(localStorage.getItem('userData'));
    let id = userData.data.customerId;
    this.transactionService.getTransaction(id).subscribe(response =>{
      console.log(response);
      this.transactions =response;

    });
  }
}
