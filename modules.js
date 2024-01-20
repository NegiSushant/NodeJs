function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
// module.exports = add;
// //this will override the add function
// module.exports = sub;

//used to export multiple module one time
// module.exports = {
//   add,
//   sub,
// };

exports.mul = (c, d) => c * d;

exports.div = (e, f) => e / f;
