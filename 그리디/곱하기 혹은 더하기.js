const readline = require('readline');
// // readline을 사용하여 터미널에서 사용자 입력을 받기 위한 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 입력값
let inputNum = '';

// 사용자에게 값을 입력받음
rl.question('숫자를 입력하시오 : ', (input) => {
  // 입력값을 문자열로 변환
  inputNum = input;

  let num = inputNum.split('').map(Number);

  // 결과 초기화
  let result = num[0];

  for (let i = 1; i < num.length; i++) {
    // 0 또는 1이면 더한 값이 곱한 값보다 크기 때문에 더하기 연산 수행.
    if (num[i] <= 1 || result <= 1) {
      result += num[i];
    } else {
      // 그렇지 않으면 곱한 값으로 갱신
      result *= num[i];
    }
  }

  // 결과 출력
  console.log(result);

  // 사용이 끝난 인터페이스를 닫음
  rl.close();
});
