// 모험가 길드

// readline 모듈을 불러옴
const readline = require('readline');

// readline을 사용하여 터미널에서 사용자 입력을 받기 위한 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin, // 터미널 입력을 사용
  output: process.stdout, // 터미널 출력을 사용
});

let N; // 전체 인원 수
let people; // 각 길드원의 공포도 배열

// 사용자에게 질문을 하고, 답변을 처리하는 함수
rl.question('인원 수 : ', (n) => {
  // 입력 받은 값은 문자열이므로 정수로 변환하여 저장
  N = parseInt(n);

  rl.question('공포도 입력 : ', (panicInput) => {
    // 입력 받은 공포도를 공백을 기준으로 분리하고, 각 값을 정수로 변환하여 배열에 저장
    people = panicInput.split(' ').map(Number);
    // 길드원의 공포도를 오름차순으로 정렬
    people.sort((a, b) => a - b);

    let result = 0; // 결과값 초기화: 그룹 수
    let count = 0; // 그룹의 인원 수 초기화

    // 각 길드원에 대해 처리
    for (const panic of people) {
      count++; // 그룹 인원 추가
      if (count >= panic) {
        result++;
        count = 0;
      }
    }
    // 결과 출력
    console.log(result);
    // 사용이 끝난 인터페이스를 닫음
    rl.close(); // 닫아주지 않으면 무한으로 돌기 때문에 꼭 close()를 해주어야 함!
  });
});
