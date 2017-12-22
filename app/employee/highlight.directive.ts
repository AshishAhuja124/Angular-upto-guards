import { Directive, ElementRef,Renderer,Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight')
  percentage:number;

  constructor(private el:ElementRef,public renderer:Renderer){ 
 this.renderer.setElementStyle(this.el.nativeElement,'background-color','lightgreen');

}
}