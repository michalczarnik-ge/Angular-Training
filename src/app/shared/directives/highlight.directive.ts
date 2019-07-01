import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseover') onMouseOverHandler(){
    // this.el.nativeElement.classList.add('border-primary')

    this.renderer.addClass(this.el.nativeElement, "border-primary");
  }

  @HostListener('mouseleave') onMouseLeaveHandler(){
    // this.el.nativeElement.classList.remove('border-primary')

    this.renderer.removeClass(this.el.nativeElement, "border-primary");
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

}
