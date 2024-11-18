// exe1.js

console.log('exe1.js 입니다');
let numberAry = [10,22,39,84];

let param1 = prompt('1 번째 인덱스를 입력하세요[0 ~ 3]');
let param2 = prompt('2 번째 인덱스를 입력하세요[0 ~ 3]');

let result = 0;
result = numberAry[param1] + numberAry[param2]
console.log(numberAry[param1]+' + '+numberAry[param2]+' = '+result);