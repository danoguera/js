var decompressRLElist = function(nums) {
    let array = [];
    for (let i=0; i<nums.length; i += 2){
        for (let j=0; j<nums[i]; j++){
            array.push(nums[i+1]);
        }
    }
    return array;
};

console.log(decompressRLElist([1,2,3,4]));