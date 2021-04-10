const myObject1 = {
  price: 500,
  get_price: function () {
    return this.price
  },
}

function myObject() {
  this.price = 500
}
myObject.prototype.get_price = function () {
  return this.price
}

// const customObject = Object.create(myObject.prototype)
// customeObject constructor would be myObject AND  its __proto__ would contain
// myObject.prototype properties and methods, Using myObject to create new object
// would built-in Function as constructor and __proto__ would contain myObject as function
const customObject = Object.create(myObject1)
// myObject1 is of type Object, so constructor in this case would be built-in
// Object type and __proto__ would contain myObject1 object
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
