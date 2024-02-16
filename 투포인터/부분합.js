// 부분합
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, S] = input[0].split(' ').map(Number); // 첫 번째 줄에서 N과 S를 입력받음
const arr = input[1].split(' ').map(Number); // 두 번째 줄에서 배열의 요소들을 입력받음

let minLength = Infinity; // 최소 길이를 무한대로 초기화
let start = 0; // 시작 인덱스
let end = 0; // 끝 인덱스
let sum = 0; // 합계

while (start < N) {
  if (sum < S && end < N) {
    // 현재 합계가 목표 합보다 작고, end가 배열의 범위 안에 있는 경우
    // end를 한 칸 늘림
    sum += arr[end];
    end++;
  } else if (sum >= S) {
    // 현재 합계가 목표 합보다 크거나 같은 경우
    // start를 한 칸 늘림
    minLength = Math.min(minLength, end - start); // 최소 길이 갱신
    sum -= arr[start];
    start++;
  } else {
    // sum < S이고 end가 범위를 벗어난 경우
    break;
  }
}

// 최소 길이가 갱신되지 않았으면 0 출력, 그렇지 않으면 최소 길이 출력
console.log(minLength === Infinity ? 0 : minLength);
