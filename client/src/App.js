import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import LoginScreen from "./Screens/LoginScreen";
import RegsiterScreen from "./Screens/RegisterScreen";
import DashboardScreen from "./Screens/DashboardScreen";
import LandingScreen from "./Screens/LandingScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginScreen}></Route>
          <Route path="/register" component={RegsiterScreen}></Route>
          <Route path="/dashboard" component={DashboardScreen}></Route>
          <Route path="/" component={LandingScreen} exact />
        </Container>
      </main>
    </Router>
  );
};

export default App;
