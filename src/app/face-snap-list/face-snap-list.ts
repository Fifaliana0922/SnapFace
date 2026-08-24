import { Component, OnInit } from '@angular/core';
import { FaceSnape } from '../models/face-snap';
import { FaceSnap } from "../face-snap/face-snap";

@Component({
    selector: 'app-face-snap-list',
    imports: [FaceSnap],
    templateUrl: './face-snap-list.html',
    styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit {
    faceSnaps!: FaceSnape[];

    ngOnInit(): void {
        this.faceSnaps = [
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
            ),
            new FaceSnape(
                'Lucas Dubois',
                'Mon collègue de promo, passionné de code et de café ☕',
                new Date('2024-06-01'),
                17,
                'https://media.istockphoto.com/id/1830126474/photo/portrait-of-a-business-man-sitting-in-an-office.jpg?s=1024x1024&w=is&k=20&c=y6ekaWOU98cltT8YkEn8dykF4-hLdCu3nNBGPvC4AG8=',
            ),
        ];

        this.faceSnaps[1].setLocation('Au lycée');
    }
}
