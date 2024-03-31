export class Vector {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public sum(v: Vector) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  public mult(n: number) {
    this.x *= n;
    this.y *= n;
    return this;
  }

  static get ZERO() {
    return new Vector(0, 0);
  }
}
