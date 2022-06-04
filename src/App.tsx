import Banner from "./Banner";
import MagneticLink from "./MagLink";

function App() {
  return (
    <div className="App">
      <div className="footer">
        <Banner />
        <div className="footer-inner">
          <div className="inner-section">
            <span className="version">© 2022 Your Business Name</span>
            <span className="time">07:22 PM BST</span>
          </div>

          <div className="inner-section">
            <div className="socials">
              <div className="social">
                <MagneticLink type="Instagram" />
              </div>
              <div className="social">
                <MagneticLink type="Twitter" />
              </div>
              <div className="social">
                <MagneticLink type="LinkedIn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
