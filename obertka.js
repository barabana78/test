const logable = fn => (...args) => {
  const res = fn(...args)
  console.log(`Call: ${fn.name}(${args.join(', ')}) Result: ${res}`)
  return res
}
//usage
const sum = (a, b) => a + b
const wrapped = logable(sum)
const a = wrapped(3, 5)
const b = wrapped(7, 2)
const c = wrapped(1, -1)
console.dir({ a, b, c })
