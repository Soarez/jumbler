var assert = require('assert');
var jumbler = require('./.');

var test, i, j;

test = 'Jumbler should export a function';
assert.equal((typeof jumbler), 'function', test);

var quotes = require('fight-club-quotes');

test = 'Text sent to the jumbler should be different than the original';
for(i=0; i<quotes.length; ++i)
  assert.notEqual(quotes[i], jumbler(quotes[i]), test);

test = 'Must always return a string';
for(i=0; i<quotes.length; ++i)
  assert.equal((typeof jumbler(quotes[i])), 'string', test);

test = 'Must return a string of the same size';
for(i=0; i<quotes.length; ++i)
  assert.equal(quotes[i].length, jumbler(quotes[i]).length, test);

test = 'Number of words should remain the same';
var count = function(s) { return s.split(' ').length; };
for(i=0; i<quotes.length; ++i)
  assert.equal(count(quotes[i]), count(jumbler(quotes[i])), test);

test = 'The size of every word should be the same';
for(i=0; i<quotes.length; ++i) {
  var a = quotes[i].split(' ');
  var b = jumbler(quotes[i]).split(' ');
  
  for(j=0; j<a.length; ++j)
    assert.equal(a[j].length, b[j].length, test);
}  

test = 'The first and last letters of every word should be the same';
for(i=0; i<quotes.length; ++i) {
  var q = quotes[i];
  var a = q.split(' ');
  var b = jumbler(q).split(' ');
  
  for(j=0; j<a.length; ++j) {
    assert.equal(a[j][0], b[j][0], test);
    assert.equal(a[j][a[j].length - 1], b[j][b[j].length - 1], test); 
  } 
}

console.log(quotes[Math.floor(Math.random() * quotes.length)]);
