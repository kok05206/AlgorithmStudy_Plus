// 숨바꼭질
const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const MAX = 100000;

// 수빈이, 동생 입력.
const [N, K] = input[0].split(' ').map(Number);
// 순간이동의 경우의 수 때문에 MAX값에 1을 더 해준다.
const visited = new Array(MAX + 1).fill(0);

// bfs
function bfs() {
  const queue = [];
  // 수빈이의 처음 위치
  queue.push(N);
  visited[N] = 1;
  // 큐가 빌 때까지 반복수행.
  while (queue.length > 0) {
    const x = queue.shift();
    // 동생 찾으면
    if (x === K) {
      // 출력하고 break
      console.log(visited[x] - 1);
      break;
    }
    // 순간 이동 후의 위치 이동
    for (let i of [x - 1, x + 1, 2 * x]) {
      // 예외
      if (0 <= i && i <= MAX && visited[i] === 0) {
        // 시간 추가
        visited[i] = visited[x] + 1;
        // 큐에 시간 갱신
        queue.push(i);
      }
    }
  }
}

// 결과 출력
bfs();
