// 좌표 정렬하기2
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const num = parseInt(input[0]);
const arr = [];

for (let i = 0; i < num; i++) {
  const [x, y] = input[i + 1].split(' ').map(Number);
  arr.push([x, y]);
}

// 좌표 정렬
arr.sort((x, y) => {
  // y좌표 비교
  if (x[1] == y[1]) {
    return x[0] - y[0];
  } else {
    return x[1] - y[1];
  }
});

let answer = '';
for (let i = 0; i < num; i++) {
  answer += arr[i][0] + ' ' + arr[i][1] + '\n';
}

// 결과 출력
console.log(answer);
