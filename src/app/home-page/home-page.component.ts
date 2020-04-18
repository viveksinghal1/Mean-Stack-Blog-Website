import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../services/auth-user.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  username;

  addArticle() {
    if (this._authUserService.isLoggedIn()) {
      this._router.navigate(['/articles/new']);
    } else {
      this._router.navigate(['/login']);
    }
  }

  constructor(private _authUserService: AuthUserService, private _router: Router) { }

  ngOnInit() {

    $(document).ready(function() {
      "use strict"; // Start of use strict
    
      // Floating label headings for the contact form
      // $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      //   $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      // }).on("focus", ".floating-label-form-group", function() {
      //   $(this).addClass("floating-label-form-group-with-focus");
      // }).on("blur", ".floating-label-form-group", function() {
      //   $(this).removeClass("floating-label-form-group-with-focus");
      // });
    });

    this.username = localStorage.getItem("username");
      
  }

}
