// 게임을 만든 동준이
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
let [N, ...scores] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let answer = 0;

// 배열의 뒤에서 반복하면서 조건 확인
for (let i = N - 1; i > 0; i--) {
  // 이전값 >= 현재값 인 경우
  if (scores[i - 1] >= scores[i]) {
    //이전값과 현재값의 차이에 1을 더한 값을 더해줌
    answer += scores[i - 1] - scores[i] + 1;
    // 내림차순 유지!
    scores[i - 1] = scores[i] - 1;
  }
}
// 결과 출력
console.log(answer);
