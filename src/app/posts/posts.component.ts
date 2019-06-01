import { Component, OnInit } from '@angular/core';
import {PostService} from './../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
	posts; // оголошення змінної як масиву обєктів

  constructor(private data: PostService) { }

  ngOnInit() {
  	this.posts = this.data.getAllPost();
  }

}
