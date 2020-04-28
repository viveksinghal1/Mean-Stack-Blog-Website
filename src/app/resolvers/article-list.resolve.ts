import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";  
import { Observable } from "rxjs";
import { Article } from '../models/article.model';
import { BlogPostService } from '../services/blog-post.service';

@Injectable({
    providedIn: 'root'
})

export class ArticleListResolve implements Resolve<Article[]> {

    constructor(private _blogPostService: BlogPostService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Article[]> {
        return this._blogPostService.getArticles();
    }

}