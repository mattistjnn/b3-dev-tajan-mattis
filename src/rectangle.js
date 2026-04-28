class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error('Les dimensions doivent être positives');
    }
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

module.exports = Rectangle;
