#!/usr/env node

var jumbler = require('./.');

process.stdin.on('data', jumble);

function jumble(data) {
  process.stdout.write(jumbler(data.toString()));
}
