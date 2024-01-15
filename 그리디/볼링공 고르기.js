// 볼링공 고르기

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, M;
let balls = []; // 공 무게를 저장할 배열
let weights = Array(11).fill(0); // 1 ~ 10이라서 배열의 크기는 11

rl.question('N과 M을 입력하시오. : ', (nmInput) => {
  // 입력받은 값을 공백을 기준으로 분리하고, 각각을 숫자로 변환하여 변수에 저장
  const [n, m] = nmInput.split(' ').map(Number);
  N = n;
  M = m;

  rl.question('공 무게를 입력하세요 : ', (ballsInput) => {
    // 공 무게 입력
    balls = ballsInput.split(' ').map(Number);

    // 각 공 무게의 빈도수를 계산하여 weights 배열에 저장
    for (let i = 0; i < balls.length; i++) {
      weights[balls[i]]++;
    }

    // 결과값 초기화
    let result = 0;

    // A가 선택한 경우와 B가 선택한 경우 계산
    for (let i = 0; i <= M; i++) {
      N -= weights[i]; // A가 선택한 경우 제외
      result += weights[i] * N; // A가 선택한 경우 * B가 선택한 경우
    }

    // 결과 출력
    console.log(result);

    // 인터페이스 닫기
    rl.close();
  });
});
