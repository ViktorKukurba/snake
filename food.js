export class Food {
    #coordinates;
    #context;

    get coordinates() {
        return this.#coordinates;
    }

    constructor(renderingContext) {
        this.#context = renderingContext;
    }

    get exists() {
        return !!this.#coordinates;
    }

    empty() {
        this.#coordinates = null;
    }

    render() {
        if (!this.exists) {
            return;
        }
        this.#context.fillStyle = 'lightgeen';
        this.#context.strokeStyle = 'darkgreen';
        this.#context.fillRect(this.#coordinates.x, this.#coordinates.y, 20, 20);
        this.#context.strokeRect(this.#coordinates.x, this.#coordinates.y, 20, 20);
    }

    create() {
        this.#coordinates = {
            x: this.#generateRandom(),
            y: this.#generateRandom()
        };
        console.log('CREATE', this.coordinates);
    }

    #generateRandom() {
        const random = Math.random() * 380;
        return Math.round(random/20) * 20;
    }

}