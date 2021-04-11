import { Link } from "react-router-dom";

const LandingScreen = () => {
  return (
    <div>
      <div style={{ margin: "50%" }}></div>
      <Link to={"/dashboard"}>
        <div className="join">Dashboard</div>
      </Link>
    </div>
  );
};

export default LandingScreen;
