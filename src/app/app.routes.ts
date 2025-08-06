import { Routes } from '@angular/router';
import { DesktopViewComponent } from './features/desktop-view/desktop-view.component';
import { MobileViewComponent } from './features/mobile-view/mobile-view.component';

export const routes: Routes = [
    {
        path: 'desktop', component: DesktopViewComponent
    },
    {
        path: 'mobile', component: MobileViewComponent
    }
];
