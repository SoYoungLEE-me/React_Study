import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

//1. 박스 2개 (타이틀, 사진, 결과)
//2. 가위바위보 버튼
//3. 버튼을 클릭하면 클릭한 값이 버튼에 보인다.
//4. 컴퓨터는 랜덤하게 아이템이 선택된다.
//5. 3,4번의 결과를 가지고 승패가 정해진다.
//6. 승패결과에 따라 테두리 색이 바뀌게 된다.

const choice = {
  rock: {
    name: "Rock",
    icon: "✊",
  },
  scissors: {
    name: "Scissors",
    icon: "✌️",
  },
  paper: {
    name: "Paper",
    icon: "🖐️",
  },
};

function App() {
  const randomChoice = () => {
    const keys = Object.keys(choice); //Object.keys()는 객체의 key들을 배열로 바꿔주는 함수
    const randomIndex = Math.floor(Math.random() * keys.length); //0 이상 ~ 3 미만의 정수
    const randomKey = keys[randomIndex]; //생성한 인덱스로 배열의 값을 저장
    return choice[randomKey]; //객체에서 저장되 배열의 값, 즉 key로 접근 가능
  };

  const play = (userSelect) => {
    const userPick = userSelect;
    const computerPick = randomChoice();

    setUserChoice(userPick);
    setComputerChoice(computerPick);

    const gameResult = judgement(userPick, computerPick);
    setResult(gameResult);

    if (gameResult === "win") {
      setUserScore((prev) => prev + 1);
    } else if (gameResult === "lose") {
      setComputerScore((prev) => prev + 1);
    }
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) return "tie";
    else if (
      (user.name === "Rock" && computer.name === "Scissors") ||
      (user.name === "Scissors" && computer.name === "Paper") ||
      (user.name === "Paper" && computer.name === "Rock")
    )
      return "win";
    else return "lose";
  };

  const reset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
    setUserScore(0);
    setComputerScore(0);
  };

  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  return (
    <div className="game-container">
      <h1>Rock! Scissors! Paper!</h1>
      {/* 스코어 보드 */}
      <div className="score-board">
        <div className="score-item">
          <p>나(Player)</p>
          <span>{userScore}</span>
        </div>
        <div className="score-item">
          <p>컴퓨터(AI)</p>
          <span>{computerScore}</span>
        </div>
      </div>

      {/*결과 안내 문구*/}
      <div className="result-message">
        {!result && "가위바위보를 시작해보세요!"}
        {result === "win" && "당신이 이겼습니다! 🎉"}
        {result === "lose" && "컴퓨터가 이겼습니다! 🤖"}
        {result === "tie" && "비겼습니다! 😐"}
      </div>

      {/*버튼 선택 결과*/}
      <div className="display-area">
        <Box
          title="COMPUTER"
          item={computerChoice}
          result={
            result
              ? result === "win"
                ? "lose"
                : result === "lose"
                ? "win"
                : "tie"
              : ""
          }
        />
        <Box title="YOU" item={userChoice} result={result} />
      </div>

      {/*버튼*/}
      <div className="choices">
        <button className="choice-btn" onClick={() => play(choice.scissors)}>
          <span class="choice-icon">✌️</span> 가위
        </button>
        <button className="choice-btn" onClick={() => play(choice.rock)}>
          <span class="choice-icon">✊</span> 바위
        </button>
        <button className="choice-btn" onClick={() => play(choice.paper)}>
          <span class="choice-icon">✋</span> 보
        </button>
      </div>

      {/*리셋버튼*/}
      <button
        className="reset-btn"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
