// 줄세우기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 테스트 케이스
const P = parseInt(input[0]);

for (let tc = 1; tc <= P; tc++) {
  // 학생들의 키 입력
  const lst = input[tc].split(' ').slice(1).map(Number);

  let cnt = 0; // 물러난 걸음 수
  for (let i = 1; i < 20; i++) {
    for (let j = 0; j < i; j++) {
      // 앞에 놈이 나보다 크면
      if (lst[i] < lst[j]) {
        cnt += 1; // 물러난 걸음 수 증가
      }
    }
  }
  // 결과 출력
  console.log(`${tc} ${cnt}`);
}
