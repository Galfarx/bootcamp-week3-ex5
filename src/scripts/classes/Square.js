import Rect from './Rect';

class Square extends Rect {
    constructor(width, color) {
        super(width, width);
        this.color = color;
    }

    getProperties() {
        this.getParams();
        console.log(`color: ${this.color}`);
    }
}

export default Square;