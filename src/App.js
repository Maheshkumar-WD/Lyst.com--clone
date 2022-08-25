import logo from "./logo.svg";
import "./App.css";
import { Container } from "@chakra-ui/react";
import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import FooterPage from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Container maxW="container.xl">
        <Navbar />
        <div style={{ minHeight: "500px" }}>
          <AllRoutes />
        </div>
        <FooterPage />
      </Container>
    </div>
  );
}

export default App;
