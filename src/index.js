
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix ? matrix.map((el, index) => {return (index % 2 === 0) ? el :el.reverse()}).flat() : [];
}
