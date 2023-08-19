import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "./routes";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <h1 data-testid="about-title">About Me</h1>
      <p>Explanation about the creator of the application</p>
      <button onClick={() => navigate(HOME_ROUTE)} data-testid="button-to-home">Home</button>
    </div>
  );
}

export default AboutPage;
