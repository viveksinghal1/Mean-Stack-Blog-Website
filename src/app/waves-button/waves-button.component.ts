import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-waves-button',
  templateUrl: './waves-button.component.html',
  styleUrls: ['./waves-button.component.css']
})
export class WavesButtonComponent implements OnInit {

  @ViewChild('waveEffectButton', {static: false}) waveBtn: ElementRef;

  spanstyle = {
    left: '',
    top: ''
  }

  buttonClicked:boolean = false;

  spanStyle() {
    return this.spanstyle;
  }

  waveEffect(e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    this.spanstyle.left = x+'';
    this.spanstyle.top = y+'';
    this.buttonClicked = true;
    setTimeout(()=>{
        this.buttonClicked = false;
    }, 500);
  }

  constructor() { }

  ngOnInit() {
  }

}
