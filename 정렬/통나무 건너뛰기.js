// 통나무 건너뛰기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 입력의 두 번째 줄부터 각각의 테스트 케이스에 대한 처리를 수행합니다.
// i를 1부터 시작하여 input 배열의 길이보다 작을 때까지 반복합니다.
for (let i = 1; i < input.length; i++) {
  // 통나무 개수
  const N = Number(input[i++]);
  // 통나무의 높이
  const heights = input[i].split(' ').map(Number);
  // 결과 출력
  console.log(solution(N, heights));
}

function solution(N, heights) {
  // 정렬
  heights.sort((a, b) => a - b);
  // 최대 차이값
  let answer = 0;
  // 최대 차이값 갱신
  for (let i = 2; i < N; i++) {
    answer = Math.max(answer, Math.abs(heights[i] - heights[i - 2]));
  }
  return answer;
}
