const fs = require("fs");
const inquirer = require("inquirer");
const {Circle,Triangle,Square} = require("./lib/Shapes");
const SVG = require('./svg/SVG');
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter a text up to 3 characters!"
    },

    {
        type: "list",
        name: "color",
        message: "Choose a Text color!",
        choices:["red","yellow","white","black","pink","blue","purple","orange"]
    },

    {
        type: "list",
        name: "shapes",
        message: "Select a shape",
        choices: ["circle", "triangle", "square"]
    },

    {
        type: "list",
        name: "shapeColor",
        message: "Enter a color for the shape!",
        choices:["red","yellow","white","black","pink","blue","purple","orange"]
    },

]

function init() {
    inquirer.prompt(questions)
        .then(({ text, color, shapes, shapeColor }) => {
        let myShape;
           switch(shapes){
            case "circle":
                myShape = new Circle()
                myShape.setColor(shapeColor)
                break;
            case "triangle":
                myShape = new Triangle()
                myShape.setColor(shapeColor)
                break;
            case "square":
                myShape = new Square()
                myShape.setColor(shapeColor)    
           }

           const logo = new SVG();
           logo.setShape(myShape);
           logo.setText(text,color);
           fs.writeFileSync("LOGO.svg",logo.render(),function(err){
            if(err) throw err;

           })
        });

}

init();