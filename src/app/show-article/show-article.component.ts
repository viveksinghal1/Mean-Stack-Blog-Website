import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {

  editorContent: string;

  constructor(private _blogPostService: BlogPostService) { }
  ngOnInit() {
    // let s = this._blogPostService.getContent();
    // this.editorContent = s;
  }

}
