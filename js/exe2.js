//exe2.js 입니다
// 조건문 문제 풀기

let number1 = 30;

let inpV = prompt('숫자를 입력하세요 0~ 100');

if (inpV > 100 || inpV < 0){
  alert('0~100 사이의 값을 입력하세요');
}
else if(inpV > number1){
  alert(inpV+'는'+number1+'보다 큽니다.');
}
else if(inpV == number1){
  alert(inpV+'는'+number1+'와 같습니다.');
}
else {
  alert(inpV+'는'+number1+'보다 작습니다.');
}
