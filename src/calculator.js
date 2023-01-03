// export function Calculator() {
//   this.add = function(a, b) {
//     let result = a + b;
//     return result;
//   }
//   this.subtract = function(a, b) {
//     return a - b;
//   }
//   this.multiply = function(a, b) {
//     return a * b;
//   }
//   this.divide = function(a, b) {
//     return a / b;
//   }
// }

export const calculator = {
  add: function(a, b) {
    let result = a + b;
    return result;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
}