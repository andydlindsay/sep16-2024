// method = function inside an object

// arrow functions DO NOT create `this`

let writer = {
  firstName: 'Agatha',
  lastName: 'Christie',
  age: 42,
  fullName: function() {
    console.log(`${this.firstName} ${this.lastName}`)
  }
};

const copy = writer; // copy the reference

console.log(writer);

writer = null;
copy = null;

// writer.fullName();
copy.fullName();
