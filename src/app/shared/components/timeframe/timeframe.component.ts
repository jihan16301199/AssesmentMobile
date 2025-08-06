import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeframe',
  imports: [CommonModule, DatePipe],
  templateUrl: './timeframe.component.html',
  styleUrl: './timeframe.component.scss'
})
export class TimeframeComponent {
  @Input() progress: Number;
  @Input() startingTime: Date = new Date();

}
