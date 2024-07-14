import { MouseMoveEffectLine } from "./mouse-move-effect-line";
import { CanvasCtx } from "./types";

export class MouseMoveEffect {
  private ctx: CanvasCtx | null = null;
  private lines: MouseMoveEffectLine[] = [];
  private maxLinesLength = 150;

  start() {
    if (!this.ctx) return;

    this.ctx.canvas.addEventListener("mousemove", (e) => {
      this.createLine(e.offsetX, e.offsetY);
    });
  }

  draw() {
    this.drawLines();
  }

  update() {
    this.updateLines();
  }

  updateCtx(ctx: CanvasCtx) {
    this.ctx = ctx;
  }
  private drawLines() {
    this.lines.forEach((line) => {
      line.draw();
    });
  }

  private updateLines() {
    this.lines.forEach((line) => {
      line.update();
    });
    if (this.lines.length > this.maxLinesLength) {
      this.lines.shift();
    }
  }

  private createLine(x: number, y: number) {
    if (!this.ctx) return;

    const line = new MouseMoveEffectLine();
    line.updateCtx(this.ctx);
    line.axis.x = x;
    line.axis.y = y;
    this.lines.push(line);
  }
}
