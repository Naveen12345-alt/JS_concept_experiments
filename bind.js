Function.prototype.bindl1 = function () {
  const self = this
  console.log(typeof arguments)
  const context = arguments[0]
  const mainargs = Array.prototype.slice.call(arguments, 1)
  return function () {
    const otherargs = Array.prototype.slice.call(arguments)
    return self.apply(context, mainargs.concat(otherargs))
  }
}

// modern implementation

Function.prototype.bindl2 = function (...arg1) {
  return (...arg2) => {
    return this.call(...arg1, ...arg2)
  }
}

const monica = {
  name: 'Monica Geller',
  total: 400,
  deductMontlyFee: function (fee, city, state, country) {
    this.total = this.total - fee
    return `${this.name} remaining balance is ${this.total} ${city} ${state} ${country}`
  },
}
const rachel = {name: 'Rachel Green', total: 1500}
const rachelFeeDeductor = monica.deductMontlyFee.bindl1(rachel, 500, 'delhi')
console.log(rachelFeeDeductor('delhi UT', 'India'))
