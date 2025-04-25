let arr = []



let eins = document.getElementById("one")
let zwei = document.getElementById("two")
let drei = document.getElementById("three")
let vier = document.getElementById("four")

const number = Math.trunc(Math.random()*20) + 1;

while(arr.length < 4){

const number = Math.trunc(Math.random()*20) + 1;
  if(!arr.includes(number)){
  arr.push(number)
  }
}


[one,two,three,four] = arr
const answer = one;
console.log({answer})
console.log({arr})
let shuffledArr = arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
console.log({shuffledArr})
eins.innerHTML=`${one}`
zwei.innerHTML=`${two}`
drei.innerHTML=`${three}`
vier.innerHTML=`${four}`
