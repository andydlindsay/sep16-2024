           // Arrays    Objects
// c-style      Y           N
// for..of      Y           N
// for..in      Y           Y

const dog = {
  faveToy: 'squeaky ball',
  breed: 'labrador',
  name: 'dioji',
};

for (const key in dog) {
  console.log('value', dog[key]);
}
