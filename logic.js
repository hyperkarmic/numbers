let arr = [];

//const checkAnswer = () =>{
//if (answer === )
//}

let eins = document.getElementById("one");
eins.addEventListener("click", () => {
  if (answer === shuffledArr[0]) {
    console.log("correct");
    return;
  }
  console.log("wrong");
  return;
});

let zwei = document.getElementById("two");
zwei.addEventListener("click", () => {
  if (answer === shuffledArr[1]) {
    console.log("correct");
    return;
  }
  console.log("wrong");
  return;
});
let drei = document.getElementById("three");
drei.addEventListener("click", () => {
  if (answer === shuffledArr[2]) {
    console.log("correct");
    return;
  }
  console.log("wrong");
  return;
});
let vier = document.getElementById("four");
vier.addEventListener("click", () => {
  if (answer === shuffledArr[3]) {
    console.log("correct");
    return;
  }
  console.log("wrong");
  return;
});

const number = Math.trunc(Math.random() * 20) + 1;

while (arr.length < 4) {
  const number = Math.trunc(Math.random() * 20) + 1;
  arr.push(number);
  if (!arr.includes(number)) {
  }
}

[one, two, three, four] = arr;
const answer = one;
if (answer === 1) {
  var audioElement = new Audio("numbers/1.mp3");
  audioElement.play();
}
if (answer === 2) {
  var audioElement = new Audio("numbers/2.mp3");
  audioElement.play();
}
if (answer === 3) {
  var audioElement = new Audio("numbers/3.mp3");
  audioElement.play();
}
if (answer === 4) {
  var audioElement = new Audio("numbers/4.mp3");
  audioElement.play();
}
if (answer === 5) {
  var audioElement = new Audio("numbers/5.mp3");
  audioElement.play();
}
if (answer === 6) {
  var audioElement = new Audio("numbers/6.mp3");
  audioElement.play();
}
if (answer === 7) {
  var audioElement = new Audio("numbers/7.mp3");
  audioElement.play();
}
if (answer === 8) {
  var audioElement = new Audio("numbers/8.mp3");
  audioElement.play();
}
if (answer === 9) {
  var audioElement = new Audio("numbers/9.mp3");
  audioElement.play();
}
if (answer === 10) {
  var audioElement = new Audio("numbers/10.mp3");
  audioElement.play();
}
if (answer === 11) {
  var audioElement = new Audio("numbers/11.mp3");
  audioElement.play();
}
if (answer === 12) {
  var audioElement = new Audio("numbers/12.mp3");
  audioElement.play();
}
if (answer === 13) {
  var audioElement = new Audio("numbers/13.mp3");
  audioElement.play();
}
if (answer === 14) {
  var audioElement = new Audio("numbers/14.mp3");
  audioElement.play();
}
if (answer === 15) {
  var audioElement = new Audio("numbers/15.mp3");
  audioElement.play();
}
if (answer === 16) {
  var audioElement = new Audio("numbers/16.mp3");
  audioElement.play();
}
if (answer === 17) {
  var audioElement = new Audio("numbers/17.mp3");
  audioElement.play();
}
if (answer === 18) {
  var audioElement = new Audio("numbers/18.mp3");
  audioElement.play();
}
if (answer === 19) {
  var audioElement = new Audio("numbers/19.mp3");
  audioElement.play();
}
if (answer === 20) {
  var audioElement = new Audio("numbers/20.mp3");
  audioElement.play();
}

console.log({ answer });
console.log({ arr });
let shuffledArr = arr
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
console.log({ shuffledArr });
eins.innerHTML = `${one}`;
zwei.innerHTML = `${two}`;
drei.innerHTML = `${three}`;
vier.innerHTML = `${four}`;
