let arr2=[]

    loopArr(arr2)
    
    function loopArr(arr2)
    {
        arr2.push(1, 2, 'java')
        
        for(let a=0; a<arr2.length; a++)
        {
            console.log('index value' + a + ':' , arr2[a])
        }
    }