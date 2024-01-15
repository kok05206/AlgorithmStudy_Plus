// 잃어버린 괄호
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 최솟값을 구해야하니까 '-'로 split
let input = fs.readFileSync(filePath).toString().trim().split('-');

function solution(arr) {
  // 배열이 비어있는 경우
  if (arr.length == 0) {
    return 0;
  } else {
    // '+'로 sjplit 후 합산
    return +arr.split('+').reduce((pre, cur) => +pre + +cur);
  }
}
// 결과 출력
console.log(
  input.reduce((prev, cur) => prev - solution(cur), solution(input[0]) * 2)
);
