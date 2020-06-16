import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'news'
})
export class NewsPipe implements PipeTransform {

  transform(details: any[], searchValue: any, fieldName): any {
    if(!details) {
      return [];
    }
    if(!searchValue) {
      return details;
    }
    searchValue= searchValue.toLowerCase();

    return details.filter(news =>{
      if(isNaN(searchValue)){
      return news[fieldName].toLowerCase().includes(searchValue);
      }else{
        return news[fieldName].toString().toLowerCase().includes(searchValue);
      }
    });
  }
  }


