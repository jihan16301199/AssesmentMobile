import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  imports: [],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
steps = [
    { title: 'Personal Info', content: 'Step 1 content goes here' },
    { title: 'Contact', content: 'Step 2 content goes here' },
    { title: 'Confirm', content: 'Step 3 content goes here' }
  ];

  currentStep = 0;

  goToStep(index: number) {
    this.currentStep = index;
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
