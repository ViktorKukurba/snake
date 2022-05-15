import { Control } from "./control.js";

export class Snake {

    #size = 20;
    #context;
    #control;
    #coordinates;

    constructor(renderingContext) {
        this.#context = renderingContext;
        this.#control = new Control();
        this.init();
    }

    init() {
        this.#control.stop();
        this.#coordinates = [{
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
    }

    get head() {
        return this.#coordinates.at(0);
    }

    render() {
        this.#coordinates.forEach(c => this.#renderSection(c));
    }

    move(increase) {
        if (this.#control.dx === 0 && this.#control.dy === 0) {
            return;
        }
        const currentHeadPosition = this.head;
        const newHeadPosition = { x: currentHeadPosition.x + this.#control.dx, y: currentHeadPosition.y + this.#control.dy };

        this.#coordinates.unshift(newHeadPosition);
        if (!increase) {
            this.#coordinates.pop();
        }
    }

    hasCollided() {
        const { x, y } = this.head;
        if (x < 0 || y < 0) {
            return true;
        }

        if (x > 400 || y > 400) {
            return true;
        }

        const body = this.#coordinates.slice(1);

        return body.some(c => c.x === x && c.y === y);
    }

    #renderSection({ x, y }) {
        this.#context.fillStyle = 'gray';
        this.#context.fillRect(x, y, this.#size, this.#size);

        this.#context.strokeStyle = 'black';
        this.#context.strokeRect(x, y, this.#size, this.#size);
    }
}