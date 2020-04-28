var number = 546 ,reverse = 0;

while(number != 0)
{
    let reminder = number % 10;
    //console.log(reminder);
    reverse = (reverse * 10) + reminder;
    //console.log(sum);
    number=Math.floor(number/10);
}
console.log("The reverse of the number is " + reverse);