import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './../post.service';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
	post;
  constructor(
  	private route: ActivatedRoute,
  	private data: PostService

  	) { }

  ngOnInit() {
  	let id = this.route.snapshot.paramMap.get('id');
  	console.log(this.data.getPost(id));
  	this.post = this.data.getPost(id);
  }

}
