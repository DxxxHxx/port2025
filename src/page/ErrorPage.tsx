import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div id="error-container">
      <h1>404</h1>
      <p>page not found</p>
      <Link to={"/"}>홈으로 가기</Link>
    </div>
  );
}
