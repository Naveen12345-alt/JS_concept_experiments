for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 10)
}

console.log(i, 'global-i')

for (var j = 0; j < 10; j++) {
  ;(function (num) {
    setTimeout(_ => {
      console.log(num)
    }, 10)
  })(j)
}

console.log(j, 'global-j')

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 10)
}
