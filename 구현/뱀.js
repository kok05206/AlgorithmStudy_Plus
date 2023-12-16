// 뱀
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 변수 선언
let N, K, L; // N: 보드 크기, K: 사과의 개수, L: 뱀의 방향 변환 횟수
let appleLocations = []; // 사과의 위치를 저장하는 배열
let turns = []; // 뱀의 방향 변환 정보를 저장하는 배열

// 방향 설정 (동, 남, 서, 북)
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

// 게임 함수
const playGame = (N, appleLocations, turns) => {
  let board = Array.from({ length: N }, () => Array(N).fill(false));
  let direction = 0; // 방향 인덱스 (0: 동, 1: 남, 2: 서, 3: 북)
  let time = 0; // 현재까지 걸린 시간
  let snake = [{ x: 0, y: 0 }]; // 뱀의 위치를 나타내는 배열
  board[0][0] = true; // 뱀의 시작 위치

  // 사과 위치
  appleLocations.forEach(([x, y]) => {
    board[x - 1][y - 1] = 'apple';
  });

  // 방향 전환 정보
  let turnIndex = 0;
  let nextTurn = turns[turnIndex]; // 다음 방향 전환 정보

  // 게임 루프 시작
  while (true) {
    let headX = snake[0].x + dx[direction];
    let headY = snake[0].y + dy[direction];
    time++;

    // 벽이나 자기 자신과 부딪혔는지 검사
    if (
      headX < 0 ||
      headY < 0 ||
      headX >= N ||
      headY >= N ||
      board[headX][headY] === true
    ) {
      break; // 충돌 시 반복문을 종료하고 시간을 반환
    }

    // 만약 사과를 발견하면 사과 위치를 비워주고, 그렇지 않으면 꼬리를 줄여준다.
    if (board[headX][headY] === 'apple') {
      board[headX][headY] = false;
    } else {
      let tail = snake.pop();
      board[tail.x][tail.y] = false;
    }

    // 뱀의 머리를 새로운 위치로 옮겨줌
    snake.unshift({ x: headX, y: headY });
    board[headX][headY] = true;

    // 방향 전환 시점이 되었으면 방향을 전환
    if (nextTurn && time === nextTurn[0]) {
      direction =
        nextTurn[1] === 'L' ? (direction + 3) % 4 : (direction + 1) % 4;
      nextTurn = turns[++turnIndex]; // 다음 방향 전환 정보 갱신
    }
  }

  return time; // 게임이 얼마 동안 진행되었는지 리턴
};

// 한 줄씩 입력을 읽어옴
rl.on('line', (input) => {
  if (!N) {
    N = parseInt(input); // 보드크기 입력
  } else if (!K) {
    K = parseInt(input); // 사과의 개수 입력
  } else if (appleLocations.length < K) {
    // 사과 위치 정보를 읽어온다.
    appleLocations.push(input.split(' ').map(Number));
  } else if (!L) {
    L = parseInt(input); // 방향 변환 횟수 입력.
  } else {
    // 방향 변환 정보를 읽어온다.
    if (turns.length < L) {
      turns.push(input.split(' ').map((v, i) => (i === 0 ? parseInt(v) : v)));
    }

    // 모든 정보를 읽었다면 입력을 종료
    if (turns.length === L) {
      rl.close();
    }
  }
}).on('close', () => {
  // 게임시작 & 결과 출력
  console.log(playGame(N, appleLocations, turns));
  process.exit();
});
