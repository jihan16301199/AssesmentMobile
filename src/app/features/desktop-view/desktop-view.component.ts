import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StepperComponent } from '../../shared/components/stepper/stepper.component';
import { TimeframeComponent } from '../../shared/components/timeframe/timeframe.component';
import { SliderDesktopComponent } from '../../shared/components/slider-desktop/slider-desktop.component';

@Component({
  selector: 'app-desktop-view',
  imports: [StepperComponent, TimeframeComponent, DatePipe, SliderDesktopComponent],
  templateUrl: './desktop-view.component.html',
  styleUrl: './desktop-view.component.scss'
})
export class DesktopViewComponent implements OnInit {
  hour: number = 5;
  displayHour: number = 0;
  range: number = 9;
  progressPercent: number;


  startingTime: Date;
  gameStartingTime: Date;
  endingingTime: Date;

  ngOnInit(): void {
    this.startingTime = new Date();
    this.startingTime.setHours(18, 0, 0);
    this.gameStartingTime = new Date();
    this.gameStartingTime.setHours(20, 0, 0);
    this.endingingTime = new Date(this.startingTime.getTime());
    this.endingingTime.setHours(this.endingingTime.getHours() + this.hour);
    this.update(1);
  }


  update(event: number): void {
    this.displayHour = this.hour + event;
    this.endingingTime = new Date(this.startingTime.getTime());
    this.endingingTime.setHours(this.endingingTime.getHours() + this.displayHour);
    this.updateProgress(event);
  }

  updateProgress(event: number): void {
    this.progressPercent = (((70 / this.range) * (this.range + 1 - event)) + 30);
  }
}
