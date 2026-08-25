import { Routes } from '@angular/router';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { LandingPageComponent } from './landing-page-component/landing-page-component';

export const routes: Routes = [
    { path: 'faceSnaps', component: FaceSnapList },
    { path: '', component: LandingPageComponent },
];
