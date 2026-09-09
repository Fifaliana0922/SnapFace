import { faceSnapType } from './face-snap.type';

export class FaceSnape {
    location?: string;
    id !: number;

    constructor(
        public title: string,
        public description: string,
        public createAt: Date,
        public snaps: number,
        public imageUrl: string,
    ) { }

    addSnap() {
        this.snaps++;
    }

    removeSnap() {
        this.snaps--;
    }

    snap(snapType: faceSnapType) {
        if (snapType == 'snap') {
            this.addSnap();
        } else if (snapType == 'unsnap') {
            this.removeSnap();
        }
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): FaceSnape {
        this.setLocation(location);
        return this;
    }
}
