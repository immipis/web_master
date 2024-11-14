//builtIn.js 내장객채
//날자 date 객체

let today = new Date();

today.setFullYear(2023);
today.setMonth(4)
today.setDate(31)

console.log(showTime(today));
// console.log(`년 :${today.getFullYear()}, 월 : ${today.getMonth()+1}, 날짜 ${today.getDate()}, 요일 ${today.getDay()}`)
// today.getHours() + today.getMinutes() + today.getSeconds();

function showTime(time = new Date()) {
  // 2024 -11 -14 14:22:13
  let yyyy = time.getFullYear();
  let MM = time.getMonth() + 1;
  let dd = time.getDate();
  let day = time.getDay()
  let days = ['ㅇㅝㄹ','ㅎㅘ','ㅅㅜ','ㅁㅗㄱ','ㄱㅡㅁ','ㅌㅗ','ㅇㅣㄹ']

  let HH = today.getHours();
  let mm = today.getMinutes()
  let ss = today.getSeconds();

  ss = ('' + ss).length == 1 ? '0' + ss : ss
  return `${yyyy}-${MM}-${dd} ${HH}:${mm}:${ss} ${days[day]}`
}
