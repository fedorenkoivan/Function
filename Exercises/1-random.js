'use strict';

const random = (min = 0, max) =>
  // Generate random Number between from min to max
  // See MDN in case of trouble
  Math.floor(Math.random() * (max - min) + min);

module.exports = { random };
