import Tweet from "./components/Tweet";
import LeftBar from "./components/LeftBar";
import { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  const [background, setBackground] = useState("dark");
  const [name, setName] = useState("ilkayaltinısık");
  const [username, setUsername] = useState("ilkayus");
  const [text, setText] = useState(
    "ipsum dollorem ipsum dollorem ipsum dollorem ipsum dfgnıodjfguıowht u8thw2g239gv723g7v5 g 782g387r52gv42u3g4uıv23g4ıuv2g3vuı"
  );
  const [likes, setLikes] = useState("1");
  const [retweets, setRetweets] = useState("2");
  const [commends, setCommends] = useState("3");
  const [clock, setClock] = useState("12 : 12");
  const [date, setDate] = useState("01/01/2021");
  const [img, setImg] = useState([]);

  const [modal, setModal] = useState(true);

  const popup = () => {
    setModal(!modal);
  };
  const screenshot = () => {
    setModal(!modal);
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      document.getElementById("canvas").appendChild(canvas);
    });
  };
  return (
    <div className="app-container">
      <LeftBar
        setBackground={setBackground}
        setName={setName}
        setUsername={setUsername}
        setText={setText}
        setLikes={setLikes}
        setRetweets={setRetweets}
        setCommend={setCommends}
        setClock={setClock}
        setDate={setDate}
        setImg={setImg}
      />

      <div className="tweet-container ">
        {modal ? (
          <>
            {" "}
            <Tweet
              name={name}
              background={background}
              username={username}
              text={text}
              likes={likes}
              retweets={retweets}
              commends={commends}
              clock={clock}
              date={date}
              img={img}
              screenshot={screenshot}
            />
            <button onClick={screenshot}> Generate image</button>
          </>
        ) : (
          <div className="canvass">
            <div className="text">
              Done! Right-click (or hold down on mobile) on the image and press
              Save Image to save it to your device.
            </div>
            <div className="canvas" id="canvas"></div>
            <button onClick={popup}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
