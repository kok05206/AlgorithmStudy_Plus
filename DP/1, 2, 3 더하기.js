// 1, 2, 3 더하기
const fs = require('fs'); // fs 모듈을 불러옵니다. 파일 시스템에 접근할 수 있는 기능을 제공합니다.
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 파일 경로를 지정합니다. 리눅스 환경에서는 '/dev/stdin', 그 외에는 './input.txt'를 사용합니다.

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number); // 파일을 동기적으로 읽어와 문자열로 변환한 뒤, 앞뒤 공백을 제거하고 줄바꿈 문자('\n')를 기준으로 나누어 배열로 만듭니다. 그리고 각 요소를 숫자로 변환합니다.
const T = input[0]; // 테스트케이스
const N = input.slice(1); // 두 번째 줄부터의 값들을 N 배열로 저장합니다.

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
