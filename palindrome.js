// Kas sõne "word" on palindroom või mitte
word = 'aias sadas saia'.toLowerCase();
drow = word
  .split('')
  .reverse('')
  .join('');
console.log('Etteantud: ', drow);
if (drow === word) {
  console.log('See on palindroom');
} else {
  console.log('See ei ole palindroom');
}
