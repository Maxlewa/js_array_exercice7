// 1

var prenoms = ['louise', 'jamila', 'ayhan', 'maxence'];
console.log(prenoms);

console.log(prenoms[3]);
console.log(prenoms.length);

// 2

var monPrenom = ['maxence']
console.log(monPrenom);

monPrenom.push('alex');
console.log(monPrenom);

// 3

var classeCoding16 = ['ayhan']
classeCoding16.push('benedicte');
classeCoding16.push('louise', 'jamila');

classeCoding16.push('alex');
classeCoding16.pop('alex');

console.log(classeCoding16);

// BONUS

let tabBoucle = ["a", "b", "c"]

tabBoucle.forEach(element => {
    console.log(element);
});

