// 숨바꼭질 3
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
// 수빈이, 동생 입력.
const [N, K] = input[0].split(' ').map(Number);
const MAX = 100000;
// 순간이동의 경우의 수 때문에 MAX값에 1을 더 해준다.
const visited = new Array(MAX + 1).fill(0);

function bfs() {
  const deque = [];
  // 처음 수빈이의 위치, 처음 시간
  deque.push([N, 0]);
  visited[N] = 1;

  while (deque.length > 0) {
    const [x, time] = deque.shift();
    // 동생 찾으면
    if (x === K) {
      // 출력하고 break
      console.log(time);
      break;
    }

    for (let i of [x - 1, x + 1, 2 * x]) {
      // 예외
      if (0 <= i && i <= MAX && visited[i] === 0) {
        visited[i] = 1;
        if (i === x * 2) {
          // 순간이동시에는 시간이 걸리지 않는다
          // 걸리는 시간의 최솟값을 구해야 하므로 2배 이동시가 우선순위가 더 높다
          // 따라서 맨 앞에 넣어준다
          deque.unshift([i, time]);
        } else {
          // 한칸씩 이동시에는 1초의 시간이 걸림
          deque.push([i, time + 1]);
        }
      }
    }
  }
}

// 결과 출력
bfs();
