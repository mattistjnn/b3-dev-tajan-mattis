const { expect } = require('chai');
const Rectangle = require('../src/rectangle');

describe('Rectangle', () => {
  it('devrait créer un rectangle avec des dimensions valides', () => {
    const rect = new Rectangle(10, 5);
    expect(rect.width).to.equal(10);
    expect(rect.height).to.equal(5);
  });

  it('devrait lever une erreur si une dimension est négative', () => {
    expect(() => new Rectangle(-1, 5)).to.throw('Les dimensions doivent être positives');
  });
});

describe('getArea()', () => {
    it('devrait calculer l\'aire correctement', () => {
      const rect = new Rectangle(10, 5);
      expect(rect.getArea()).to.equal(50);
    });
  });

  describe('getPerimeter()', () => {
    it('devrait calculer le périmètre correctement', () => {
      const rect = new Rectangle(10, 5);
      expect(rect.getPerimeter()).to.equal(30);
    });
  });
