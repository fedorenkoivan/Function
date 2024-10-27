'use strict';

const generateKey = (length) => {
  const char = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let pass = '';
  for (let i = 0; i < length; i++) {
    pass += char[Math.floor(Math.random() * 16)];
  }

  return pass || 'err';
};


module.exports = { generateKey };
