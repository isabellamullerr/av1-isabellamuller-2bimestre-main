import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="bg-[#656330] shadow text-white">
            <div className="container flex items-center justify-center p-6 mx-auto capitalize">
                <Link
                    to="/"
                    className="transition-colors duration-300 transform border-b-2 border-white mx-1.5 sm:mx-6 hover:text-yellow-200 hover:border-yellow-300"
                >
                    Home
                </Link>

                <Link
                    to="/favoritos"
                    className="transition-colors duration-300 transform border-b-2 border-transparent mx-1.5 sm:mx-6 hover:text-yellow-200 hover:border-yellow-300"
                >
                    Favoritos
                </Link>

                <Link
                    to="/sobre"
                    className="transition-colors duration-300 transform border-b-2 border-transparent mx-1.5 sm:mx-6 hover:text-yellow-200 hover:border-yellow-300"
                >
                    Sobre
                </Link>
            </div>
        </nav>
    );
}
