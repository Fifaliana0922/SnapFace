import { Component, Input, OnInit } from '@angular/core';
import { FaceSnape } from '../models/face-snap';
import { TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-face-snap',
    imports: [TitleCasePipe],
    templateUrl: './face-snap.html',
    styleUrl: './face-snap.scss',
})
export class FaceSnap {
    @Input() snapFace!: FaceSnape;

    constructor(private router: Router) {}

    viewFaceSnap() {
        this.router.navigateByUrl(`faceSnaps/${this.snapFace.id}`);
    }
}
