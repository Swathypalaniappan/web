var str = "madam",len=str.length-1;
 let j,i = 0,flag=0;

for( j = str.length;i < j ;j--)
{
    if(str[i] != str[len-i])
    {
        flag++;
        break;
    }
}
if (flag == 0)
{
    console.log("The string " + str + " is palindrome." );
}
else{
    console.log("The string " + str +" is not palindrome." );
}


