// 만들 수 없는 금액.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// N 입력.
rl.question('N: ', (N) => {
  // 화폐 단위 입력.
  rl.question('화폐 단위: ', (coinsInput) => {
    const coins = coinsInput.split(' ').map(Number); // 공백으로 입력받기
    coins.sort((a, b) => a - b); // 화폐를 오름차순으로 정렬

    // target의 최솟값을 1로 설정.
    let target = 1;

    // 반복문 수행
    for (const money of coins) {
      if (money > target) {
        // 타겟보다 큰 수가 들어오면 이어나가질 못하니까 break
        break;
      }
      target += money; // 그 전까지 더해진 수가 최솟값.
    }

    // 결과 출력
    console.log(target);
    rl.close();
  });
});
