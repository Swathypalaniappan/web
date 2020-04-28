var array = [100,49,29,45];
let i,j;

for(i=0;i<array.length;i++)
{
    for(j=0;j<array.length-i;j++)
    {
        if(array[j] > array[j+1])
        {
            let temp = array[j+1];
            array[j+1] = array[j];
            array[j] = temp;
        }
    }
}
console.log("The sorted order is " + array);
