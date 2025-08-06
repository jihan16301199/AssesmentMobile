import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider-desktop',
  imports: [CommonModule],
  templateUrl: './slider-desktop.component.html',
  styleUrl: './slider-desktop.component.scss'
})
export class SliderDesktopComponent implements OnInit {
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Output() eventValue = new EventEmitter<number>();
  
  duration: number = 1;
  blocks: number[] = [];

  ngOnInit(): void {
    this.blocks = Array(this.max).fill(0);
  }

  get progressPercentage(): number {
    return (100 / this.max);
  }

  onSliderChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.duration = parseInt(target.value, 10);
    this.eventValue.emit(this.duration);
  }
}
