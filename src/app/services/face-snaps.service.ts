import { Injectable } from '@angular/core';
import { FaceSnape } from '../models/face-snap';
import { faceSnapType } from '../models/face-snap.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FaceSnapsService {

    constructor(private httpClient: HttpClient) { }

    private faceSnaps: FaceSnape[] = [];

    getAllFaceSnaps(): Observable<FaceSnape[]> {
        return this.httpClient.get<FaceSnape[]>(`http://localhost:3000/facesnaps`);
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnape> {
        return this.httpClient.get<FaceSnape>(`http://localhost:3000/facesnaps/${faceSnapId}`)
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string, }): void {
        const faceSnap = new FaceSnape(
            formValue.title,
            formValue.description,
            new Date(),
            0,
            formValue.imageUrl
        );
        if (formValue.location) {
            faceSnap.setLocation(formValue.location);
        }

        this.faceSnaps.push(faceSnap);
    }

    snapFaceSnapById(faceSnapId: number, snapType: faceSnapType): void {
        const foundSnapFace = this.getFaceSnapById(faceSnapId);
        if (!foundSnapFace) {
            throw new Error('SnapFace not found!');
        }
        // foundSnapFace.snap(snapType);
    }
}
