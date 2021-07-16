import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private elem:ElementRef){}

  @HostListener ("mouseenter") hover(){
    this.styles('red')
  }
  @HostListener("mouseout") mouseout(){
    this.styles("black")
  }

  private styles(action:string) {
    this.elem.nativeElement.style.color=action;
   }

}
