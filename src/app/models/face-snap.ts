import { faceSnapType } from './face-snap.type';

export class FaceSnape {
    location?: string;
    id: string;

    constructor(
        public title: string,
        public description: string,
        public createAt: Date,
        public snaps: number,
        public imageUrl: string,
    ) {
        this.id = crypto.randomUUID().substring(0, 8);
    }

    addSnap() {
        this.snaps++;
    }

    removeSnap() {
        this.snaps--;
    }

    snap(snapType: faceSnapType) {
        if (snapType == 'addSnap') {
            this.addSnap();
        } else if (snapType == 'removeSnap') {
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
