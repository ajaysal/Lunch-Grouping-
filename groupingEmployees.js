function getDuplicates(names) {
    var sortedn = names.sort();
    var dupn = [];
    for (var i = 0; i < sortedn.length; i++) {
        if (sortedn[i] === sortedn[i + 1]) {
            var dupemlent = sortedn.splice(i, 1);
            dupn.push(dupemlent[0]);
            i--;
        }
    }
    return dupn;
}

function shuffleEmployees(employees) {
  var currentIndex = employees.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = employees[currentIndex];
    employees[currentIndex] = employees[randomIndex];
    employees[randomIndex] = temporaryValue;
  }

  return employees;
}


var names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Carl', 'AJ', 'sid', 'jeff', 'lisa', 'hero', 'jazz'];
var dupArray = getDuplicates(names);
shuffleEmployees(names);
var n = names.length
var g = parseInt(n / 3);
var r = n % 3;

if (r === 1) {
    dupArray.push(names[names.length - 1]);
}
if (r === 2) {
    dupArray.push(names[names.length - 1]);
    dupArray.push(names[names.length - 2]);
}

var s = [];
for (var i = 0; i < g; i++) {
    s[i] = [];
}
for (var j = 0; j < names.length; j++) {
    for (var k = 0; k < g; k++) {
        while (s[k].length < 3) {
            s[k].push(names[j]);
            j++;
        }
    }

}

for (var i = 0; i < g; i++) {
    for (var k = 0; k < dupArray.length; k++) {
        if (s[i].indexOf(dupArray[k]) === -1 && s[i].length < 5) {
            var adde = dupArray.splice(k, 1);
            s[i].push(adde[0]);
            k--;
        }
    }
}
console.log(s);
