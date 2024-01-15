// 시리얼 번호
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);
const serialNum = input.slice(1);

// 정렬
function compareSerialNum(a, b) {
  // 길이가 다르면 짧은게 먼저 나옴
  if (a.length !== b.length) {
    return a.length - b.length;
  }

  // 시리얼 번호들의 자리수 합 비교
  const sumA = calculateSum(a);
  const sumB = calculateSum(b);
  if (sumA === sumB) {
    return a.localeCompare(b);
  } else {
    return sumA - sumB;
  }
}

// 자리수의 합을 계산하는 함수
function calculateSum(str) {
  let sum = 0;
  // 문자열의 각 자리수 확인
  for (let i = 0; i < str.length; i++) {
    // 현재 문자가 숫자인지 확인
    if (!isNaN(parseInt(str[i]))) {
      // 숫자일 경우에만 더함
      sum += parseInt(str[i]);
    }
  }

  return sum; // 합 리턴
}

// 시리얼 번호 정렬
const sortedSerialNum = serialNum.sort(compareSerialNum);

//결과 출력
console.log(sortedSerialNum.join('\n'));
