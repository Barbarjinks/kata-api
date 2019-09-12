const add = (a, b) => {
  return a+b
};

const subtract = (a, b) => {
  return (a-b)
};

const multiply = (a, b) => {
  return (a*b)
};

const divide = (a, b) => {
  return (a/b)
};

const power = (a, b) => {
  return (a**b)
}; 

const round = (a) => {
 return (Math.round(a))
};

const roundUp = (a) => {
  return (parseInt(a)+1)
};

const roundDown = (a) => {
  return (parseInt(a))
};

const absolute = (a) => {
  return Math.abs(a)
};

const quotient = (a, b) => {
  return quot = ~~(a/b)
};

const remainder = (a, b) => {
  return a%b
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
};
