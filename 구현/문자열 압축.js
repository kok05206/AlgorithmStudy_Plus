// // 문자열 압축
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('문자를 입력하시오 : ', (s) => {
  const result = solution(s);
  console.log(`결과 : ${result}`);
  rl.close();
});

// 문자열 압축 함수
function solution(s) {
  // 가장 짧은 압축 길이를 저장할 변수, 초기값은 입력 문자열의 길이로 설정
  let shortest = s.length;

  // 1개 단위부터 문자열 길이의 절반으로 잘라보며 압축
  for (let i = 1; i <= s.length / 2; i++) {
    let comp = ''; // 압축된 문자열을 저장할 변수
    let prev = s.substr(0, i); // 현재 비교할 문자열 슬라이스
    let cnt = 1; // 같은 문자열이 반복되는 횟수

    // i 단위로 문자열을 잘라가며 압축
    for (let j = i; j < s.length; j += i) {
      const next = s.substr(j, i);
      if (prev === next) {
        // 이전 문자열과 같으면 cnt를 증가
        cnt++;
      } else {
        // 다르면 이전까지의 결과를 comp에 추가
        comp += (cnt > 1 ? cnt : '') + prev;
        prev = next;
        cnt = 1;
      }
    }
    // 남은 문자열 처리
    comp += (cnt > 1 ? cnt : '') + prev;
    // 최소 길이
    shortest = Math.min(shortest, comp.length);
  }

  return shortest;
}
