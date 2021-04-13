import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../models/blog-post';
import { BlogPostsService } from '../services/blog-posts.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
})
export class ViewPostComponent implements OnInit {
  loading: boolean = true;
  post!: BlogPost;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: BlogPostsService
  ) {}

  ngOnInit(): void {
    this.getPost();
  }
  public deletePost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.deletePost(id).subscribe((res) => {
      console.log('Deleted Post' + id);
      this.router.navigate(['/home']);
    });
  }

  private getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);

    this.postService.GetPost(id).subscribe((post) => {
      console.log('post: ' + JSON.stringify(post));
      this.post = post;
      this.loading = false;
    });
  }
}
