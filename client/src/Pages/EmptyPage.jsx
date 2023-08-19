import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "./routes";

function EmptyPage() {
  const navigate = useNavigate();

  return (
    <div className="empty-page">
      <h1 data-testid="empty-title">404 Page Not Found</h1>
      <p>Oops.. This page cannot be found :( please return to home page</p>
      <button onClick={() => navigate(HOME_ROUTE)} data-testid="button-to-home">Home</button>
    </div>
  );
}

export default EmptyPage;
