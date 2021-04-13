import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
const API_URL = environment.api.base;
import { HttpClient } from '@angular/common/http';
import { map, catchError ,} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public Get(endpoint: string): Observable<any> {
    return this.http
      .get(endpoint)
      .pipe(
        map((response:any) => {
          return response;
        })
      )
      .pipe(catchError(this.handleError));
  }

  public Post(endpoint: string, data: any): Observable<any> {
    return this.http
      .post(API_URL + endpoint, data)
      .pipe(catchError(this.handleError));
  }

  public Delete(endpoint: string) {
    return this.http
      .delete(API_URL + endpoint)
      .pipe(catchError(this.handleError));
  }

  //handle any error encounted while sending http request
  private handleError(error: Response | any) {
    console.error("ApiService::handleError", error);
    return throwError(error);
  }
}
