var number = 1634,sum = 0,count=0;
var original = number;
while(number > 0)
{
    number = Math.floor(number/10);
    //console.log(number)
    count++;
}
//console.log(count);
number = original;
while(number > 0)
{
    let reminder = number % 10;
    sum += (reminder**count);
    number = Math.floor(number/10);
}
if(original == sum)
{
    console.log("The given number " + original + " is armstrong number");
}
else{
    console.log("The given number " + original + " is not an armstrong number");
}