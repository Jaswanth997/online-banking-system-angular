import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-track-your-status',
  templateUrl: './track-your-status.component.html',
  styleUrls: ['./track-your-status.component.css']
})
export class TrackYourStatusComponent implements OnInit {
  
  requests;

  searchBy="requestId";

  constructor(public requestService: RequestService) { 
    this.getRequestsPerId();
  }

  ngOnInit() {
      
  }

  getRequestsPerId(){
    let userData =JSON.parse(localStorage.getItem('userData'));
      let id = userData.data.customerId;
      this.requestService.getRequestPerId(id).subscribe(response =>{
        console.log(response);
        this.requests =response;
  
      });
  }
}
