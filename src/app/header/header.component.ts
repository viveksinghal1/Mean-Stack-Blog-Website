import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthUserService } from '../services/auth-user.service';
// import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sidebarContainer', {static: false}) sidebarContainer: ElementRef;

  hide() {
    this.sidebarContainer.nativeElement.style.left='-100%';
    this.sidebarContainer.nativeElement.style.transition='0.8s ease-in';
  }

  hide2() {
    this._authUserService.logoutUser();
    this.sidebarContainer.nativeElement.style.left='-100%';
    this.sidebarContainer.nativeElement.style.transition='0.8s ease-in';
  }

  constructor(private _authUserService: AuthUserService) { }

  ngOnInit() {

    $('.navbar-toggler').click(function(){
      $('#sidebar-container').css({'left':'0', 'transition': '0.8s ease-out'});
    });
    $('.shrink-sidebar').click(function(){
      $('#sidebar-container').css({'left':'-100%', 'transition': '0.8s ease-in'});
    });
    
    
    // Hide submenus
    $('#body-row .collapse').collapse('hide');
    
    // Collapse/Expand icon
    $('#collapse-icon').addClass('fa-angle-double-left'); 
    
    // Collapse click
    // $('[data-toggle=sidebar-colapse]').click(function() {
    //     SidebarCollapse();
    // });
    
    // function SidebarCollapse () {
    //     $('.menu-collapsed').toggleClass('d-none');
    //     $('.sidebar-submenu').toggleClass('d-none');
    //     $('.submenu-icon').toggleClass('d-none');
    //     $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    //     $('#sidebar-container').css('transition', '0.2s');
    //     // Treating d-flex/d-none on separators with title
    //     var SeparatorTitle = $('.sidebar-separator-title');
    //     if ( SeparatorTitle.hasClass('d-flex') ) {
    //         SeparatorTitle.removeClass('d-flex');
    //     } else {
    //         SeparatorTitle.addClass('d-flex');
    //     }
        
    //     // Collapse/Expand icon
    //     $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
    // }

  }

}
