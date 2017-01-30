let arr2=[]

arrAdd(arr2)

function arrAdd(arr2)
{
    arr2.push(4,5,6)
    console.log("Initial values",arr2)
    let i =0
    while(i<arr2.length)
    {
        arr2[i]=arr2[i]+2
        i++
    }
   console.log("final values",arr2)
}