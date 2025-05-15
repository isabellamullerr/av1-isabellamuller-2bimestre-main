import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav
      className="shadow"
      style={{ backgroundColor: "#656330" }}
    >
      <div className="container mx-auto flex items-center justify-center p-6 text-gray-200 capitalize">
        <Link
          to="/"
          className="transition-colors duration-300 transform border-b-2 border-yellow-400 mx-2 sm:mx-4"
        >
          Home
        </Link>

        <Link
          to="/favoritos"
          className="transition-colors duration-300 transform border-b-2 border-transparent hover:border-yellow-400 mx-2 sm:mx-4"
        >
          Favoritos
        </Link>

        <Link
          to="/categorias"
          className="transition-colors duration-300 transform border-b-2 border-transparent hover:border-yellow-400 mx-2 sm:mx-4"
        >
          Categorias
        </Link>

        <Link
          to="/sobre"
          className="transition-colors duration-300 transform border-b-2 border-transparent hover:border-yellow-400 mx-2 sm:mx-4"
        >
          Sobre
        </Link>

        <button className="mx-2 sm:mx-4 hover:text-yellow-300">
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <button className="mx-2 sm:mx-4 hover:text-yellow-300">
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
