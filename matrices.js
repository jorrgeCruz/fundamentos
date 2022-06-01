/**
 * Helper function to output a value in the console. Value will be formatted.
 * @param {*} value
 */
 function print (value) {
    const precision = 14
    console.log(math.format(value, precision))
  }

console.log('create a matrix')
const a = math.matrix([1, 4, 9, 16, 25])
print(a)
const b = math.matrix(math.ones([3, 3]))
print(b) 
print(b.size())

console.log('perform operations')
print(math.sqrt(a)) // [1, 2, 3, 4, 5]
const c = [1, 2, 3, 4, 5]
print(math.factorial(c)) // [1, 2, 6, 24, 120]

console.log('manipulate matrices')
let A = [[2,0,1,1], //tam es 3x4
        [3,0,0,1],
        [5,1,1,1]]

let B = [[1,0,1], //tam 3x3
        [1,2,1],
        [1,1,0]]
const d = [[1, 2], [3, 4]]
print(d) // [[1, 2], [3, 4]]
const e = math.matrix([[5, 6], [1, 1]])
print(e) // [[5, 6], [1, 1]]

let f = math.multiply(B, A)
print(f) // [[19, 22], [43, 50]]

const D = new Matrix([
    [1, 2],
    [3, 4],
  ]);
  const E = new Matrix([
    [2, 3],
    [4, 5],
  ]);
  
  const Sum = Matrix.add(D, E);

  print(Sum)