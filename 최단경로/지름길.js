// 지름길
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, d] = input[0].split(' ').map(Number);
let dist = Array.from(Array(d + 1).fill(Infinity));
const graph = Array.from(Array(d + 1), () => []);

// 각 지름길을 graph에 추가
for (let i = 0; i < n; i++) {
  // start, end, time은 지름길의 출발위치, 도착위치, 이동에 필요한 시간임.
  const [start, end, time] = input[i + 1].split(' ').map(Number);
  // 목적지가 d를 초과하면 무시
  if (end > d) continue;
  // 지름길을 이용해도 더 오래 걸리는 경우 무시
  if (end - start <= time) continue;

  graph[start].push([end, time]);
}

let prev = -1; // 이전위치 까지의 최소거리
// 현재 위치부터 목적지까지 최소 거리를 계산
for (let i = 0; i <= d; i++) {
  // i가 0이 아니면 prev에 i-1까지의 최소 거리를 저장
  if (i != 0) {
    prev = dist[i - 1];
  }
  // 현재 위치까지의 최소 거리를 갱신
  dist[i] = Math.min(dist[i], prev + 1);

  // 현재 위치에서 이동할 수 있는 지름길을 확인, 최소 거리를 갱신
  for (let [next, cost] of graph[i]) {
    if (dist[next] > dist[i] + cost) {
      dist[next] = dist[i] + cost;
    }
  }
}

// 결과 출력
console.log(dist[d]);
