import { MouseMoveEffect } from "./mouse-move-effect";
import { CanvasCtx, EffectsManagerOptions } from "./types";

export class EffectsManager {
  private ctx: CanvasCtx;
  private mouseMoveEffect = new MouseMoveEffect();
  private id: number | null = null;

  constructor(options: EffectsManagerOptions) {
    this.ctx = options.ctx;
    this.mouseMoveEffect.updateCtx(this.ctx);
  }

  start() {
    this.mouseMoveEffect.start();
    this.animate();
  }

  private draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.mouseMoveEffect.draw();
  }

  private update() {
    this.mouseMoveEffect.update();
  }

  private animate() {
    this.draw();
    this.update();
    this.id = requestAnimationFrame(() => this.animate());
  }
}
