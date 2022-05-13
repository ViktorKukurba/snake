import { Control } from "./control.js";

export class Snake {

    #size = 20;
    #context;
    #control;
    #coordinates = [{
        x: 200,
        y: 200
    }, {
        x: 180,
        y: 200
    }, {
        x: 160,
        y: 200
    }, {
        x: 140,
        y: 200
    }];

    constructor(renderingContext) {
        this.#context = renderingContext;
        this.#control = new Control();
    }

    render() {
        this.#coordinates.forEach(c => this.#renderSection(c));
    }

    move() {
        if (this.#control.dx === 0 && this.#control.dy === 0) {
            return;
        }
        const currentHeadPosition = this.#coordinates[0];
        const newHeadPosition = { x: currentHeadPosition.x + this.#control.dx, y: currentHeadPosition.y + this.#control.dy };

        this.#coordinates.unshift(newHeadPosition);
        this.#coordinates.pop();
    }

    hasCollided() {
        const { x, y } = this.#coordinates[0];
        if (x < 0 || y < 0) {
            return true;
        }

        if (x > 400 || y > 400) {
            return true;
        }

        return false;
    }

    #renderSection({ x, y }) {
        this.#context.fillStyle = 'gray';
        this.#context.fillRect(x, y, this.#size, this.#size);

        this.#context.strokeStyle = 'black';
        this.#context.strokeRect(x, y, this.#size, this.#size);
    }
}