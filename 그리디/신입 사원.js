// 신입 사원
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const T = parseInt(input[0]);
let idx = 1;

for (let i = 0; i < T; i++) {
  const N = parseInt(input[idx]); // 지원자의 수
  const scores = [];

  // 서류 성적, 면접 성적 순위를 scores에 저장
  for (let j = 0; j < N; j++) {
    const [document, interview] = input[idx + j + 1].split(' ').map(Number);
    scores.push({ document, interview });
  }

  // 서류 순위를 기준으로 오름차순 정렬
  scores.sort((a, b) => a.document - b.document);

  let count = 1; // 선발할 수 있는 신입 사원의 최대 인원 수
  let minInterview = scores[0].interview; // 서류심사 1위의 면접 성적을 최소 면접 성적으로 초기화

  // 면접 성적을 비교
  for (let j = 1; j < N; j++) {
    if (scores[j].interview < minInterview) {
      count++;
      minInterview = scores[j].interview;
    }
  }

  // 결과 출력
  console.log(count);
  idx += N + 1; // 인덱스 갱신
}
