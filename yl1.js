// Leia txt failis enim kasutatud täht/sümbol ja kuva see koos kogusega

var fs = require('fs');

var str = fs.readFile('article.txt', 'utf8', function(err, contents) {
  var ar = contents.toLowerCase().split(''),
    o = {};

  ar.forEach(function(w) {
    w.split('').forEach(function(e) {
      return (o[e] = (o[e] || 0) + 1);
    });
  });

  console.log(o);
});
