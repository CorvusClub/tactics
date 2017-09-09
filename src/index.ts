import Renderer from './lib/render';
import MouseInput from './lib/input/mouse.js';

class Game {
  renderer: Renderer;
  mouseInput: MouseInput;

  constructor() {
    this.renderer = new Renderer();
    this.mouseInput = new MouseInput(this.renderer.canvas);

    this.animationFrame();
  }

  lastTickTime: number;

  public animationFrame(time = 0): void {
    requestAnimationFrame(this.animationFrame.bind(this));

    if(this.lastTickTime === undefined) {
      this.lastTickTime = time;
    }
    let dt = time - this.lastTickTime;

    this.tick(dt);

    this.lastTickTime = time;
  }

  public tick(dt: number) {
    this.renderer.tick(dt);
  }
}

let game = new Game();
document.body.appendChild(game.renderer.canvas);