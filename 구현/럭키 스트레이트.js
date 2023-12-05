// 럭키 스트레이트
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 입력
rl.question('점수를 입력하세요: ', (input) => {
  // 점수입력
  const N = input.split('').map(Number);

  // 왼쪽과 오른쪽 분할.
  let left = 0;
  let right = 0;

  // 입력된 배열의 길이
  const length = N.length;

  // 배열을 반복하면서 왼쪽과 오른쪽 합계 저장
  for (let i = 0; i < length; i++) {
    if (i < ~~(length / 2)) {
      left += N[i];
    } else {
      right += N[i];
    }
  }
  // 왼쪽 합계와 오른쪽 합계가 같으면 "LUCKY" 출력, 아니면 "READY" 출력
  if (left === right) {
    console.log('LUCKY');
  } else {
    console.log('READY');
  }
  rl.close();
});
