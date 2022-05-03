export class Snake {

    #size = 20;
    #context;
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
    }

    render() {
        this.#coordinates.forEach(c => this.#renderSection(c));
    }

    #renderSection({ x, y }) {
        this.#context.fillStyle = 'gray';
        this.#context.fillRect(x, y, this.#size, this.#size);

        this.#context.strokeStyle = 'black';
        this.#context.strokeRect(x, y, this.#size, this.#size);
    }
}