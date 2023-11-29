// 여러 값을 입력받을 때 (공백으로 구분하는 경우)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputString = ''; // 여러 값을 공백으로 구분하여 저장할 문자열

// 여러 값을 받음
rl.question('여러 값을 공백으로 구분하여 입력하세요: ', (input) => {
  inputString = input;

  // 입력 값을 배열로 변환
  const values = inputString.split(' ');

  // 처리 로직 추가
  console.log('입력된 값들:');
  console.log(values);

  // 프로그램 종료
  rl.close();
});
