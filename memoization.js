const memoize = fn => {
  let memo = {}

  return args => {
    if (memo[args]) {
      console.log('fetch', args, memo)
      return memo[args]
    } else {
      console.log('execute', args, memo)
      memo[args] = fn(args)
      return fn(args)
    }
  }
}

let fibonacci = n => {
  if (n === 1) return 0
  else if (n === 2) return 1
  else return fibonacci(n - 1) + fibonacci(n - 2)
}

fibonacci = memoize(fibonacci)
console.log(fibonacci(6))
console.log(fibonacci(7))
