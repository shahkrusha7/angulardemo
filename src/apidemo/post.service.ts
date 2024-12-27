import { Injectable } from '@angular/core';
import {Post} from './post';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService
{
  postlist:Array<Post> = [];
  constructor(public httpClient:HttpClient  ) { }

  getPostApi()
  {
    this.httpClient.get<Array<Post>>("https://jsonplaceholder.typicode.com/albums").subscribe(posts => this.postlist = posts);
  }


}


