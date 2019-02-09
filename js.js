"use strict"

const btnShow = document.getElementById('btnTrim');
const btnDelete = document.getElementById('btnDelete');
const counteChars = document.getElementById('counteChars');
const showRes = document.getElementById('result');
const numberOfChar = document.getElementById('numberOfChar');


btnShow.addEventListener('click',function(){
	let valueArea = document.getElementById('area').value;
  console.log(valueArea);
  var regex = new RegExp(',', 'g');
  let outKoma = valueArea.replace(regex, '');
	outKoma = outKoma.split(" ");
	let upperArray = [];
 for (let text of outKoma) {
    upperArray.push(text.charAt(0).toUpperCase() + text.substr(1));
}
 let trimed = upperArray.filter(function(item, pos) {
    return upperArray.indexOf(item) == pos;
})
  let trimedString = trimed.join(' ')
 	showRes.innerHTML = trimedString;
  numberOfChar.innerHTML = trimedString.length;
})

btnDelete.addEventListener('click', ()=>{
  console.log('usuwa')
  let valueArea = document.getElementById('area');
  valueArea.value = "";
  showRes.innerHTML = "";
  numberOfChar.innerHTML = 0;
})

counteChars.addEventListener('click', ()=>{
  let valueArea = document.getElementById('area').value;
  numberOfChar.innerHTML = valueArea.length;
})



