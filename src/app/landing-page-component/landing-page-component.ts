import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-landing-page-component',
    imports: [
        RouterLink,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './landing-page-component.html',
    styleUrl: './landing-page-component.scss',
})
export class LandingPageComponent {
    userEmail !: string;

    constructor(private router: Router) { }

    navigateToFaceSnaps(): void {
        this.router.navigateByUrl('faceSnaps');
    }

    onEmailSubmit(forms: NgForm): void {
        console.log(forms.value);
    }
}
