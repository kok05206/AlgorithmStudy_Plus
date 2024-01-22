// 숫자카드 2
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
// 상근이 카드수
const N = Number(input[0]);
const cards = input[1].split(' ').map(Number); // 숫자 카드에 적혀있는 정수 리스트
const M = Number(input[2]); // 구해야 할 숫자의 개수
const numbers = input[3].split(' ').map(Number); // 구해야 할 숫자 리스트

// 카드의 개수를 세는 맵
const cardCounter = new Map();
for (const card of cards) {
  cardCounter.set(card, (cardCounter.get(card) || 0) + 1);
  // 이미 존재하는 카드인 경우 개수를 증가시키고, 존재하지 않는 경우 1로 초기화
}

const result = [];
for (const number of numbers) {
  result.push(String(cardCounter.get(number) || 0));
  // 맵에서 해당 숫자의 개수를 결과 배열에 추가
  // 숫자가 없는 경우에는 0
}

// 결과 출력
console.log(result.join(' '));
