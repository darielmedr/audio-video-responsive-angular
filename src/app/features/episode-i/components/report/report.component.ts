import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('fluidContainer') fluidContainer!: ElementRef;
  public width: number = 250;

  private unsuscribe$: Subject<void> = new Subject<void>();
  private resizeObservable$: Observable<Event> = new Observable();

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.detectWindowChange();
  }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  ngAfterViewInit(): void {
    this.setVideoContainerWith();
    this.changeDetector.detectChanges();
  }

  detectWindowChange(): void {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeObservable$.pipe(takeUntil(this.unsuscribe$)).subscribe((event: Event) => {
      this.setVideoContainerWith();
    });
  }

  private setVideoContainerWith(): void {
    const parentWidth = this.fluidContainer.nativeElement.clientWidth;
    this.width = this.computeVideoWidth(parentWidth);
  }

  private computeVideoWidth(parentWidth: number): number {
    const leftPaddingString: string = window.getComputedStyle(this.fluidContainer.nativeElement, null).getPropertyValue('padding-left');
    const rightPaddingString: string = window.getComputedStyle(this.fluidContainer.nativeElement, null).getPropertyValue('padding-right');


    const leftPadding: number = this.convertWidthStringToNumber(leftPaddingString);
    const rightPadding: number = this.convertWidthStringToNumber(rightPaddingString);

    const parentPadding: number = leftPadding + rightPadding;
    const width = parentWidth - parentPadding;

    return width;
  }

  private convertWidthStringToNumber(valueInPixels: string): number {
    if (!valueInPixels) return 0;

    if (valueInPixels.trim().length === 0) return 0;

    const valueString = valueInPixels.split('px')[0];
    const value = Number(valueString);

    return value;
  }

}
