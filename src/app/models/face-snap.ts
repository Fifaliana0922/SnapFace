export class FaceSnape {
    location?: string;

    constructor(
        public title: string,
        public description: string,
        public createAt: Date,
        public snaps: number,
        public imageUrl: string,
    ) {}

    addSnap() {
        this.snaps++;
    }

    removeSnap() {
        this.snaps--;
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): FaceSnape {
        this.setLocation(location);
        return this;
    }
}
