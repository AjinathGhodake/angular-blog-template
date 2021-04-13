import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-preview-posts',
  templateUrl: './preview-posts.component.html',
  styleUrls: ['./preview-posts.component.scss']
})
export class PreviewPostsComponent implements OnInit {
  @Input()
  post!: BlogPost;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public go(): void {
    this.router.navigateByUrl("/post/" + this.post._id);
  }
}
