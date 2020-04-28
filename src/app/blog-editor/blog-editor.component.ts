import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators, } from "@angular/forms";
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthUserService } from '../services/auth-user.service';
import { DataService } from '../services/data.service';
declare var $: any;

@Component({
  selector: "app-blog-editor",
  templateUrl: "./blog-editor.component.html",
  styleUrls: ["./blog-editor.component.css"],
})
export class BlogEditorComponent implements OnInit, AfterViewInit {
  @ViewChild("title", { static: false }) title: ElementRef;
  
  editorForm: FormGroup;
  editorLength: number;
  editorContent: string;
  editorMaxLength: number = 50000;
  submitted: boolean = false;
  allFieldsValid: boolean = false;
  username;
  categories: string[] = [];
  error = "";
  success = "";

  editorStyle = {
    minHeight: "80vh",
    backgroundColor: "white",
    color: "#212529",
    letterSpacing: "1.25px",
    fontSize: "20px",
    border: "0.04rem solid rgba(180, 180, 180, 0.3)",
    borderRadius: "5px",
    boxShadow:
      "0 7px 15px rgba(180, 180, 180, 0.4), 0 2px 7px rgba(180, 180, 180, 0.7)",
    padding: "1.5rem",
  };

  maxlength(e) {
    this.editorLength = e.editor.getLength() - 1;
    if (e.editor.getLength() > this.editorMaxLength) {
      e.editor.deleteText(this.editorMaxLength, e.editor.getLength());
    }
  }

  reset() {
    if (this.submitted) {
      this.submitted = false;
      // let tempForm = this.editorForm.value;
      // console.log("reset ho gya");
      this.editorForm.markAsPristine();
      this.editorForm.markAsUntouched();
      // console.log("reset hone k baad");
      // console.log(this.editorForm.value);
    }
  }

  getErrorMsg(field: string, minlength: number) {
    let result = "";
    let errors = this.editorForm.get(field).errors;
    let element = this.editorForm.get(field);
    // agar yha pr error aaye ki cannot get property required of null
    // toh errors.required se phle this.editorForm.get(field).touched laga dena
    // pata nhi ye kyu hota h but isse error ht gya tha
    if (element.touched && errors.required) {
      result += "*" + field + " is required";
    }
    if (element.touched && errors.minlength) {
      result += "*" + field + " must be at least " + minlength + " characters long";
    }
    return result;
  }

  isFieldValid(field: string) {
    return (
      (this.editorForm.get(field).invalid &&
        this.editorForm.get(field).touched) ||
      (this.editorForm.get(field).untouched && this.submitted)
    );
  }

  onSubmit(form) {
    // this.editorContent = this.editorForm.get("editor").value;
    // console.log(this.editorForm.get("editor").value);
      this.submitted = true;
      if (this.editorForm.valid) {
        // console.log("submit ho gya");
        console.log(this.editorForm);
        this.allFieldsValid = true;
        // this._blogPostService.setContent(this.editorForm.get('content').value);
        // this._router.navigate(['/articles/show']);
        // console.log(this.editorForm.valid);
        this._blogPostService.postArticle(this.editorForm.value).subscribe(
          res => {
            console.log("success"),
            this.success = "Successfully Uploaded";
            this._router.navigate(['/articles', res.slug]);
          },
          err => {
            console.log(err);
            this.error = err.error;
            this.editorForm.markAsPristine();
            this.editorForm.markAsUntouched();
          }
        );
      } 
      // else {
      //   console.log('submit nhi ho paya');
      //   console.log(this.editorForm);
      // }
  }

  constructor(private fb: FormBuilder, private _blogPostService: BlogPostService,
     private _router: Router, private _authUserService: AuthUserService, private _dataService: DataService) {}

  ngOnInit() {
    this.editorForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(10)]],
      caption: [""],
      category: ["", Validators.required],
      content: ["", [Validators.required, Validators.minLength(50)]],
    });
    $('[data-toggle="tooltip"]').tooltip();
    this.username = localStorage.getItem('username');
    this.categories = this._dataService.getCategories();
  }

  ngAfterViewInit() {
    // this.title.nativeElement.focus();
  }
}
