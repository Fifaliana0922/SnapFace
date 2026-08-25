import { Component, Input, OnInit } from '@angular/core';
import { FaceSnape } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
    selector: 'app-face-snap',
    imports: [NgStyle, NgClass, TitleCasePipe, DatePipe],
    templateUrl: './face-snap.html',
    styleUrl: './face-snap.scss',
})
export class FaceSnap implements OnInit {
    @Input() snapFace!: FaceSnape;

    userHasSnapped!: boolean;
    buttonText!: string;

    constructor(private faceSnapsService: FaceSnapsService) {}

    ngOnInit(): void {
        this.userHasSnapped = false;
        this.buttonText = 'oh snap!';
    }

    onClickSnap(): void {
        this.userHasSnapped = !this.userHasSnapped;
        if (this.userHasSnapped) {
            this.faceSnapsService.snapFaceSnapById(this.snapFace.id, 'addSnap');
            this.buttonText = 'Oops, un Snap!';
        } else {
            this.faceSnapsService.snapFaceSnapById(this.snapFace.id, 'removeSnap');
            this.buttonText = 'oh snap!';
        }
    }
}
