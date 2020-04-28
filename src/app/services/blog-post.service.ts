import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { catchError, delay } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }
  
  postArticle(article) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<any>(environment.host+"/articless", article, {headers})
    .pipe(catchError(this.errorHandler));
  }

  getArticles(): Observable<any> {
    return this.http.get<any>(environment.host+"/articless")
    .pipe(catchError(this.errorHandler));
  }

  getArticle(slug): Observable<any> {
    return this.http.get<any>(environment.host+"/articless/"+slug)
    .pipe(catchError(this.errorHandler))
  }

  likeArticle(slug) {
    return this.http.post(environment.host + "/articless/"+slug+"/like", {})
    .pipe(catchError(this.errorHandler));
  }

  nonlikeArticle(slug) {
    return this.http.post(environment.host + "/articless/"+slug+"/nonlike", {})
    .pipe(catchError(this.errorHandler));
  }

  dislikeArticle(slug) {
    return this.http.post(environment.host + "/articless/"+slug+"/dislike", {})
    .pipe(catchError(this.errorHandler));
  }

  nondislikeArticle(slug) {
    return this.http.post(environment.host + "/articless/"+slug+"/nondislike", {})
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
