function hash(strInput)
{
	var inputs = [];
    var nResult = 7;
    var strKey = "acdfgilmnoprstuw";
    for(var i = 0; i < strInput.length; i++)
    {
        var nIndex = strKey.indexOf(strInput[i]);
        inputs.push(strInput[i]);
        if(nIndex == -1)
        {
            nResult = -1;
            break;
        }        
        nResult = (nResult * 23 + nIndex);
        // console.log(`Input: ${inputs.join('')} Result: ${nResult}`);
    }
    if(nResult == -1)
    {
        return "The word should only contain letters in " + strKey;    
    }
    return nResult;
}

function unhash(number){	
    let strKey = "acdfgilmnoprstuw";
    let results = [];

    number = number * 23;
	while(number>7)
	{
		number = parseInt((number / 23));
        results.push(number);
	}
    results.push(7)
    return results.reverse().map((result,key) => {
        let x = result;
        let n = results[key+1];
        return strKey[n - (x * 23)];
    }).join('');
}

console.log(hash('tortilla'));
console.log(unhash(593846452632))
console.log(unhash(292681030017238));
console.log(unhash(hash("tortilla")));
console.assert("tortilla" == unhash(hash("tortilla")));