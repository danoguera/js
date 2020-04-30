var subtractProductAndSum = function(n) {
    let str = n.toString();
    let product = 1;
    let sum = 0;
    for(i=0; i<str.length; i++){
        let number = parseInt(str[i]);
        product *= number;
        sum += number;  
    }
    return product - sum;
};

console.log(subtractProductAndSum(4421));