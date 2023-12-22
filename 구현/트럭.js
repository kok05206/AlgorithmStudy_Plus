const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [N, W, L] = input[0].split(' ').map(Number);

// 트럭무게
let trucks = input[1].split(' ').map(Number);
// 다리길이
let bridge = Array(W).fill(0);

// 현재 다리위의 트럭무게(weight), 최단시간(time)변수 초기화
let weight = 0;
let time = 0;

while (true) {
  // 다리를 건넌 트럭은 제거
  let pass = bridge.shift();
  weight -= pass;

  // 남은 트럭 정리
  if (trucks.length > 0) {
    // 현재 다리위 트럭과 새로 들어올 트럭의 무게의 합이 L보다 작거나 같으면 투입
    if (weight + trucks[0] <= L) {
      bridge.push(trucks[0]);
      weight += trucks[0];
      trucks.shift();
    }
    // 못올리는 경우
    else {
      bridge.push(0); // 트럭이동
    }
  }

  time += 1; // 최단시간 증가

  // 다리에 트럭도 없고, 대기중인 트럭도 없으면 반복문 탈출
  if (bridge.length === 0 && trucks.length === 0) {
    break;
  }
}
// 결과 출력
console.log(time);
