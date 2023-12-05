// const readline = require('readline');

// // 콘솔에서 라인을 읽어오기 위한 인터페이스 생성
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // 특정 시간에 먹을 음식의 인덱스를 찾는 함수
// function solution(food_times, k) {
//   let sortFoodTimes = [];
//   const len = food_times.length;

//   // 1. 각 음식과 인덱스를 나타내는 {index, time} 객체 배열 생성
//   // 2. 음식 소비 시간을 기준으로 배열을 오름차순으로 정렬
//   sortFoodTimes = food_times
//     .map((time, index) => {
//       return { index: index + 1, time };
//     })
//     .sort((a, b) => {
//       return a.time - b.time;
//     });

//   // 3. 주어진 시간(k)에 해당하는 음식을 찾기
//   for (let i = 0; i < len; i++) {
//     const food_time = sortFoodTimes[i].time; // 현재 음식을 먹는 데 필요한 시간
//     const remains_foods_len = len - i; // 남은 음식의 수
//     const roop_time =
//       (food_time - (i === 0 ? 0 : sortFoodTimes[i - 1].time)) *
//       remains_foods_len; // 현재 세트의 음식을 먹는 데 걸리는 시간

//     // 만약 k가 현재 세트의 음식을 먹는 데 필요한 시간보다 작으면
//     if (k < roop_time) {
//       // 남은 음식을 인덱스 순으로 정렬하고 k에 해당하는 음식을 찾아 반환
//       return sortFoodTimes.slice(i).sort((a, b) => a.index - b.index)[
//         k % remains_foods_len
//       ].index;
//     }

//     // 현재 세트의 음식을 먹는 데 소요된 시간을 뺌
//     k -= roop_time;
//   }

//   return -1; // 전체 음식을 먹는 데 필요한 시간을 초과하는 경우 -1 반환
// }

// // 사용자로부터 입력 받기
// rl.question('food_times를 입력하세요 (쉼표로 구분): ', (food_times) => {
//   rl.question('k를 입력하세요: ', (k) => {
//     // 입력된 문자열을 숫자 배열로 변환
//     const foodTimesArray = food_times.split(',').map(Number);
//     const kValue = parseInt(k, 10);

//     // 입력값을 이용하여 solution 함수 호출
//     const result = solution(foodTimesArray, kValue);

//     // 결과 출력
//     console.log('결과:', result);

//     rl.close();
//   });
// });
const readline = require('readline');

// Create an interface for reading lines from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(food_times, k) {
  // 전체 음식을 먹는 시간보다 k가 크거나 같으면 -1 반환
  if (food_times.reduce((acc, cur) => acc + cur, 0) <= k) {
    return -1;
  }

  const q = []; // 우선순위 큐를 표현할 배열
  for (let i = 0; i < food_times.length; i++) {
    // (음식 시간, 음식 번호) 형태로 배열에 삽입
    q.push([food_times[i], i + 1]);
  }

  q.sort((a, b) => a[0] - b[0]); // 음식 시간을 기준으로 정렬

  let sum_value = 0; // 먹기 위해 사용한 시간
  let previous = 0; // 직전에 다 먹은 음식 시간
  let length = food_times.length; // 남은 음식의 개수

  // sum_value + (현재 음식 시간 - 이전 음식 시간) * 현재 음식 개수와 k 비교
  while (sum_value + (q[0][0] - previous) * length <= k) {
    const now = q.shift()[0];
    sum_value += (now - previous) * length;
    length--; // 다 먹은 음식 제외
    previous = now; // 이전 음식 시간 재설정
  }

  // 남은 음식 중에서 몇 번째 음식인지 확인하여 반환
  const result = q.sort((a, b) => a[1] - b[1]); // 음식의 번호 기준으로 정렬
  return result[(k - sum_value) % length][1];
}

// 사용자로부터 입력 받기
rl.question('food_times를 입력하세요 (쉼표로 구분): ', (food_times) => {
  rl.question('k: ', (k) => {
    // 입력된 문자열을 숫자 배열로 변환
    const foodTimesArray = food_times.split(',').map(Number);
    const kValue = parseInt(k, 10);

    // solution 함수 호출 및 결과 출력
    const result = solution(foodTimesArray, kValue);
    console.log('Result:', result);

    // readline 인터페이스 닫기
    rl.close();
  });
});
