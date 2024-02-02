// n단 논법
const fs = require('fs');
const inputFilePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(inputFilePath).toString().trim().split('\n');

const INF = 1e9;
const N = parseInt(input[0]); // 정점의 개수

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const n = alphabet.length; // 알파벳 소문자 개수
const graph = Array.from({ length: n }, () => Array(n).fill(INF)); // 그래프 배열 초기화

// 그래프 초기화
for (let i = 1; i <= N; i++) {
  const [a, b] = input[i].split(' is ').map((c) => alphabet.indexOf(c)); // 알파벳을 인덱스로 변환
  graph[a][b] = 1; // a에서 b로 가는 간선의 가중치는 1
}

// 최단 거리 계산
// i에서 j로 가는 최단 거리는
// i에서 k를 거쳐 j로 가는 거리와 i에서 j로 바로 가는 거리 중 더 작은 값으로 갱신
for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}

const M = N + 1; // 시작 인덱스

// 결과 출력
for (let i = M + 1; i < input.length; i++) {
  const [a, b] = input[i].split(' is ').map((c) => alphabet.indexOf(c)); // 알파벳을 인덱스로 변환
  if (graph[a][b] === INF) {
    console.log('F');
  } else {
    console.log('T');
  }
}
