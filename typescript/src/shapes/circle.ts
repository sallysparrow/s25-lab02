import { Shape } from "./shape"

class Circle implements Shape {
        private radius: number;

        constructor(radius: number){
            this.radius = radius;  
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }


        computeArea: function (): number {
            return Math.PI * radius * radius;
        }
}

export { Circle }