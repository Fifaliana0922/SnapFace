import { Component } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnape } from '../models/face-snap';
import { TitleCasePipe, NgClass, NgStyle, DatePipe, AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
    selector: 'app-single-face-snap',
    imports: [TitleCasePipe, NgClass, NgStyle, DatePipe, RouterLink, AsyncPipe],
    templateUrl: './single-face-snap.html',
    styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnap {
    faceSnap$ !: Observable<FaceSnape>;

    userHasSnapped!: boolean;
    buttonText!: string;

    constructor(
        private faceSnapsService: FaceSnapsService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.buttonAnimate();
        this.getFaceSnap();
    }

    onClickSnap(faceSnapId: number): void {
        this.userHasSnapped = !this.userHasSnapped;
        if (this.userHasSnapped) {
            this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
                tap(() => {
                    this.buttonText = 'Oops, un Snap!';
                })
            );
        } else {
            this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
                tap(() => {
                    this.buttonText = 'oh snap!';
                })
            );
        }
    }

    private getFaceSnap(): void {
        const faceSnapId = this.activatedRoute.snapshot.params['id'];
        this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
    }

    private buttonAnimate(): void {
        this.userHasSnapped = false;
        this.buttonText = 'oh snap!';
    }
}
