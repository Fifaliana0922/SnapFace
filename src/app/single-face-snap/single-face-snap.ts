import { Component } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnape } from '../models/face-snap';
import { TitleCasePipe, NgClass, NgStyle, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
    selector: 'app-single-face-snap',
    imports: [TitleCasePipe, NgClass, NgStyle, DatePipe, RouterLink],
    templateUrl: './single-face-snap.html',
    styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnap {
    snapFace!: FaceSnape;

    userHasSnapped!: boolean;
    buttonText!: string;

    constructor(
        private faceSnapsService: FaceSnapsService,
        private activatedRoute: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.buttonAnimate();
        this.getFaceSnap();
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

    private getFaceSnap(): void {
        const faceSnapId = this.activatedRoute.snapshot.params['id'];
        this.snapFace = this.faceSnapsService.getFaceSnapById(faceSnapId);
    }

    private buttonAnimate(): void {
        this.userHasSnapped = false;
        this.buttonText = 'oh snap!';
    }
}
