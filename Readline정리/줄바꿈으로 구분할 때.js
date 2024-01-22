//여러 값을 입력받을 때 (줄바꿈으로 구분하는 경우)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = []; // 여러 줄의 입력을 저장할 배열

// 여러 줄의 입력을 받음
rl.on('line', (line) => {
  if (line === 'exit') {
    // 'exit'을 입력하면 프로그램 종료
    rl.close();
  } else {
    // 입력 값을 배열에 추가
    lines.push(line);

    // 다음 질문
    rl.prompt();
  }
});

// 더 이상의 입력이 없을 때 처리
rl.on('close', () => {
  console.log('입력된 값들:');
  console.log(lines);

  console.log('프로그램을 종료합니다.');
});

// 첫 번째 질문
rl.prompt();
