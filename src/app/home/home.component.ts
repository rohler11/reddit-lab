import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
// u have to import it

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: any;
  // posts^ ^ is basically the array of api objects under data
  // now, since this is here v v , ucan use any method in the service
  constructor(private service: RedditService) {}
  // then put it here to inject it as a dependency^^^
  ngOnInit(): void {
    this.searchReddit();
  }

  searchReddit() {
    this.service.getData().subscribe((response) => {
      console.log(response);
      this.posts = response.data.children;
    });
  }
}
