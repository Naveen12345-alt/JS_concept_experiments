const myObject = {
  price: 500,
  get_price: function () {
    return this.price
  },
}

// function myObject() {
//   this.price = 500
// }

// myObject.prototype.get_price = function () {
//   return this.price
// }

// const customObject = Object.create(myObject.prototype)
const customObject = Object.create(myObject)
customObject.price = 200

delete customObject.price
console.log(customObject.get_price())
console.log(customObject.__proto__, customObject.constructor)

function MaObj() {
  this.price = 500
}

MaObj.prototype.get_price = function () {
  return this.price
}

const newCustomObject = new MaObj()
newCustomObject.price = 400

delete newCustomObject.price
console.log(newCustomObject.__proto__, newCustomObject.constructor)
