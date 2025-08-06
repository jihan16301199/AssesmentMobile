import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileViewComponent } from './features/mobile-view/mobile-view.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MobileViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FinJetWebClient';
}
