// readline 모듈을 불러옴
const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin, // 사용자 입력을 받음 (터미널에서)
  output: process.stdout, // 사용자에게 출력할 내용 (터미널에)
});

// 사용자에게 이름을 물어봄, 사용자의 답변은 콜백 함수의 매개변수로 전달됨
rl.question('What is your name? ', (answer) => {
  console.log(`Hello, ${answer}!`); // 사용자의 답변을 출력
  rl.close(); // 사용이 끝난 인터페이스를 닫음
});

// 인터페이스가 닫힐 때 호출되는 이벤트
rl.on('close', () => {
  console.log('Goodbye!'); // 사용자와의 상호작용이 끝났음을 알림
});
