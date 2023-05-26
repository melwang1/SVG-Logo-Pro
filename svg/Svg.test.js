const { Circle } = require('../lib/Shapes');
const SVG = require('./SVG')

describe('Circle', () =>  {
    test('check for the color', ()=> {
      const logo = new SVG()
      const shape = new Circle()
      shape.setColor("black")
      logo.setShape(shape)
      logo.setText("MEL","white"),
      expect(logo.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="black" /><text x="150" y="150" font-size="50" text-anchor="middle" fill="white">MEL</text></svg>`);
        })        
    
});