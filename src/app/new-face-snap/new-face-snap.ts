import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FaceSnape } from '../models/face-snap';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-face-snap',
    imports: [ReactiveFormsModule, AsyncPipe, DatePipe, UpperCasePipe],
    templateUrl: './new-face-snap.html',
    styleUrl: './new-face-snap.scss',
})
export class NewFaceSnap implements OnInit {
    snapForm!: FormGroup;
    faceSnapPreview$!: Observable<FaceSnape>;
    UrlRegex!: any;

    constructor(
        private formBuilder: FormBuilder,
        private faceSnapService: FaceSnapsService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.UrlRegex =
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

        this.snapForm = this.formBuilder.group(
            {
                title: [null, [Validators.required]],
                description: [null, [Validators.required]],
                imageUrl: [null, [Validators.required, Validators.pattern(this.UrlRegex)]],
                location: [null],
            },
            {
                updateOn: 'blur',
            },
        );

        this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
            map((formValue) => ({
                ...formValue,
                createAt: new Date(),
                id: crypto.randomUUID().substring(0,8),
                snaps: 0,
            })),
        );
    }

    onSubmitForm(): void {
        this.faceSnapService.addFaceSnap(this.snapForm.value);
        this.router.navigateByUrl('/faceSnaps');
    }
}
