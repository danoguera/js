var findNumbers = function(nums) {
    let array = [];
    for (let i=0; i<nums.length; i++){
        if (nums[i].toString().length % 2 === 0){
            array.push([i]);
        }
    }
    return array.length;
};

console.log(findNumbers([555,901,482,1771]));