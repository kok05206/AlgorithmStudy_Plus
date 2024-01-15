// 단지번호붙이기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(input.shift());

// 지도, 방문 여부
const board = input.map((row) => row.split('').map(Number));
const visited = Array.from(Array(N), () => Array(N).fill(false));

// 상하좌우
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

// 집, 단지 개수
let count_home = 0;
let count_complex = 0;

const answer = [];

// DFS
function dfs(x, y) {
  // 현재 위치에 집이 있고, 방문하지 않은 경우
  if (board[x][y] === 1 && visited[x][y] === 0) {
    visited[x][y] = 1; // 방문 처리
    count_home++; // 집 개수 증가

    // 상하좌우 탐색
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        dfs(nx, ny);
      }
    }
  }
}

// 지도를 모두 탐색하며 단지를 찾음
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // 집이 있고, 방문하지 않은 경우
    if (board[i][j] === 1 && visited[i][j] === 0) {
      dfs(i, j); // DFS 탐색
      count_complex++; // 단지 개수 증가
      answer.push(count_home); // 해당 단지의 집 개수를 배열에 저장
      count_home = 0; // 집 개수 초기화
    }
  }
}

// 결과 출력
console.log(count_complex + '\n' + `${answer.sort((a, b) => a - b).join('\n')}`);
