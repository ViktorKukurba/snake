import { Snake } from "./snake.js";

export class GameField {
    #score;
    #context;
    #snake;

    constructor(renderingContext) {
        this.#score = 0;
        this.#context = renderingContext;
        this.#snake = new Snake(renderingContext);
    }

    render() {
        this.#context.fillStyle = 'green';
        this.#context.fillRect(0, 0, 400, 400);

        this.#context.strokeStyle = 'brown';
        this.#context.lineWidth = 5;
        this.#context.strokeRect(0, 0, 400, 400);

        this.#snake.render();
    }
}