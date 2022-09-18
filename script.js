// Первое задание

do {
  var a = +prompt('введите число');
} while (isNaN(a) || a === 0);
do {
  var b = +prompt('введите степень');
} while (isNaN(b) || b === 0)

var answer = 1;

for (let i = 0; i < b; i++) {
  answer = answer * a;
}

alert(answer);

// Второе задание

// do {
//   var num = +prompt('Введите максимальное количество ступенек')
// } while (isNaN(num) || num == 0);

// do {
//   var sym = prompt('Введите символы отступов')
// } while (sym == '');
// do {
//   var fsym = prompt('Введите конечный символ')
// } while (sym == '');

// for (let i = 0; i < num; i++) {
//   fsym = i == 0 ? fsym : sym + fsym;
//   console.log(fsym);
// }