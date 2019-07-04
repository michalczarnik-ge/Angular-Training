import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  show(){
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('.modal'),
      'display',
      'block'
    );
  }

  hide(){
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('.modal'),
      'display',
      'none'
    );
  }
}
