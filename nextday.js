Date.prototype.nextDay = function () {
  let currentDate = this.getDate()
  return new Date(this.setDate(currentDate + 1))
}

const date = new Date()
console.log(date)
console.log(date.nextDay())
