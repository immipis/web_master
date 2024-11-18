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
    let num1 = Number(prompt('1번숫자'));
    let num2 = Number(prompt('2번숫자'));
    let num3 = Number(prompt('3번숫자'));

    //동일한 값이 있으면 처리 안함

    let max = 0, min = 0;
    if (num2 > num1) {
      if (num2 > num3) {
        max = num2;
        if (num1 > num3) {
          min = num3;
        }
        else{
          min = num1;
        }
      }
      else{
        max = num3;
        min = num1;
      }
    }
    else{
      if (num1 > num3) {
        max = num1;
        if (num2> num3) {
          min = num3;
        }
        else{
          min = num2;
        }
      }
      else{
        max = num3;
        min = num2;
      }
    }
    console.log('젤 큰숫자 ' + max + ' 젤 작은숫자 ' + min);
}

