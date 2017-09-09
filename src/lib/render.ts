class Renderer {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  fpsSamples: Array<number>;
  fps: number;

  constructor() {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.fpsSamples = [];

    window.addEventListener("resize", () => this.resizeToScreen());
    this.resizeToScreen();
  }
  tick(dt: number) {
    this.fpsSamples.push(dt);
    if(this.fpsSamples.length > 10) {
      this.fpsSamples.shift();
    }
    let averageFrameDuration = this.fpsSamples.reduce((a, b) => a + b) / this.fpsSamples.length;
    this.fps = Math.round(1000 / averageFrameDuration);

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillText(`${this.fps}`, 10, 10);
  }

  resizeToScreen() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}

export default Renderer;