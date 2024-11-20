bookList.forEach(e => {
  document.querySelector('#list').appendChild(makeRow(e));
});

function makeRow(bookList = {
  bookCode,
  bookName,
  author,
  press,
  price
}) {
  //체크박스 만들기
  let tr = document.createElement('tr');
  tr.setAttribute("style", "border: 1px solid black;")
  let td = document.createElement('td');
  let cb = document.createElement('input');
  cb.setAttribute("type", "checkbox");
  cb.addEventListener('click', (e) => e.stopPropagation());
  cb.addEventListener('change', (e) => {
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    let chksd = document.querySelectorAll('tbody input[type="checkbox"]:checked');
    document.querySelector('thead input[type="checkbox"]').checked = chks.length == chksd.length
  });
  td.appendChild(cb);
  tr.appendChild(td);

  //내용물 만들기
  for (let prop in bookList) {
    let td = document.createElement('td');
    
    let bn = bookList[prop];
    td.innerHTML = bn;
    tr.appendChild(td);
  }

  //삭제버튼 만들기
  td = document.createElement('td');
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';

  btn.addEventListener('click', e => {
    e.target.parentElement.parentElement.remove();
    e.stopPropagation();
  })
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
}

document.querySelector('#save').addEventListener('click', (e) => {
  console.log('저장버튼눌림')
  let bookCode = document.querySelector('input[name="bookCode"]').value;
  let bookName = document.querySelector('input[name="bookName"]').value;
  let author = document.querySelector('input[name="author"]').value;
  let press = document.querySelector('input[name="press"]').value;
  let price = document.querySelector('input[name="price"]').value;

  if (!bookCode || !bookName || !author || !press || !price) {
    alert('필수값을 입력하세요');
    return;
  }
  let bookinfo = {
    bookCode,
    bookName,
    author,
    press,
    price
  }

  let bookinfos = makeRow(bookinfo);
  document.querySelector('#list').appendChild(bookinfos);

  document.querySelector('input[name="bookCode"]').value = '';
  document.querySelector('input[name="bookName"]').value = '';
  document.querySelector('input[name="author"]').value = '';
  document.querySelector('input[name="press"]').value = '';
  document.querySelector('input[name="price"]').value = '';
});

document.querySelector('thead input[type="checkbox"]').addEventListener('change', (e) => {
  document.querySelectorAll('tbody input[type="checkbox"]').forEach(element => {
    element.checked = e.target.checked
  });
})

document.querySelector('#cdel').addEventListener('click',(e)=>{
  document.querySelectorAll('tbody input[type="checkbox"]').forEach(element => {
    if(element.checked){
      element.parentElement.parentElement.remove()
    }
  });
})
