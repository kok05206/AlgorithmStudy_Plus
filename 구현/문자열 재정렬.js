// 문자열 재정렬

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('문자와 숫자를 입력하시오. : ', function (data) {
  let alpha = []; // 알파벳을 저장할 배열
  let sum = 0; // 숫자의 합을 저장할 변수

  // 문자열 검사
  for (let x of data) {
    // 만약 x가 알파벳이라면
    if (isNaN(x)) {
      alpha.push(x); // 결과 배열에 알파벳 추가
    } else {
      // 숫자면 sum에 숫자 더하기
      sum += Number(x);
    }
  }
  // 알파벳 정렬
  alpha.sort();

  // 숫자가 하나라도 있었다면, 배열 끝에 숫자를 추가
  if (sum !== 0) {
    alpha.push(sum.toString()); // sum를 문자열로 변환하여 push
  }

  // 결과
  console.log(alpha.join(''));
  rl.close();
});
