function jumbleText(text) {
  return text
    .split(' ')
    .map(jumbleWord)
    .join(' ');
}


function jumbleWord(word) {
  if (word.length < 4)
    return word;

  if (/\W/.test(word)) {
    var idx = word.search(/\W/);
    var a = word.slice(0, idx);
    var b = word.slice(idx + 1);

    return jumbleWord(a) + word[idx] + jumbleWord(b);
  }

	return word[0] 
		+ anagram(word.slice(1, word.length - 1)) 
		+ word[word.length-1];
}

function anagram(word) {
  if (word.lenght < 2)
    return word;

  if (word.length === 2)
    return word[1] + word[0];

	var letters = word.split('');
  letters.sort(function() { return Math.random() * 2 - 1; });
	var res = letters.join('');

  if (res === word)
    return anagram(word);

  return res;
}

module.exports = jumbleText;

