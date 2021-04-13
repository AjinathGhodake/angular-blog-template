import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/blog-post';
import { BlogPostsService } from '../services/blog-posts.service';

@Component({
  selector: 'app-past-post',
  templateUrl: './past-post.component.html',
  styleUrls: ['./past-post.component.scss']
})
export class PastPostComponent implements OnInit {
  loading: boolean = true;
  posts!: BlogPost[];

  constructor(private postService: BlogPostsService) {}

  ngOnInit() {
    this.getPosts();
  }

  private getPosts(): void {
    this.postService.GetPosts().subscribe(posts => {
      this.posts = posts;
      this.loading = false;
    });
  }
}
