import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests;

  message: string;

  pageNumber=0;
  itemsPerPage=5;
  totalItems;
  fieldName;
  searchValue;
  searchBy='status';


  constructor(
    public requestService: RequestService,
    private router: Router) {
      this.getRequest();
     }

    getRequest(){
      this.requestService.getRequests(this.pageNumber, this.itemsPerPage, null).subscribe(data =>{
        console.log(data);
        this.requests= data.content;
        this.totalItems= data.totalElements
      });
    }

  ngOnInit() {
    
    
  }
 getRequests(fieldName){
    this.requestService.getRequests(this.pageNumber, this.itemsPerPage, fieldName).subscribe(data =>{
      console.log(data);
      this.requests= data.content;
      this.totalItems= data.totalElements
    });
  }
 
  getNextPageItems(event){
    console.log(event);
   this.pageNumber= event.pageIndex;
   this.itemsPerPage = event.pageSize;
   this.getRequests(null);
    
  }
 
  getSortedData(){
     console.log(this.fieldName);
     this.getRequests(this.fieldName)
  }
 
  updateDataSuccess(request){
     this.requestService.updateSuccess(request).subscribe(response =>{
       console.log(response);
       if(response.error === false){
         this.message = response.message;
         this.getRequest();
        setTimeout(()=>{
          this.message = null;
        },5000);
       }
     });

  }

  updateDataRejected(request){
    this.requestService.updateRejected(request).subscribe(response =>{
      console.log(response);
      if(response.error === false){
        this.message = response.message;
        this.getRequest();
       setTimeout(()=>{
         this.message = null;
       },5000);
      }
    });

  }

  updateDataInProgress(request){
    this.requestService.updateInProgress(request).subscribe(response =>{
      console.log(response);
      if(response.error === false){
        this.message = response.message;
        this.getRequest();
       setTimeout(()=>{
         this.message = null;
       },5000);
      }
    });

  }

}
