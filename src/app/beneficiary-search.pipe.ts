import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beneficiarySearch'
})
export class BeneficiarySearchPipe implements PipeTransform {

  transform(beneficiaries: any[], searchValue: any, fieldName): any {
    if(!beneficiaries) {
      return [];
    }
    if(!searchValue) {
      return beneficiaries;
    }
    searchValue= searchValue.toLowerCase();

    return beneficiaries.filter(beneficiary =>{
      if(isNaN(searchValue)){
        return beneficiary[fieldName].toLowerCase().includes(searchValue);
      }else{
        return beneficiary[fieldName].toString().toLowerCase().includes(searchValue);
      }
    });
  }

}
