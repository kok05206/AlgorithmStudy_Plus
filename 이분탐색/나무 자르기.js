// 나무 자르기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number); // 첫 번째 줄에서 N과 M을 입력받음
const trees = input[1].split(' ').map(Number); // 두 번째 줄에서 각 나무의 높이를 입력받음

// 이분 탐색을 위한 최소, 최대 값 설정
let start = 1; // 나무의 최소 높이는 1로 설정
let end = Math.max(...trees); // 나무 중 가장 높은 나무의 높이를 최대 값으로 설정

// 이분 탐색
while (start <= end) {
  let mid = Math.floor((start + end) / 2); // 중간 값
  let sum = 0; // 잘린 나무의 길이를 합산할 변수

  // 잘린 나무의 길이를 구해서 합산
  for (let i = 0; i < N; i++) {
    if (trees[i] > mid) {
      // 나무의 높이가 중간 값보다 큰 경우에만 자르기 가능
      sum += trees[i] - mid; // 잘린 나무의 길이를 합산
    }
  }

  // 합산된 길이와 목표 길이 비교
  if (sum >= M) {
    // 잘린 나무의 길이가 목표 길이보다 크거나 같은 경우
    start = mid + 1; // 중간 값을 증가시켜서 높이를 더 높여야 함
  } else {
    // 잘린 나무의 길이가 목표 길이보다 작은 경우
    end = mid - 1; // 중간 값을 감소시켜서 높이를 낮춰야 함
  }
}

// 결과 출력
console.log(end);
