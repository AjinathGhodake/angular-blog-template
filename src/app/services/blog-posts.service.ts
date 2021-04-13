import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post';
import { ApiService } from './api.service';
import { environment } from "../../environments/environment";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {
  constructor(private apiService: ApiService) {}

  public GetPosts(): Observable<BlogPost[]> {
    return this.apiService.Get('assets/json-data/entries.json').pipe(
      map(json => {
        return json.map((post:any) => new BlogPost(post));
      })
    );
  }

  public GetPost(id: string): Observable<BlogPost> {
    return this.apiService.Get(environment.api.entries + "/" + id).pipe(
      map(json => {
        return new BlogPost(json);
      })
    );
  }

  public CreatePost(post: BlogPost): Observable<any> {
    return this.apiService.Post(environment.api.entries, post);
  }

  public deletePost(id:string) {
    return this.apiService.Delete(environment.api.entries + "/" + id);
  }
}
