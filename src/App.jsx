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
    img: "https://store.clickhole.com/cdn/shop/files/Untitleddesign_6.png?v=1693423886",
  },
  scissors: {
    name: "Sissors",
    img: "https://i.namu.wiki/i/PGp3JnsDa9eaMKBC1OwnSU4M0vLE0d_40ehrl0aUYum98U6tg0Nnl8W6_c0bQk2Bp9mQCMTe7eQt32pszxoQGw.webp",
  },
  paper: {
    name: "Paper",
    img: "https://cdn11.bigcommerce.com/s-2i5mq6440u/images/stencil/2048x2048/products/3762/9095/PlasticPaper-CutSheet__18809.1597757191.png?c=2",
  },
};

function App() {
  const [userChoice, setUserChoice] = useState(null);

  return (
    <>
      <div className="main">
        <Box title="YOU" item={userChoice} />
      </div>
      <div className="main">
        <button
          onClick={() => {
            setUserChoice(choice.scissors);
          }}
        >
          가위
        </button>
        <button
          onClick={() => {
            setUserChoice(choice.rock);
          }}
        >
          바위
        </button>
        <button
          onClick={() => {
            setUserChoice(choice.paper);
          }}
        >
          보
        </button>
      </div>
    </>
  );
}

export default App;
