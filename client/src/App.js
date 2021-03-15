import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./Screens/LoginPage";
import RegsiterPage from "./Screens/RegisterPage";
import DashboardPage from "./Screens/DashboardPage";
import LandingPage from "./Screens/LandingPage";

const App = () => {
  return (
    <Router>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/register" component={RegsiterPage}></Route>
      <Route path="/dashboard" component={DashboardPage}></Route>
      <Route path="/" component={LandingPage} exact />
    </Router>
  );
};

export default App;
