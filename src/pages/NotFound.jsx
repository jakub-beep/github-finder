import { FaHome, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Ooops!</h1>
          <p className="text-5xl mb-8">400 - Page not found!</p>
          <div className="flex justify-between">
            <Link to="/" className="btn btn-secondary btn-lg">
              <FaHome className="mr-2" />
              Back To Home
            </Link>
            <Link to="/about" className="btn btn-primary btn-lg">
              <FaBookOpen className="mr-2" />
              Go To About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
