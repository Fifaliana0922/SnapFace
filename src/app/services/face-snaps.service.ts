import { Injectable } from '@angular/core';
import { FaceSnape } from '../models/face-snap';
import { faceSnapType } from '../models/face-snap.type';

@Injectable({
    providedIn: 'root',
})
export class FaceSnapsService {
    private faceSnaps: FaceSnape[] = [
        new FaceSnape(
            'Archibal',
            'Mon ami depuis toujours',
            new Date(),
            0,
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        ),
        new FaceSnape(
            'Sophie Martin',
            'Ma meilleure amie depuis le lycée, toujours souriante !',
            new Date('2024-03-15'),
            160,
            'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg',
        ).withLocation('Au lycée'),
        new FaceSnape(
            'Lucas Dubois',
            'Mon collègue de promo, passionné de code et de café ☕',
            new Date('2024-06-01'),
            17,
            'https://media.istockphoto.com/id/1830126474/photo/portrait-of-a-business-man-sitting-in-an-office.jpg?s=1024x1024&w=is&k=20&c=y6ekaWOU98cltT8YkEn8dykF4-hLdCu3nNBGPvC4AG8=',
        ),
    ];

    getFaceSnaps(): FaceSnape[] {
        return [...this.faceSnaps];
    }

    getFaceSnapById(faceSnapId: string): FaceSnape {
        const snapFaceId = this.faceSnaps.find((faceSnap) => faceSnap.id == faceSnapId);
        if (!snapFaceId) {
            throw new Error('SnapFace not found!');
        }
        return snapFaceId;
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

    snapFaceSnapById(faceSnapId: string, snapType: faceSnapType): void {
        const foundSnapFace = this.getFaceSnapById(faceSnapId);
        if (!foundSnapFace) {
            throw new Error('SnapFace not found!');
        }
        foundSnapFace.snap(snapType);
    }
}
