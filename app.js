// console.log("hello world");
// console.log("bdcsbcusdcbusdbcusdchud");
// console.log(732482374);

// data type: number, string, boolean

// var totalTheoryMarks = document.querySelector("#totalTheoryMarks");
// var totalPracticalMarks = document.querySelector("#totalPracticalMarks");
// var totalMarks = document.querySelector("#totalMarks");
// var percentageBox = document.querySelector("#percentageBox");


// Input
// var totalTheoryMarks = 400; // 500 >>> 400
// var totalPracticalMarks = 100; // 200 >>> 100
// var totalMarks = 700;

// Processing
// var totalMarksRaunit = totalTheoryMarks + totalPracticalMarks;
// var percentage = (totalMarksRaunit / totalMarks) * 100;
// console.log(percentage);


// Output
// percentageBox.innerText = percentage + "%";

// input
const btn = document.querySelector("#button");
var outputBox = document.querySelector("#outputBox");

// input
function collectingData () {
    let userName = prompt("Hello sir, what's your name?");
    // console.log(userName);
    outputBox.innerText = userName;
}



btn.addEventListener("click", collectingData);