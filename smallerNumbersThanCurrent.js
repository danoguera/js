var smallerNumbersThanCurrent = function(nums) {
    let array = [];
    for (let i=0; i<nums.length; i++){
      let cont = 0;
      for (let j=0; j<nums.length; j++){
        if (nums[i] > nums[j]){
          cont++;
        }
      }
      array.push(cont);
    }  
  return array;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));