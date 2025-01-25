import { Shape } from "./shape";

class Square implements Shape {
    private sideLen: number;

    constructor(sideLen: number) {
        this.sideLen = sideLen;
    }

    getArea(): number {
        return this.sideLen * this.sideLen;
    }

    draw(): void {
        // Implement drawing logic if necessary
    }
}

export { Square };
