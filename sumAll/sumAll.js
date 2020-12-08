const sumAll = function(num1,num2) {
    let sum = 0;
    let start =0;
    let end =  0;
    if (num1< num2)
    {
        start = num1;
        end = num2;
        sum += num2;
    }
    else {
        start = num2;
        end = num1;
        sum += num1;
    }
    if(start >= 0 && end >= 0 && Number.isInteger(start)&& Number.isInteger(end))
        for (let i = start;i<end;i++)
        {
        sum +=i;
        }
    else
    sum = "ERROR";
    
    
    return sum;
}

module.exports = sumAll
