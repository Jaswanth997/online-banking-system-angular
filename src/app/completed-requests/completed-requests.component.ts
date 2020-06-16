import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-requests',
  templateUrl: './completed-requests.component.html',
  styleUrls: ['./completed-requests.component.css']
})
export class CompletedRequestsComponent implements OnInit {

  requests;

  message: string;

  pageNumber=0;
  itemsPerPage=5;
  totalItems;
  fieldName;
  searchValue;
  searchBy='status';

  constructor(public requestService: RequestService,
    private router: Router) { 
      this.getCompletedRequest();
    }

    getCompletedRequest(){
      this.requestService.getCompletedRequests(this.pageNumber, this.itemsPerPage, null).subscribe(data =>{
        console.log(data);
        this.requests= data.content;
        this.totalItems= data.totalElements
      });
    }
  ngOnInit() {
  }

  getCompletedAllRequests(fieldName){
    this.requestService.getCompletedRequests(this.pageNumber, this.itemsPerPage, fieldName).subscribe(data =>{
      console.log(data);
      this.requests= data.content;
      this.totalItems= data.totalElements
    });
  }
 
  getNextPageItems(event){
    console.log(event);
   this.pageNumber= event.pageIndex;
   this.itemsPerPage = event.pageSize;
   this.getCompletedAllRequests(null);
    
  }
 
  getSortedData(){
     console.log(this.fieldName);
     this.getCompletedAllRequests(this.fieldName)
  }

}
