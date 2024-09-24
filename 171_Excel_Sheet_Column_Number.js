var titleToNumber = function(columnTitle) {
    let output = 0;
    for (const c of columnTitle) {
        console.log(c);
        console.log(output);
        console.log(output * 26);
        console.log(c.charCodeAt(0));
        console.log('A'.charCodeAt(0) + 1);
        console.log((c.charCodeAt(0) - 'A'.charCodeAt(0) + 1));
        
        output = output * 26 + (c.charCodeAt(0) - 'A'.charCodeAt(0) + 1);
        console.log(output);
        
    }
    console.log(output);
    
    return output;
};

const columnTitle = 'AB';

console.log(titleToNumber(columnTitle));