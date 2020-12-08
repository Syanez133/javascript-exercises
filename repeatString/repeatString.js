const repeatString = function(word,count) {
let finishedWord ='';
if(count < 0)
finishedWord = "ERROR"
for(let i =0;i<count;i++){
    finishedWord += word;
}
return finishedWord;
}

module.exports = repeatString
