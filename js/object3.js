//object.js

let person = {
  name:'박민수',
  birth:'2000-04-05',
  blood:'A',
  showInfo:function(){ //객체소속의 함수 => 메소드
    console.log(`이름은 ${this.name} 이고, 생일은${this.birth}입니다`)
  }
}

// person.showInfo();

// Math.round(12.5);
// Math.random();
// console.log(Math.PI)

// for(let i = 1;i <=5; i++){
//   console.log(parseInt(Math.random()*10+1))
// }

//반복문 포,와일
// let i=0;
// while(i<5){
//   console.log(i)
//   i++;
// }

// while(true){
//   console.log(i++)
//   if(parseInt(Math.random()*10+1)==5){
//     break;
//   }
// }
i=0
// 임의의 문자를 입력 = > 콘솔에다 당신이 입력한 문자는 ??? 입니다
while(true){
  let a = prompt('문자를 입력해 주세요ㅕㅕ 종료를 누르면 멈춤니다............................................')
  console.log(`당신이 입력한 문자는 ${a}입니다`)
  i++
  if(a=='종료'|| i == 5){
    break;
  }

}

