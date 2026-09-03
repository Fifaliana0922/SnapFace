import { Routes } from '@angular/router';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { LandingPageComponent } from './landing-page-component/landing-page-component';
import { SingleFaceSnap } from './single-face-snap/single-face-snap';
import { NewFaceSnap } from './new-face-snap/new-face-snap';

export const routes: Routes = [
    { path: 'faceSnaps/:id', component: SingleFaceSnap },
    { path: 'faceSnaps', component: FaceSnapList },
    { path: 'create', component: NewFaceSnap },
    { path: '', component: LandingPageComponent },
];
