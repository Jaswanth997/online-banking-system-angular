import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerSearch'
})
export class CustomerSearchPipe implements PipeTransform {

  transform(customers: any[], searchValue: any, fieldName): any {
    if(!customers) {
      return [];
    }
    if(!searchValue) {
      return customers;
    }
    searchValue= searchValue.toLowerCase();

    return customers.filter(customer =>{
      if(isNaN(searchValue)){
      return customer[fieldName].toLowerCase().includes(searchValue);
      }else{
        return customer[fieldName].toString().toLowerCase().includes(searchValue);
      }
    });
  }

}
