// <reference path="vigur.d.ts">
import Vector from "vigur";

class MouseInput {
  element: HTMLElement;
  pos: Vector;
  constructor(element) {
    this.pos = new Vector(0, 0);
    this.element = element;

    this.element.addEventListener("mousemove", event => {
      const target = event.target || event.srcElement;
      const rect = (target as HTMLElement).getBoundingClientRect();

      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
        
      this.pos.x = offsetX;
      this.pos.y = offsetY;
    });
  }
}

export default MouseInput;