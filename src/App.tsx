import MagneticButton from "./MagLink";

function App() {
  return (
    <div className="App">
      <div className="footer">
        <div className="footer-inner">
          <div className="inner-section">
            <span className="version">© 2022 Your Name</span>
            <span className="time">07:22 PM BST</span>
          </div>

          <div className="inner-section">
            <div className="socials">
              <div className="social">
                <MagneticButton type="Instagram" />
              </div>
              <div className="social">
                <MagneticButton type="Twitter" />
              </div>
              <div className="social">
                <MagneticButton type="LinkedIn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;