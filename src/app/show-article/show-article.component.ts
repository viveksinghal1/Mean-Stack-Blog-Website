import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Article } from '../models/article.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {

  @ViewChild('viewsSheet', {static: false}) viewsSheet: ElementRef;
  @ViewChild('likesSheet', {static: false}) likesSheet: ElementRef;
  @ViewChild('dislikesSheet', {static: false}) dislikesSheet: ElementRef;

  article: Article;
  isAuthor: boolean;
  isLiked: boolean = false;
  isDisliked: boolean = false;
  slug: string;
  link: string;
  // views: User[] = [];
  
  like() {
    this.isLiked = true;
    this.isDisliked = false;
    this._blogPostService.likeArticle(this.slug).subscribe(
      res => console.log(res),
      err => {
        if (err.status!==200) {
          console.log(err);
          this._router.navigate(['/articles']);
        }
      }
    )
  }

  nonlike() {
    this.isLiked = false;
    this._blogPostService.nonlikeArticle(this.slug).subscribe(
      res => console.log(res),
      err => {
        if (err.status!==200) {
          console.log(err.message);
          this._router.navigate(['/articles']);
        }
      }
    )
  }

  dislike() {
    this.isDisliked = true;
    this.isLiked = false;
    this._blogPostService.dislikeArticle(this.slug).subscribe(
      res => console.log(res),
      err => {
        if (err.status!==200) {
          console.log(err.message);
          this._router.navigate(['/articles']);
        }
      }
    )
  }

  nondislike() {
    this.isDisliked = false;
    this._blogPostService.nondislikeArticle(this.slug).subscribe(
      res => console.log(res),
      err => {
        if (err.status!==200) {
          console.log(err.message);
          this._router.navigate(['/articles']);
        }
      }
    )
  }

  showViews() {
    this.viewsSheet.nativeElement.style.bottom = "0px";
    this.likesSheet.nativeElement.style.bottom = "-100%";
    this.dislikesSheet.nativeElement.style.bottom = "-100%";
  }

  showLikes() {
    this.viewsSheet.nativeElement.style.bottom = "-100%";
    this.likesSheet.nativeElement.style.bottom = '0px';
    this.dislikesSheet.nativeElement.style.bottom = "-100%";
  }

  showDislikes() {
    this.viewsSheet.nativeElement.style.bottom = "-100%";
    this.likesSheet.nativeElement.style.bottom = "-100%";
    this.dislikesSheet.nativeElement.style.bottom = "0px";
  }

  close() {
    this.viewsSheet.nativeElement.style.bottom = "-100%";
    this.likesSheet.nativeElement.style.bottom = "-100%";
    this.dislikesSheet.nativeElement.style.bottom = "-100%";
  }

  constructor(private _blogPostService: BlogPostService, private _route: ActivatedRoute,
    private _router: Router) { }
  
    ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      let s = params.get('slug');
      this.slug = s;
      
      this._blogPostService.getArticle(this.slug).subscribe(
        res => {
          if (res===null) {
            this._router.navigate(['**']);
          } else {
            this.isAuthor = res.isAuthor;
            if (res.isAuthor) {
              this.article = new Article().deserialize(res.article);
            } else {
              this.article = res.article;
            }
            if (this.article.likes.includes(res.userId)) {
              this.isLiked = true;
            } else if (this.article.dislikes.includes(res.userId)) {
              this.isDisliked = true;
            }
          }
        },
        err => {
          if (err.status===404) {
            this._router.navigate(['**']);
          } else {
            this._router.navigate(['/articles']);
          }
        }
      )

      // this.link = "https://api.whatsapp.com/send?text="+"https://localhost:4200/articles/"+this.slug;
      this.link = "https://api.whatsapp.com/send?text="+"https://intense-bastion-49490.herokuapp.com/articles/"+this.slug;
    });
  }

}
