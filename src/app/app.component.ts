import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesktopViewComponent } from "./features/desktop-view/desktop-view.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DesktopViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FinJetWebClient';
}
