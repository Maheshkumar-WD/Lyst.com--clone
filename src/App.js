import logo from "./logo.svg";
import "./App.css";
import { Container } from "@chakra-ui/react";
import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Container maxW="container.xl">
        <Navbar />
        <AllRoutes />
      </Container>
    </div>
  );
}

export default App;
