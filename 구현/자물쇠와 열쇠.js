const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 질문을 위한 프로미스 기반 함수 정의
function ask(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (input) => resolve(input));
  });
}

// 배열을 회전하는 함수
function rotateMatrix(matrix) {
  const N = matrix.length;
  const ret = Array.from({ length: N }, () => Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      ret[i][j] = matrix[N - j - 1][i];
    }
  }
  return ret;
}

// 열쇠가 자물쇠에 맞는지 확인하는 함수
function check(key, lock, start_x, start_y, M, N) {
  // lock의 복사본을 생성하여 맞추어 보기
  const testLock = lock.map((row) => [...row]);

  // key를 lock에 맞춤
  for (let x = 0; x < M; x++) {
    for (let y = 0; y < M; y++) {
      // key의 범위를 벗어나지 않을 때
      if (
        start_x + x >= 0 &&
        start_x + x < N &&
        start_y + y >= 0 &&
        start_y + y < N
      ) {
        testLock[start_x + x][start_y + y] ^= key[x][y];
      }
    }
  }

  // 모든 홈이 채워졌는지 확인
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (testLock[x][y] === 0) {
        return false; // 홈이 매워지지 않았으므로 false 반환
      }
    }
  }
  return true;
}

// 주어진 key와 lock으로 자물쇠를 열 수 있는지 판단하는 함수
function solution(key, lock) {
  const M = key.length;
  const N = lock.length;
  const rotatedKeys = [key]; // 회전한 키들을 저장

  // 90도로 3번 회전하여 총 4가지 방향의 키를 생성
  for (let i = 0; i < 3; i++) {
    rotatedKeys.push(rotateMatrix(rotatedKeys[rotatedKeys.length - 1]));
  }

  // 모든 방향에 대해 키를 맞춰보기
  for (let k = 0; k < 4; k++) {
    const curKey = rotatedKeys[k];
    // lock 영역을 벗어나게 시작하므로 M-1, M-1에서 시작
    for (let x = -M + 1; x < N; x++) {
      for (let y = -M + 1; y < N; y++) {
        if (check(curKey, lock, x, y, M, N)) {
          return true; // 모든 홈이 채워지고 돌기가 맞는 경우
        }
      }
    }
  }
  return false; // 어떤 경우에도 맞지 않으면 false 반환
}

// 사용자 입력 처리
async function processInput() {
  // 사용자로부터 key 입력 받기
  const keyInput = JSON.parse(await ask('key matrix : '));

  // 사용자로부터 lock 입력 받기
  const lockInput = JSON.parse(await ask('lock matrix : '));

  // 정답 계산
  const result = solution(keyInput, lockInput);

  // 정답 출력
  console.log(`결과 : ${result}`);

  // readline 인터페이스 종료
  rl.close();
}

processInput(); // 입력 처리 함수 실행
