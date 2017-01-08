class Rect {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getParams() {
        console.log(`width: ${this.width} height: ${this.height}`);
    }
}

export default Rect