import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {

  details;

  searchValue;
  searchBy;

  constructor(public customerService : CustomerService) {
    this.getNews();
   }

   getNews(){
    this.customerService.getAllNews().subscribe(response =>{
      console.log(response);
      this.details= response.data;
     
    });
   }
  ngOnInit() {
    
    
  }

 
}
