/**
 * 회의실 배정
 * 회의 시작 시간과 끝나는 시간을 선언.
 * 회의가 끝나는 시간을 기준으로 정렬을 해준다. - line 17 ~ 19
 * meetings 배열을 끝나는 시간(end)을 기준으로 오름차순으로 정렬 - line 22
 * 만약 끝나는 시간이 같다면, 시작 시간(start)을 기준으로 오름차순으로 정렬 - line 22
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = parseInt(input[0]); // 회의 개수
const meetings = []; // 회의 정보

for (let i = 1; i <= n; i++) {
  const [start, end] = input[i].trim().split(' ').map(Number);
  meetings.push({ start, end });
}

meetings.sort((a, b) => a.end - b.end || a.start - b.start);

// 최대 회의 개수
let count = 1;
let endTime = meetings[0].end; // 첫 번째 회의가 끝나는 시간
for (let i = 1; i < n; i++) {
  if (meetings[i].start >= endTime) {
    // 현재 회의의 시작 시간이 이전 회의의 끝나는 시간보다 크거나 같다면
    count++; // 회의를 선택하고 count를 증가
    endTime = meetings[i].end;
    // 현재 회의가 끝나는 시간을 endTime으로 설정
  }
}
// 결과 출력
console.log(count);
