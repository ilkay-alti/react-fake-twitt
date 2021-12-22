import Tweet from "./components/Tweet";
import LeftBar from "./components/LeftBar";
import { useState } from "react";

function App() {
  const [background, setBackground] = useState("dark");
  const [name, setName] = useState("ilkayaltinısık");
  const [username, setUsername] = useState("ilkayus");
  const [text, setText] = useState(
    "ipsum dollorem ipsum dollorem ipsum dollorem ipsum dollorem ipsum dollorem ipsum dollorem ipsum dolor sit amet,"
  );
  const [likes, setLikes] = useState("1");
  const [retweets, setRetweets] = useState("2");
  const [commends, setCommends] = useState("3");
  const [clock, setClock] = useState("12 : 12");

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
      />
      {name}
      <div className="tweet-container">
        <Tweet
          name={name}
          background={background}
          username={username}
          text={text}
          likes={likes}
          retweets={retweets}
          commends={commends}
          clock={clock}
        />
      </div>
    </div>
  );
}

export default App;
