class SVG {
    constructor () {
        this.logoText = ""
        this.logoShape = ""
    } 

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.logoShape}${this.logoText}</svg>`
    }
    setText(testMessage, color){
        if(testMessage.length > 3){
            throw new Error('text must be up to 3 characters')
        }
        this.logoText = `<text x="150" y="150" font-size="50" text-anchor="middle" fill="${color}">${testMessage}</text>`
    }

    setShape(shape) {
        this.logoShape = shape.render();
    }
}
    
module.exports = SVG;