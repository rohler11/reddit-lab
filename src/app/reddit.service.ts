import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RedditService {
  url: string = 'https://www.reddit.com/r/aww/.json';
  constructor(private http: HttpClient) {}

  getData(): any {
    return this.http.get(this.url);
  }
}
