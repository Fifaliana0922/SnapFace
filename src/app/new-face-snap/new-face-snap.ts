import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FaceSnape } from '../models/face-snap';
import { AsyncPipe, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-new-face-snap',
    imports: [
        ReactiveFormsModule,
        AsyncPipe,
        DatePipe,
        UpperCasePipe
    ],
    templateUrl: './new-face-snap.html',
    styleUrl: './new-face-snap.scss',
})
export class NewFaceSnap implements OnInit {
    snapForm !: FormGroup;
    faceSnapPreview$ !: Observable<FaceSnape>;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.snapForm = this.formBuilder.group({
            title: [null],
            description: [null],
            imageUrl: [null],
            location: [null],
        });

        this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
            map(formValue => ({
                ...formValue,
                createAt: new Date(),
                id: 0,
                snaps: 0
            }))
        );
    }

    onSubmitForm(): void {
        console.log(this.snapForm.value);
    }
}
