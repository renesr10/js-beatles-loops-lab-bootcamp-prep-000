// add solution here
function theBeatlesPlay(musicians, instruments) { var array = []; for (let i = 0; i < musicians.length; i++)
   { array.push(musicians[i] + ' plays ' + instruments[i]) }
  return array; 
}
function johnLennonFacts(facts) { 
  var results = [];
  var n = 0;
  while (n < facts.length) { 
  results.push(facts[n++] + "!!!"); 
}
return results;
}
function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
} while (n < 15);
return array;
}

