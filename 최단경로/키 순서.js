// 키 순서
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const height = input.map((v) => v.split(' ').map(Number));

const solution = (N, M, height) => {
  // 그래프 초기화
  const graph = Array.from(Array(N + 1), () => []);
  const small = new Array(N + 1).fill(0); // 현재 노드보다 작은 노드의 개수를 저장하는 배열
  const big = new Array(N + 1).fill(0); // 현재 노드보다 큰 노드의 개수를 저장하는 배열
  let depth, visited; // 깊이,
  let answer = 0;

  const board = (height) => {
    // 입력으로 주어진 height 배열을 기반으로 그래프를 생성합니다.
    height.forEach(([A, B]) => {
      graph[A].push(B); // A에서 B로 가는 간선을 추가합니다.
    });
  };

  const dfs = (curr) => {
    depth++; // 깊이 증가

    for (let i = 0; i < graph[curr].length; i++) {
      const next = graph[curr][i];
      if (visited[next]) continue; // 이미 방문한 노드인 경우 무시
      visited[next] = 1; // 방문 표시
      small[next]++; // 현재 노드보다 작은 노드의 개수 증가
      dfs(next); // 다음 노드로 재귀 호출
    }
  };

  board(height); // 그래프 생성

  for (let i = 1; i <= N; i++) {
    visited = new Array(N + 1).fill(0);
    depth = 0;
    visited[i] = 1; // 시작 노드 방문 표시
    dfs(i); // DFS 탐색
    big[i] = depth - 1; // 현재 노드보다 큰 노드의 개수 저장
  }

  for (let i = 1; i <= N; i++) {
    // 현재 노드를 기준으로 작은 노드 개수와 큰 노드 개수를 합쳤을 때, 전체 노드 개수에서 1을 뺀 값과 같다면
    // 모든 노드와의 키 비교가 가능
    if (small[i] + big[i] === N - 1) answer++;
  }

  console.log(answer); // 결과 출력
};

solution(N, M, height); // 함수 호출
