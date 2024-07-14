import { Axis, CanvasCtx } from "./types";

export class MouseMoveEffectLine {
  private ctx: CanvasCtx | null = null;
  private _axis: Axis = {
    x: 0,
    y: 0,
  };
  private sizes = [5, 10, 11, 12, 13, 14, 15];
  private colors = ["#fff", "#6ce7c2"];
  private size: number;
  private fill: string;

  constructor() {
    this.size = this.sizes[Math.floor(Math.random() * this.sizes.length)];
    this.fill = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  draw() {
    if (!this.ctx) return;

    this.ctx.beginPath();
    this.ctx.fillStyle = this.fill;
    this.ctx.arc(this.axis.x, this.axis.y, this.size, 0, Math.PI * 2, false);
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {}

  updateCtx(ctx: CanvasCtx) {
    this.ctx = ctx;
  }

  get axis(): Axis {
    return this._axis;
  }
}
