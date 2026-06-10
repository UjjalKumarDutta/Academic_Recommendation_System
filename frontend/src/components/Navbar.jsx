import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-white text-2xl font-bold">
          🎓 Academic Recommender
        </h1>

        <div className="flex gap-6 text-white font-medium">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/submissions"
            className="hover:text-yellow-300 transition duration-300"
          >
            Submissions
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;