// 1
// let pn = prompt('몇명');
// let pn2 = prompt('몇명씩');
// let pn3 = 0;
// let pn4 = 0;
// if(parseInt(pn%pn2) == 0){
//     pn3 = pn/pn2
//     pn4 = pn2
// }
// else{
//     pn3=parseInt(pn/pn2)+1
//     pn4 = pn%pn2
// }
// console.log(`입장인원은 ${pn} 이고 한줄에 ${pn2}명식 앉을경우 ${pn3} 줄이고 마지막 줄은 ${pn4}명입니다.`)

// 2 
// for (let i = 2; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         document.write(`<div>${i} * ${j} = ${i * j}</div>`)
//     }
// }

// [3번] [20, 17, 45, 11, 82] 의 배열을 오름차순으로 정렬
let a = [20, 17, 45, 11, 82];

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
        if (a[j] > a[j + 1]) {
            let c = a[j];
            a[j] = a[j + 1];
            a[j + 1] = c;
        }
    }
}
console.log(a)