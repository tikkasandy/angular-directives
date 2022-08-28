import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input('appStyle') color: string = 'orange'
  @Input() dStyles: {border?: string, borderRadius?: string} | any

  @HostBinding('style.color') elColor: any = null

  constructor(private el: ElementRef, private rend: Renderer2) {
    console.log(el)
    // this.rend.setStyle(el.nativeElement, 'backgroundColor', 'yellow')
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color
    // this.rend.setStyle(this.el.nativeElement, 'color', this.color)
    // this.rend.setStyle(this.el.nativeElement, 'border', this.dStyles.border)
    // this.rend.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius)
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = null
    // this.rend.setStyle(this.el.nativeElement, 'color', null)
    // this.rend.setStyle(this.el.nativeElement, 'border', null)
    // this.rend.setStyle(this.el.nativeElement, 'borderRadius', null)
  }

}
