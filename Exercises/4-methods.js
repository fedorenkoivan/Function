'use strict';

const iface = (obj) => {
  const res = [];
  for (const key in obj) {
    if (typeof obj[key] === 'function') {
      res.push([key, obj[key].length]);
    }
  }
  return res;
};

console.log(
  iface({
    m1: (x) => [x],
    m2(x, y) {
      return [x, y];
    },
    m3(x, y, z) {
      return [x, y, z];
    },
  })
);

// module.exports = { methods };
