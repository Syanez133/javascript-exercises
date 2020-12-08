const removeFromArray = function(arr, arg1, arg2 = false, arg3 = false, arg4 = false, arg5 = false) {
    if(arg1 != null)
    {
        const index = arr.indexOf(arg1);
        if (index > -1 )
        {
        arr.splice(index, 1);
        }
    }
    if(arg2 != null)
    {
        const index = arr.indexOf(arg2);
        if (index > -1 )
        {
        arr.splice(index, 1);
        }
    }
    if(arg3 != null)
    {
        const index = arr.indexOf(arg3);
        if (index > -1 )
        {
        arr.splice(index, 1);
        }
    }
    if(arg4 != null)
    {
        const index = arr.indexOf(arg4);
        if (index > -1 )
        {
        arr.splice(index, 1);
        }
    }
    if(arg5 != null)
    {
        const index = arr.indexOf(arg5);
        if (index > -1 )
        {
        arr.splice(index, 1);
        }
    }
    
    
    


return arr;
}

module.exports = removeFromArray
