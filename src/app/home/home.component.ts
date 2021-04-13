import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from '../models/blog-post';
import { BlogPostsService } from '../services/blog-posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  posts: BlogPost[]=[];

  constructor(private postService: BlogPostsService, private router: Router) {}

  ngOnInit():void {
    this.getPosts();
  }

  private getPosts(): void {
    this.postService.GetPosts().subscribe((posts:any) => {
      this.posts = posts;
      this.loading = false;
    });
  }

}
