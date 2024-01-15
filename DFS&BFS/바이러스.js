// 바이러스
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = Number(input.shift());
let m = Number(input.shift());

// 방문체크
let visited = Array.from({ length: n + 1 }, () => 0);
visited[1] = 1;

// 그래프 생성
let graph = Array.from({ length: n + 1 }, () => []);

// 양방향 그래프 만들기
for (let x of input) {
  let [start, end] = x.split(' ').map(Number);
  graph[start].push(end);
  graph[end].push(start);
}

// 바이러스 걸린 컴퓨터 수
let count = 0;

// DFS
function DFS(n) {
  for (let x of graph[n]) {
    if (visited[x] == 0) {
      visited[x] = 1;
      count += 1;
      DFS(x);
    }
  }
}

// 1번 컴퓨터가 걸리면 호출
DFS(1);

// 결과 출력
console.log(count);
