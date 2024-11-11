// exe3.js
let question = prompt('문제번호');

switch (question) {
  case '1':
    let birhtyear = prompt('출생년도');
    alert(2024 - birhtyear + '살');
    break;
  case '2':
    let w = prompt('가로');
    let h = prompt('세로');
    alert('너비' + (w * h));
    break;
  case '3':
    let a = prompt('1번숫자');
    let b = prompt('2번숫자');
    let c = prompt('3번숫자');
    let bign = 0, sman = 0;
    
    if (a > b) {
      if (b > c) {
        bign = a;
        sman = c;
      }
      else if (c > b) {
        if (a > c) {
          bign = a;
          sman = b;
        }
        else if (c > a) {
          bign = c;
          sman = b;
        }
      }
    }
    else if (b > a) {
      if (a > c) {
        bign = b;
        sman = c;
      }
      else if (c > a) {
        if (b > c) {
          bign = b;
          sman = a;
        }
        else if (c > b) {
          bign = c;
          sman = a;
        }
      }
    }
    console.log('젤 큰숫자 ' + bign + ' 젤 작은숫자 ' + sman);
}
