import { GameField } from './game-field.js';

const canvasEl = document.getElementsByTagName('canvas')[0];
const context = canvasEl.getContext('2d');

const field = new GameField(context);
field.render();
