//Basic calc program

let a=Number(prompt("Enter 1-add 2-sub 3-mul 4-div 5-rem:"))
switch(a){
    case 1:
        console.log(Number(prompt("num1:"))+Number(prompt("num2:")));
        break;
    case 2:
        console.log(Number(prompt("num1:"))-Number(prompt("num2:")));
        break;
    case 3:
        console.log(Number(prompt("num1:"))*Number(prompt("num2:")));
        break;
    case 4:
        console.log(Number(prompt("num1:"))/Number(prompt("num2:")));
        break;
    case 5:
        console.log(Number(prompt("num1:"))%Number(prompt("num2:")));
        break;
    default:
        console.log("Enter available choice")
}