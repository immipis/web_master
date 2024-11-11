//변수 . 메모리 주소 (23dfa3423432)이런 곳에 이름을 작성하는 곳
// let / var 차이 var가 자유로움

let name = "홍길동";
var age = 20;

//console.log(age);
//console.log(name);

// let name = "김길동";//개발자: 에러날 수 있는 코드 확인.
var age = 30;
//console.log(age);
//console.log(name);

age = 40;
//console.log(age);

//변수 : 값을 담을 수 있는 유형. 데이터 타입.
let num = 10; //number 타임
let yorn = true; //boolean 타입
let str ='str' //string 타입

//console.log(typeof(num));
//console.log(typeof(yorn));
//console.log(typeof(str));

//원시 데이터 타입 vs. 복합 데이터 타입.

let obj = {
  name : "홍길동",
  age : 20,
  height : 170
}
//console.log(obj);
//console.log(typeof(obj));

num = 20;
isOk = false;
str = '김길동';

obj.name = "김길동";
//console.log(obj);
// obj = {age:50};
//console.log(obj);

num = true;
isOk = 30;
name = 87;

const num1 = 10;
//console.log(num1);
// num1 = 20;
// //console.log(num1);

const PI = 3.14; //변하지 않는값.
//console.log(2*4**4*PI);

let countPerStudent = 5;
let avaeger_per_student = 4;

// 변수 : 연산가능.
let number1 = 100;
let result = 10;
let message = "Welcome";

result = message + (number1 + 20);//concatenate

result = message - number1; // NaN not a number

//console.log(typeof result);
let inputValue = prompt('인덱스를 입력 하시오');
//console.log(message + inputValue);

// document.write('<h1>'+message + inputValue+'</h1>');
let num2 = 0,friendsName="",over30=false;
let friends = null;22
freiends=['김길동','이길동','최길동'];//{name:'홍길동',age:20} 
console.log(typeof friends);
console.log('이름은',obj.name,'나이는',obj['age']+'살입니다');
console.log(freiends[0]); // 배열의 순번(인덱스) 0부터 시작.
console.log(inputValue+'번쨰 인덱스의 이름은'+freiends[inputValue]);


