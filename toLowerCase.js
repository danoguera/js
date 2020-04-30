var toLowerCase = function(str) {
    let string = '';
    for(let i=0; i<str.length; i++){
        const value = str.charCodeAt(i);
        if (value >= 65 && value <= 90){
            string += String.fromCharCode(value + 32);
        } else{
            string += str.charAt(i);
        }
    }
    return string;
};

console.log(toLowerCase("Hola"));