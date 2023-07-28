//문제 1. 배열의 삭제
// 다음 배열에서 400,500을 삭제

var nums = [100, 200, 300, 400, 500];

let elementDelete = [400, 500];

const Array = nums.filter((item) => item !== 400 && item !== 500);
console.log(Array);
