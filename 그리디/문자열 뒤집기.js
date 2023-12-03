// 문자열 뒤집기
const readline = require('readline');

// readline 모듈을 사용하여 사용자 입력을 처리하는 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 입력값을 받기 위한 배열
let num = '';

// 사용자에게 숫자를 입력하도록 요청하고, 입력값을 처리하는 콜백 함수
rl.question('숫자를 입력하시오 : ', (input) => {
  // 입력값을 문자열로 변환하고 앞뒤 공백을 제거하여 변수에 저장
  num = input.trim();

  // 0으로 split하여 각 부분의 길이계산
  const one = num.split('0').filter((num) => num !== '');

  // 1로 split하여 각 부분의 길이계산
  const zero = num.split('1').filter((num) => num !== '');

  // 결과 출력: 0으로 묶은 것과 1로 묶은 것 중에서 최소 횟수를 출력
  console.log(Math.min(one.length, zero.length));

  rl.close();
});

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // 입력값을 받기 위한 변수
// let num = '';

// rl.question('숫자를 입력하세요: ', (input) => {
//   num = input.trim(); // 입력값의 앞뒤 공백을 제거하고 변수에 저장

//   // 연속된 부분을 뒤집어야 하는 최소 횟수 계산하는 함수
//   function flip(s) {
//     let count = 0;

//     // 문자열을 순회하면서 연속된 숫자 그룹을 찾음
//     for (let i = 0; i < s.length - 1; i++) {
//       if (s[i] !== s[i + 1]) {
//         // 현재 숫자와 다음 숫자가 다르면 뒤집어야 함
//         count++;
//         i++; // 다음 숫자로 이동
//       }
//     }

//     return count;
//   }

//   // 0으로 묶은 것과 1로 묶은 것 중에서 최소 횟수를 출력
//   console.log(flip(num));

//   rl.close(); // readline 인터페이스를 닫음
// });
