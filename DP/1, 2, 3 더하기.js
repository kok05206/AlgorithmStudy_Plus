// 1, 2, 3 더하기
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
const T = input[0]; // 테스트케이스
const N = input.slice(1); // 두 번째 줄부터의 값들을 N 배열로 저장

function solution(T, N) {
  const board = [...Array(11)]; // 길이가 11인 배열을 생성합니다. (인덱스 1부터 사용하기 위해 길이를 11로 설정했습니다.)

  // 1, 2, 3에 대한 경우의 수
  board[1] = 1;
  board[2] = 2;
  board[3] = 4;

  // 점화식을 이용
  for (let i = 4; i < 11; i++) {
    board[i] = board[i - 1] + board[i - 2] + board[i - 3];
  }

  for (let i = 0; i < T; i++) {
    // 결과 출력
    console.log(board[N[i]]);
  }
}

// 함수호출
solution(T, N); // solution 함수를 호출하여 결과를 얻습니다.
