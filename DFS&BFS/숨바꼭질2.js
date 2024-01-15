// 숨바꼭질 2
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const MAX = 100000;

// 수빈이, 동생 입력
const [N, K] = input[0].split(' ').map(Number);
// 순간이동의 경우의 수 때문에 MAX값에 1을 더 해준다.
const visited = new Array(MAX + 1).fill(0);
const count = new Array(MAX + 1).fill(0); // 방법의 수를 저장

// bfs
function bfs() {
  const queue = [];
  // 수빈이의 처음 위치
  queue.push(N);
  // 시작위치 방문 처리
  visited[N] = 1;
  count[N] = 1;
  // 큐가 빌 때까지 반복수행
  while (queue.length > 0) {
    const x = queue.shift();
    // 동생 찾으면
    if (x === K) {
      // 가장 빠른 시간 출력
      console.log(visited[x] - 1);
      // 방법의 수 출력
      console.log(count[x]);
      break;
    }
    // 순간 이동 후의 위치 이동
    for (let i of [x - 1, x + 1, 2 * x]) {
      // 예외
      if (0 <= i && i <= MAX && visited[i] === 0) {
        // 시간 추가
        visited[i] = visited[x] + 1;
        // 방법의 수 갱신
        count[i] += count[x];
        // 큐에 시간 갱신
        queue.push(i);
      }
      // 방법의 수가 같은 경우
      else if (0 <= i && i <= MAX && visited[i] === visited[x] + 1) {
        count[i] += count[x];
      }
    }
  }
}

// 결과 출력
bfs();
