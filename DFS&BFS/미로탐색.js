// 미로 탐색
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

// 상하좌우
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

// 그래프
const graph = [];
for (let i = 1; i <= N; i++) {
  graph.push(input[i].split('').map(Number));
}

// BFS
function bfs(x, y) {
  const queue = [];
  queue.push([x, y]);

  // 큐가 빌 때까지 반복 수행
  while (queue.length > 0) {
    [x, y] = queue.shift();

    // 사분면 확인
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 예외
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
        continue;
      }

      // 벽 무시
      if (graph[nx][ny] === 0) {
        continue;
      }

      // 처음 방문 시 최단기록 갱신
      if (graph[nx][ny] === 1) {
        queue.push([nx, ny]);
        graph[nx][ny] = graph[x][y] + 1;
      }
    }
  }

  // 최단 거리 리턴
  return graph[N - 1][M - 1];
}

// 결과 출력
console.log(bfs(0, 0));
