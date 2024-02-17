// 카드 합체 놀이
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const cards = input[1].split(' ').map(Number);

  for (let i = 0; i < M; i++) {
    cards.sort((a, b) => a - b);
    const sum = cards[0] + cards[1]; // 두 카드를 합친 결과
    // 덮어씌우기
    cards[0] = sum;
    cards[1] = sum;
  }

  // 합치고 총 합 구하기
  const totalSum = cards.reduce((acc, cur) => acc + cur, 0);
  console.log(totalSum);
}

// 결과 출력
solution(input);
