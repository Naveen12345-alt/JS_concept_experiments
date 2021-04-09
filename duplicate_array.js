Array.prototype.duplicate = function () {
  return [...this, ...this]
  // this here is [1,2,3,4,5]
}

console.log([1, 2, 3, 4, 5].duplicate())
