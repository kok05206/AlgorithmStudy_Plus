// N과 M(1)
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
let result = '';
const combination = [];
const visited = new Array(N).fill(0);

function dfs(count) {
  // 만약 count가 M과 같다면, 현재까지의 조합을 결과 문자열에 추가하고 함수를 종료합니다.
  if (count === M) {
    result += `${combination.join(' ')}\n`;
    return;
  }
  // 1부터 N까지 반복
  for (let i = 0; i < N; i++) {
    // 만약 현재 숫자가 이미 방문했으면 다음 숫자로 이동
    if (visited[i] === 1) {
      continue;
    }
    // 현재 숫자를 방문 처리
    visited[i] = 1;
    // 현재 숫자를 조합 배열에 추가
    combination.push(i + 1);
    // 다음 숫자를 선택
    dfs(count + 1);
    // 마지막 숫자 제거
    combination.pop();
    // 방문 처리 해제
    visited[i] = 0;
  }
}
dfs(0);
// 결과 출력
console.log(result);
