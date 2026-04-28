class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error('Les dimensions doivent être positives');
    }
    this.width = width;
    this.height = height;
  }
}

module.exports = Rectangle;
