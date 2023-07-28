//문제 1. 배열의 삭제
// 다음 배열에서 400,500을 삭제

var nums = [100, 200, 300, 400, 500];

let elementDelete = [400, 500];

const Array = nums.filter((item) => item !== 400 && item !== 500);
console.log(Array);

//문제 2.배열의 내장함수

var arr = [200, 100, 300];
//pass <내장함수 이용하기>
console.log(arr);

arr.splice(2, 0, 10000);

//문제 3. 변수의 타입
//다음 출력 값으로 올바른 것은?

var arr1 = [100, 200, 300];
console.log(typeof arr);
//object /  undefined, string, number 는 모두 기본 자료형(primitive type)
