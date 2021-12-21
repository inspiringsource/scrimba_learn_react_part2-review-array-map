const nums = [1, 2, 3, 4, 5]
const answer = []

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] * nums[i]);
    answer.push(nums[i] * nums[i]);
}
console.log(answer);