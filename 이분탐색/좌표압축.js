// 좌표 압축
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = +input.shift();
let arr = input[0].split(' ').map((x) => +x);

let set = new Set(arr); // 중복 제거를 위한 Set
let uniq = [...set].sort((a, b) => a - b); // 중복 제거된 값들을 오름차순으로 정렬

let dic = {}; // 좌표 값과 압축된 값의 매핑
uniq.forEach((e, idx) => {
  dic[e] = idx; // 값들을 순회하며 좌표 값과 압축된 값 매핑
});

let answer = '';
for (let i = 0; i < arr.length; i++) {
  answer += dic[arr[i]] + ' '; // 원래 좌표 값을 압축된 값으로 바꿔서 추가
}

// 결과 출력
console.log(answer);
