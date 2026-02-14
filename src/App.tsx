import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const goToPage3 = () => {
    setShowHearts(true);

    setTimeout(() => {
      setShowHearts(false);
      setPage(3);
    }, 1500);
  };

  return (
    <div className="container">
      {page === 1 && (
        <div className="card">
          <h1>สวัสดีแฟน 💕</h1>
          <p>ลองกดปุ่มนี้สิ 😏</p>
          <button onClick={() => setPage(2)}>กดสิ!</button>
        </div>
      )}

      {page === 2 && (
        <div className="card">
          <h1>ฮั่นแน่ 😜</h1>
          <p>กดปุ่มมาอะดิ ไหนลองกดอีกทีสิ</p>
          <button onClick={goToPage3}>จะกดอีก!</button>
        </div>
      )}

      {page === 3 && (
        <div className="card">
          <h1 className="valentine">ลองกดอีกนิดสิ 💘</h1>

          <button onClick={() => setShowMessage(!showMessage)}>
            {showMessage ? "ซ่อนข้อความ 💔" : "กดดูข้อความลับ 💌"}
          </button>

          {showMessage && (
            <div className="loveMessage">
              <h3>ข้อความลับถึงแฟน 💕</h3>
              <p>
                Happy Valentine Day Kunfan 💘 รักหมูอ้วนที่สุดในโลกเลยนะ
                จุ๊บๆ 😘
              </p>
            </div>
          )}
        </div>
      )}

      {showHearts && (
        <div className="hearts">
          <span>💖</span>
          <span>💘</span>
          <span>💕</span>
          <span>💗</span>
          <span>💓</span>
        </div>
      )}
    </div>
  );
}

export default App;
