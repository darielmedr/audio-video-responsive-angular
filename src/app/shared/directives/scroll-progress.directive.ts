import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollProgress]'
})
export class ScrollProgressDirective {

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll') onScroll() {
    const documentHeight = Math.max(
      document.body.scrollHeight || 0.01,
      document.documentElement.scrollHeight || 0.01,
      document.body.offsetHeight || 0.01,
      document.documentElement.offsetHeight || 0.01,
      document.body.clientHeight || 0.01,
      document.documentElement.clientHeight || 0.01
    );
    const clientHeight = window.innerHeight ||
      window.screen.height ||
      document.documentElement.clientHeight ||
      document.body.clientHeight || 0;

    const scrolled = window.pageYOffset ||
      window.scrollY ||
      document.body.scrollTop ||
      document.documentElement.scrollTop || 0;

    const height = (documentHeight - clientHeight);
    const scrolledPercent = (scrolled / height) * 100;

    this.el.nativeElement.style.width = scrolledPercent + '%';
  }

}
