let num = 1,
  name = 'Naveen',
  obj1 = {
    value: 'first',
  },
  obj2 = {value: 'second'},
  obj3 = obj2

function change() {
  num = 2
  name = 'Sumo'
  obj1 = obj2
  obj2.value = 'ppp'
}

change(num, name, obj1, obj2)

console.log(num, name, obj1, obj2, obj3)
