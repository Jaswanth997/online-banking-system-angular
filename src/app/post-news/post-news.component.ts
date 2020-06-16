import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostNewsService } from '../post-news.service';

@Component({
  selector: 'app-post-news',
  templateUrl: './post-news.component.html',
  styleUrls: ['./post-news.component.css']
})
export class PostNewsComponent implements OnInit {
    
 message: string;
 

  constructor(public postNewsService : PostNewsService) { }

  postNews(form: NgForm){
    this.postNewsService.sendNews(form.value).subscribe(response =>{

      console.log(response);
      if (response.error === false){
           this.message= response.message;
      }
      form.reset();
    });
}
  ngOnInit() {
  }

}
