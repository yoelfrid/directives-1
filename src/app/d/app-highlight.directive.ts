import { Directive, HostListener, ElementRef } from '@angular/core';
import { CounterService } from '../s/counter.service';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(private el:ElementRef,private counterSVC:CounterService) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.backgroundColor ='yellow';
    this.counterSVC.hoverCounter++
  }
  
    @HostListener('click') onClikericksky(){
      this.el.nativeElement.style.backgroundColor ='violet';
      this.counterSVC.clickCounter++
  
    }

}
