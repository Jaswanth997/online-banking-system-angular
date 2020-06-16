import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionSearch'
})
export class TransactionSearchPipe implements PipeTransform {

  transform(transactions: any[], searchValue: any, fieldName): any {
    if(!transactions) {
      return [];
    }
    if(!searchValue) {
      return transactions;
    }
    searchValue= searchValue.toLowerCase();

    return transactions.filter(transaction =>{
      if(isNaN(searchValue)){
        return transaction[fieldName].toLowerCase().includes(searchValue);
      }else{
        return transaction[fieldName].toString().toLowerCase().includes(searchValue);
      }
    });
  }
   

}
