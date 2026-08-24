import { Component, OnInit } from '@angular/core';
import { FaceSnape } from '../models/face-snap';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
    selector: 'app-face-snap-list',
    imports: [FaceSnap],
    templateUrl: './face-snap-list.html',
    styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit {
    faceSnaps!: FaceSnape[];

    constructor(private faceSnapsService: FaceSnapsService) {}

    ngOnInit(): void {
        this.faceSnaps = this.faceSnapsService.getFaceSnaps();
    }
}
