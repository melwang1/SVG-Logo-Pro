const {Circle, Triangle, Square} = require('./Shapes.js');


describe('circle', () =>  {
    test('check for the color', ()=> {
        const shape = new Circle();
        shape.setColor("blue");
        //const temp = new Circle()
        //temp.setColor("blue")
        const renderText = shape.render()
        expect(renderText).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
    })
})

describe('triangle', () =>  {
    test('check for the color', ()=> {
        const shape = new Triangle ();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
          
    })
})

 describe('square', () =>  {
        test('check for the color', ()=> {
            const shape = new Square ();
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="blue" />`);
            })        
        
});