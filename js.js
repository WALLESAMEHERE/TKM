"use strict"

const btnShow = document.getElementById('btnTrim');
const btnDelete = document.getElementById('btnDelete');
const counteChars = document.getElementById('counteChars');
const showRes = document.getElementById('result');
const showRescomma = document.getElementById('result_comma');
const numberOfChar = document.getElementById('numberOfChar');
const toLowerLetter = document.getElementById('toLowerLetter');
const toUpperLetter = document.getElementById('toUpperLetter');
const enterToComma = document.getElementById('enterToComma');

/*  var regexspace = valueArea.replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, ", ");*/

btnShow.addEventListener('click',function(){
	let valueArea = document.getElementById('area').value;
  console.log(valueArea);
  var regexspace = valueArea.replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, ", ");
  console.log(regexspace);
  var regex = new RegExp(',', 'g');
  let outKoma = regexspace.replace(regex, '');
  console.log(outKoma);
	outKoma = outKoma.split(" ");
    console.log(outKoma);
	let upperArray = [];
 for (let text of outKoma) {
    upperArray.push(text.charAt(0).toUpperCase() + text.substr(1));
}
 let trimed = upperArray.filter(function(item, pos) {
    return upperArray.indexOf(item) == pos;
})
  let trimedString = trimed.join(' ')
   showRes.innerHTML = trimedString;
   showRescomma.innerHTML = keywordsWithCommas();
  numberOfChar.innerHTML = trimedString.length;
})

btnDelete.addEventListener('click', ()=>{
  console.log('usuwa')
  let valueArea = document.getElementById('area');
  valueArea.value = "";
  numberOfChar.innerHTML = 0;
})

toLowerLetter.addEventListener('click', ()=>{
  let valueArea = document.getElementById('area').value;
  showRes.innerHTML = valueArea.toLowerCase();
})

toUpperLetter.addEventListener('click', ()=>{
  let valueArea = document.getElementById('area').value;
  showRes.innerHTML = valueArea.toUpperCase();
})

counteChars.addEventListener('click', ()=>{
  let valueArea = document.getElementById('area').value;
  numberOfChar.innerHTML = valueArea.length;
})

enterToComma.addEventListener('click', ()=>{
  
  showRescomma.innerHTML = keywordsWithCommas();
})

commaToEnter.addEventListener('click', ()=>{
  let valueArea = document.getElementById('area').value;
  var regexspace = valueArea.replace(/, /g, '\n');
  console.log(regexspace);
  showRes.innerHTML = regexspace;
})


let keywordsWithCommas = ()=>{
  let valueArea = document.getElementById('area').value;
  var regexspace = valueArea.replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, ", ");
  console.log(regexspace);
  return regexspace;
}







