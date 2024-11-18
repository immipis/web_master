//객체
let sum = 0;
let ary = []
let obj = {
  name: '홍길동',
  age: 20,
  height: 169.4
};
console.log(` 이름 ${obj.name} 나이 ${obj['age']} 키 ${obj.height}`)
obj.age = 21;
console.log(` 이름 ${obj.name} 나이 ${obj['age']} 키 ${obj.height}`)
// 오브젝트 타입의 속성을 반환 해주는 ㅁ반복문

for (let prop in obj) {
  console.log(`prop => ${prop}, 값 => ${obj[prop]}`)
}

//
ary.push(obj);
ary.push({ name: '김민식', age: 25, height: 190 });
ary.push({ name: '최홍식', age: 28, height: 160 });
console.log(ary)
let searchName = '홍길동';
let searchAge = 25;
//홍길동의 나이.
for (let i = 0; i < ary.length; i++) {
  sum += ary[i]['height']
}
console.log('평균',Math.round(sum/ary.length*100)/100)

console.log(Math.round(12.555*100)/100);
// console.log(ary[i].age)
// console.log(ary[i]['height'])