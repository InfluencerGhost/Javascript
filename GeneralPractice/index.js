class Rectangle {
    constructor (width, height) {
        this.width
        this.height
    }

    set width(newWidth) {
        if (newWidth < 0) {
            this._width = newWidth
        } else {
            console.error("Please input a valid number")
        }
    }

}


const rectangle = new Rectangle(3, 4)

console.log(rectangle.width)
console.log(rectangle.height)