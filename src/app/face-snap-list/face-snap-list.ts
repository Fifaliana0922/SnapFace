import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnape } from '../models/face-snap';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-face-snap-list',
    imports: [FaceSnap, AsyncPipe],
    templateUrl: './face-snap-list.html',
    styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit {
    faceSnaps$ !: Observable<FaceSnape[]>;

    constructor(private faceSnapsService: FaceSnapsService) { }

    ngOnInit(): void {
        this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
    }
}
