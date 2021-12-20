import VerifydLogo from "./img/Verifyd.png";
import DownArrow from "./img/arrow.png";
function App() {
  return (
    <div className="container">
      <div className="twit">
        <div className="twit-hader">
          <div className="start">
            <img src="https://globalenstitu.com/wp-content/uploads/avatars/59042/5e92dd64d1336-bpfull.jpg" />
            <div className="username">
              <div className="verified">
                <h2>FAKE TWİİTT</h2>
                <img src={VerifydLogo} />
              </div>
              <h6>@asdasd</h6>
            </div>
          </div>
          <div className="verified-end">
            <input type="button" className="button1" value="Follow" />
            <img src={DownArrow} />
          </div>
        </div>
        <div className="twit-body">
          <h1>Lorem lorem lore loremloremloremlorem</h1>
        </div>
        <div className="twit-date"></div>
        <div className="twit-reaction"></div>
        <div className="twit-reaction button"></div>
      </div>
    </div>
  );
}

export default App;
