

document.querySelector('button.btn.btn-primary')
  .addEventListener('click', (e) => {

    let fname = document.querySelector('input[name="friendName"]').value;
    let ftel = document.querySelector('input[name="friendPhone"]').value;
    let fbirth = document.querySelector('input[name="friendBirth"]').value;
    let fblood = document.querySelector('select[name="friendBloodType"]').value;
    console.log(fblood)

    if (!fname || !ftel || !fbirth || !fblood) {
      alert('필수값을 입력하세요');
      return;
    }
    let param = {
      name: fname,
      phone: ftel,
      birth: fbirth,
      blood: fblood
    }

    let tr = makeRow(param);
    document.querySelector('#list').appendChild(tr);

    document.querySelector('input[name="friendName"]').value = '';
    document.querySelector('input[name="friendPhone"]').value = '';
    document.querySelector('input[name="friendBirth"]').value = '';
    document.querySelector('select[name="friendBloodType"]').value = 'A';
  });

document.querySelector('button.btn.btn-warning')
  .addEventListener('click', (e) => {
    let listTr = document.querySelectorAll('#list tr')
    let name = document.querySelector('input[name="friendName"]').value
    let tel = document.querySelector('input[name="friendPhone"]').value
    let birth = document.querySelector('input[name="friendBirth"]').value
    let blood = document.querySelector('select[name="friendBloodType"]').value
    for (let i = 0; i < listTr.length; i++) {
      if (listTr[i].children[1].innerHTML == name) {
        listTr[i].children[2].innerHTML = tel
        listTr[i].children[3].innerHTML = birth
        listTr[i].children[4].innerHTML = blood
      }
    }
  })

document.querySelector('button.btn.btn-danger')
  .addEventListener('click', (e) => {

    document.querySelectorAll('#list input[type="checkbox"]').forEach((item) => {
      if (item.checked) {
        item.parentElement.parentElement.remove()
      }
    });
  })
document.querySelector('thead input[type="checkbox"]').addEventListener('change', (e) => {
  document.querySelectorAll('tbody input[type="checkbox"]').forEach(element => {
    element.checked = e.target.checked
  });
})

document.querySelector('button.btn.btn-info').addEventListener('click', (e) => {
  let ary = []
  document.querySelectorAll('#list tr').forEach(item =>{
    let name = item.children[1].innerHTML;
    let phone = item.children[2].innerHTML;
    let birth = item.children[3].innerHTML;
    let btype = item.children[4].innerHTML;
    let obj = {name,phone,birth,btype}
    console.log(obj)
    ary.push(obj)
  });
  console.log(ary)

  
  let json = JSON.stringify(ary)
  localStorage.setItem("friendList",json)
  console.log(json)
})