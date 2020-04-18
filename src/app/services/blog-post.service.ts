import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  header = "http://localhost:3000";
  // header = "";

  constructor(private http: HttpClient) { }
  
  postArticle(article) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<any>(this.header+"/articles", article, {headers})
    .pipe(catchError(this.errorHandler));
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.header+"/articles")
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
