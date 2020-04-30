var createTargetArray = function(nums, index) {
    let array = [];
    for (let i=0; i < nums.length; i++){
        array.splice(index[i], 0, nums[i]);
    }
    return array;
};

console.log(createTargetArray([1], [0]));