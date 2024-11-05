// class MyClass {}

// const MyClass = class {};

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  componentDidMount() {
    return null;
  }

  area() {
    return this.length * this.width;
  }
};

// const rectangle = new Rectangle(3, 5);

// console.log(rectangle.area());

class Prism extends Rectangle {
  constructor(length, width, height) {
    super(length, width); // call the parent's constructor
    this.height = height;

    // this.volume = this.volume.bind(this);
  }

  // componentDidMount() {}

  area() {
    console.log('inside Prism');
  }

  volume() {
    // console.log(this);
    return this.area() * this.height;
  }
}

// myFunc.bind() // whatever you pass to bind becomes `this` in the function

const myPrism = new Prism(2, 3, 4);

myPrism.area();

// console.log(myPrism);
// console.log(myPrism.volume());
// console.log(myPrism.area());
