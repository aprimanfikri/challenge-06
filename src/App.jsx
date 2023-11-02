import { Container } from "react-bootstrap";
import LandingPage from "/LandingPage.png";

function App() {
  return (
    <>
      <Container>
        <img src={LandingPage} style={{ maxWidth: "1440px", width: "100%" }} />
      </Container>
    </>
  );
}

export default App;
