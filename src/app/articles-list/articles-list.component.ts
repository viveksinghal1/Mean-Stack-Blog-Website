import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  allArticles: Article[] = [];
  errorMsg = "";

  constructor(private _blogPostService: BlogPostService) { }

  ngOnInit() {
    this._blogPostService.getArticles().subscribe(
      items => {
        this.allArticles = items;
      },
      err => this.errorMsg = err.error 
    );
  }

}
