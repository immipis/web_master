// friend.js

//this => 함수일 경우 :window 객체, 이벤트핸들러 : 이벤트대상, object : 객체자신.






function makeRow(friendInfo = { name, phone, birth, type }) {
  //이름, 연락처, 생일. => tr 생성한 후 tr을 반환.
  let tr = document.createElement('tr');
  tr.addEventListener('click', function (e) {
    console.log(this.children[0].innerHTML)
    document.querySelector('input[name="friendName"]').value = this.children[1].innerHTML;
    document.querySelector('input[name="friendPhone"]').value = this.children[2].innerHTML;
    document.querySelector('input[name="friendBirth"]').value = this.children[3].innerHTML;
    document.querySelector('select[name="friendBloodType"]').value = this.children[4].innerHTML;

  })
  // <td><input type="checkbox"></td>
  let td = document.createElement('td');
  let btn = document.createElement('input');
  btn.setAttribute('type', 'checkbox')
  td.appendChild(btn);
  tr.appendChild(td);

  for (let prop in friendInfo) {
    let td = document.createElement('td');
    let fname = friendInfo[prop];
    td.innerHTML = fname;
    tr.appendChild(td)
  }
  td = document.createElement('td');
  btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.setAttribute('class', 'btn btn-danger');
  btn.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.remove();
  })
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
}



//data.js.가 친구정보를 4개를 가지고 있다
console.log(friendList);
// 배열을 활용해서 친구목록을 출력.
friendList.forEach(function (friend) {
  document.querySelector('#list').appendChild(makeRow(friend))
});


// 추가버튼에 이벤트를 등록함
document.querySelector('button.btn.btn-primary').addEventListener('click', (e) => {
  let fname = document.querySelector('input[name="friendName"]').value;
  let fphone = document.querySelector('input[name="friendPhone"]').value;
  let fbirth = document.querySelector('input[name="friendBirth"]').value;
  let ftype = document.querySelector('select[name="friendBloodType"]').value;
  if (!fname || !fphone || !fbirth || !ftype) {
    alert('필수값을 입력하세요.');
    return;
  }
  let param = { name: fname, phone: fphone, birth: fbirth, type: ftype }
  let tr = makeRow(param);
  document.querySelector('#list').appendChild(tr);


  document.querySelector('input[name="friendName"]').value = '';
  document.querySelector('input[name="friendPhone"]').value = '';
  document.querySelector('input[name="friendBirth"]').value = '';
  document.querySelector('select[name="friendBloodType"]').value = 'A';
});

// 수정버튼에 이벤트를 등록함
document.querySelector('button:nth-of-type(2)')
  .addEventListener('click', (e) => {
    let listTr = document.querySelectorAll('#list tr')
    let name = document.querySelector('input[name="friendName"]').value;
    let tel = document.querySelector('input[name="friendPhone"]').value;
    let birth = document.querySelector('input[name="friendBirth"]').value;
    let blood = document.querySelector('select[name="friendBloodType"]').value;
    for (let i = 0; i < listTr.length; i++) {
      if (listTr[i].children[1].innerHTML == name) {
        listTr[i].children[2].innerHTML = tel;
        listTr[i].children[3].innerHTML = birth;
        listTr[i].children[4].innerHTML = blood;
      }
    }
  })