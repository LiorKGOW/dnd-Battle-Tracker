import { useNavigate } from "react-router-dom";
import { ABOUT_ROUTE } from "./routes";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1 data-testid="home-title">Home</h1>
      <p>Explanation about the application</p>
      <button
        onClick={() => navigate(ABOUT_ROUTE)}
        data-testid="button-to-about"
      >
        About
      </button>
    </div>
  );
}

export default HomePage;
