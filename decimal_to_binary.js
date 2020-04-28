var decimal = 5;
var result = 0,i = 1;
while(decimal > 0)
{
    let reminder = decimal % 2;
    result = result + (reminder*i);
    i*=10;
    decimal = Math.floor(decimal/2);
}
console.log("The binary of the decimal number is " + result);