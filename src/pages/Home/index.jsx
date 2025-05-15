import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Lista fixa de livros
const livros = [
  {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    capa: "https://m.media-amazon.com/images/I/81eB+7+CkUL.jpg",
  },
  {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    capa: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
  },
  {
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    capa: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    capa: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_SL1500_.jpg",
  },
  {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    capa: "https://m.media-amazon.com/images/I/81t2CVWEsUL.jpg",
  },
];

export default function Home() {
  const [livroAtual, setLivroAtual] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function buscarNovoLivro() {
    setLoading(true);
    setTimeout(() => {
      const aleatorio = Math.floor(Math.random() * livros.length);
      setLivroAtual(livros[aleatorio]);
      setLoading(false);
    }, 500); // Simulação de carregamento
  }

  useEffect(() => {
    buscarNovoLivro();
  }, []);

  function irParaFavoritos() {
    navigate("/favoritos");
  }

  return (
    <div className="min-h-screen bg-yellow-100 p-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">Livro do Momento</h1>

      {livroAtual && (
        <div
          onClick={buscarNovoLivro}
          className="cursor-pointer max-w-md bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
        >
          <img
            src={livroAtual.capa}
            alt={livroAtual.titulo}
            className="w-full h-auto rounded mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800">{livroAtual.titulo}</h2>
          <p className="text-gray-600 mb-3">Autor: {livroAtual.autor}</p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              irParaFavoritos();
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Ver Favoritos
          </button>
        </div>
      )}

      {loading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="animate-spin w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full mx-auto mb-3"></div>
            <p>Carregando livro...</p>
          </div>
        </div>
      )}
    </div>
  );
}
