import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-landing-page-component',
    imports: [RouterLink],
    templateUrl: './landing-page-component.html',
    styleUrl: './landing-page-component.scss',
})
export class LandingPageComponent {
    constructor(private router: Router) {}

    navigateToFaceSnaps(): void {
        this.router.navigateByUrl('faceSnaps');
    }
}
