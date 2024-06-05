
function reverse(str){
    let reverse="";
    for(let i =str.length - 1 ; i>=0;i--){
    reverse=reverse + str[i];
}
    return reverse;
}
console.log("Example 1 :46574849");
console.log( "Revers Output " + reverse(" 46574849"));

// q2)_______________________________________________________
function loop(){
    for(let i=0;i<=15;i++){
        if(i % 2 == 0){
            console.log("the number is even: " + i);
        }else{
            console.log("the number is odd : " + i);
        }
    }
}
loop();

// q3)--------------------------------------------------------

function order(){
    let x="orange";
    return console.log(x.split("").sort().join(""));
    
}
order();
// q4)__________________________________________

let num = 25468;
let str = num.toString();
let result = [str[0]];
for(let i = 1; i<str.length;i++){
  if(str[i-1]%2==0 && str[i]%2==0){
    result.push('-',str[i]);
  }else{
    result.push(str[i]);
  }
}
console.log(result.join(''));




// q5)-----------------------------------------
function Agechecker(){
    let age =Number(prompt("Enter the number"))
    
    if(age>=18){
       alert("The user is Adult");
    }else{
        alert(" The user is Minor");
    }
}
Agechecker();