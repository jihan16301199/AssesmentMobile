import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TimeframeComponent } from '../../shared/components/timeframe/timeframe.component';
import { SliderMobileComponent } from '../../shared/components/slider-mobile/slider-mobile.component';

@Component({
  selector: 'app-mobile-view',
  imports: [ TimeframeComponent, DatePipe, SliderMobileComponent],
  templateUrl: './mobile-view.component.html',
  styleUrl: './mobile-view.component.scss'
})
export class MobileViewComponent implements OnInit {
  hour: number = 5;
  displayHour: number = 0;
  range: number = 7;
  progressPercent: number;


  startingTime: Date;
  gameStartingTime: Date;
  endingingTime: Date;

  ngOnInit(): void {
    this.startingTime = new Date();
    this.startingTime.setHours(17, 30, 0);
    this.gameStartingTime = new Date();
    this.gameStartingTime.setHours(19, 0, 0);
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
    this.progressPercent = (((50 / this.range) * (this.range + 1 - event)) + 50);
  }
}
