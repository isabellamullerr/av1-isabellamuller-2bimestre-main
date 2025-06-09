import { useEffect, useState } from "react";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  // Recupera favoritos do localStorage ao carregar
  useEffect(() => {
    const stored = localStorage.getItem("favoritos");
    if (stored) {
      setFavoritos(JSON.parse(stored));
    }
  }, []);

  // Remove país dos favoritos
  const removerFavorito = (nome) => {
    const atualizados = favoritos.filter((pais) => pais.name.common !== nome);
    setFavoritos(atualizados);
    localStorage.setItem("favoritos", JSON.stringify(atualizados));
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">🌍 Países Favoritos</h1>

      {favoritos.length === 0 ? (
        <p className="text-center text-gray-600">Nenhum país favorito adicionado ainda.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favoritos.map((pais, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 border border-green-200">
              <h2 className="text-xl font-semibold mb-2">{pais.name.common}</h2>
              <img
                src={pais.flags.svg}
                alt={`Bandeira de ${pais.name.common}`}
                className="w-full h-40 object-contain mb-2"
              />
              <p><strong>Região:</strong> {pais.region}</p>
              <p><strong>Capital:</strong> {pais.capital?.[0] || "N/A"}</p>
              <button
                onClick={() => removerFavorito(pais.name.common)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Remover dos Favoritos
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
