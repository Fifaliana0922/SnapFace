import { Injectable } from '@angular/core';
import { FaceSnape } from '../models/face-snap';
import { faceSnapType } from '../models/face-snap.type';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FaceSnapsService {

    constructor(private httpClient: HttpClient) { }

    getAllFaceSnaps(): Observable<FaceSnape[]> {
        return this.httpClient.get<FaceSnape[]>(`http://localhost:3000/facesnaps`);
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnape> {
        return this.httpClient.get<FaceSnape>(`http://localhost:3000/facesnaps/${faceSnapId}`)
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string, }): Observable<FaceSnape> {
        return this.getAllFaceSnaps().pipe(
            map(faceSnaps => [...faceSnaps].sort((a, b) => a.id - a.id)),
            map(sortedFaceSnap => sortedFaceSnap[sortedFaceSnap.length - 1].id),
            map(previousFaceSnap => ({
                ...formValue,
                snaps: 0,
                createAt: new Date(),
                id: previousFaceSnap + 1,
            })),
            switchMap(newFaceSnap => this.httpClient.post<FaceSnape>(
                `http://localhost:3000/facesnaps`,
                newFaceSnap
            )),
        )
    }

    snapFaceSnapById(faceSnapId: number, snapType: faceSnapType): Observable<FaceSnape> {
        return this.getFaceSnapById(faceSnapId).pipe(
            map(faceSnap => ({
                ...faceSnap,
                snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
            })),
            switchMap(updatedFaceSnap => this.httpClient.put<FaceSnape>(
                `http://localhost:3000/facesnaps/${faceSnapId}`,
                updatedFaceSnap
            )),
        );
    }
}
