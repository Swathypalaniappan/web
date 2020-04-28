var number = 10;
for(let i=2;i<=number;i++)
{
    let flag=0;
    for(let j=1;j<=i;j++)
    {
           if(i%j == 0)
           {
               flag++;
           }
    }
    if(flag == 2)
        console.log(i);
}