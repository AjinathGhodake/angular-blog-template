import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogPost } from '../models/blog-post';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class BlogPostsService {
  constructor(private apiService: ApiService) {
    this.GetPosts();
  }
  // INFO: Just added a one instance of the all post so can be delete or add
  allPostsData: BlogPost[] = [];
  public GetPosts(): Observable<BlogPost[]> {
    return this.apiService.Get('assets/json-data/entries.json').pipe(
      map((json) => {
        this.allPostsData = json.map((post: any) => new BlogPost(post));
        return this.allPostsData;
      })
    );
  }

  public GetPost(id: any): Observable<BlogPost> {
    return this.apiService.Get('assets/json-data/entries.json').pipe(
      map((response: any) => {
        const json = this.allPostsData.find((entry: any) => entry._id === id);
        return new BlogPost(json);
      })
    );
  }

  public CreatePost(post: BlogPost): Observable<any> {
    return this.apiService.Post(environment.api.entries, post);
  }

  public deletePost(id: any): Observable<any> {
    this.allPostsData = this.allPostsData.filter(
      (entry: any) => entry._id === id
    );
    return of(this.allPostsData);
  }
}
