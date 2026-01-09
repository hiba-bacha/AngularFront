import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNonRendu]',
})
export class NonRendu {

  constructor(el:ElementRef) { 
    const n= el.nativeElement;
    n.style.color='red';
    n.style.border='2px solid red';
  }

}
