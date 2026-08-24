import { Component, Input, OnInit } from '@angular/core';
import { FaceSnape } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-face-snap',
    imports: [
        NgStyle,
        NgClass,
        TitleCasePipe,
        DatePipe
    ],
    templateUrl: './face-snap.html',
    styleUrl: './face-snap.scss',
})
export class FaceSnap implements OnInit {
    @Input() snapFace!: FaceSnape;

    userHasSnapped!: boolean;
    buttonText!: string;

    ngOnInit(): void {
        this.userHasSnapped = false;
        this.buttonText = 'oh snap!';
    }

    onClickSnap(): void {
        this.userHasSnapped = !this.userHasSnapped;
        if (this.userHasSnapped) {
            this.buttonText = 'Oops, un Snap!';
            this.snapFace.addSnap();
        } else {
            this.buttonText = 'oh snap!';
            this.snapFace.removeSnap();
        }
    }
}
