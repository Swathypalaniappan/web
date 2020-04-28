var number = 194 ,sum = 0;

while(number != 0)
{
    let reminder = number % 10;
    sum = sum + reminder;
    number = Math.floor(number / 10);
}
console.log("The sum of the digits is " + sum);