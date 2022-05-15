export class Control {
    #dx = 0;
    #dy = 0;

    get dx() {
        return this.#dx;
    }

    get dy() {
        return this.#dy;
    }

    stop() {
        this.#dx = 0;
        this.#dy = 0;
    }

    constructor() {
        document.addEventListener('keydown', evt => {
            switch(evt.code) {
                case 'ArrowUp': {
                    this.#setDirection(0, -20);
                    break;
                }
                case 'ArrowDown': {
                    this.#setDirection(0, 20);
                    break;
                }
                case 'ArrowLeft': {
                    this.#setDirection(-20, 0);
                    break
                }
                case 'ArrowRight': {
                    this.#setDirection(20, 0);
                }
            }
        });
    }

    #setDirection(dx, dy) {
        if (dx !== 0 && this.dx === -dx) {
            return;
        }
        if (dy !==0 && this.dy === -dy) {
            return;
        }
        this.#dx = dx;
        this.#dy = dy;
    }
}