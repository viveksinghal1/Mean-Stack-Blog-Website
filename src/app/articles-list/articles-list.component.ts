import { Component, OnInit, AfterViewInit, AfterContentChecked, OnChanges } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Article } from '../models/article.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit, AfterViewInit, AfterContentChecked, OnChanges {

  allArticles: Article[] = [];
  errorMsg = "";

  getArticle(slug) {
    this._router.navigate(['/articles', slug]);
  }

  constructor(private _blogPostService: BlogPostService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    // console.log("component initialised");
    this._blogPostService.getArticles().subscribe(
      items => {
        this.allArticles = items;
        // console.log("data received");
      },
      err => this.errorMsg = err.error 
    );
    // this.allArticles = this._route.snapshot.data.allArticles;
  }

  ngAfterContentChecked() {}

  ngAfterViewInit() {  }

  ngOnChanges() {}

}
