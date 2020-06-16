import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(requests: any[], searchValue: any, fieldName): any {
    if(!requests) {
      return [];
    }
    if(!searchValue) {
      return requests;
    }
    searchValue= searchValue.toLowerCase();

    return requests.filter(request =>{
      if(isNaN(searchValue)){
        return request[fieldName].toLowerCase().includes(searchValue);
      }else{
        return request[fieldName].toString().toLowerCase().includes(searchValue);
      }
    });
  }


}
