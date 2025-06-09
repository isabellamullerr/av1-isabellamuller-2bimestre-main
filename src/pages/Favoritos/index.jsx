import { useEffect, useState } from "react";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("paisFavoritos");
    if (stored) {
      setFavoritos(JSON.parse(stored));
    }
  }, []);

  if (favoritos.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Favoritos</h1>
        <p className="text-gray-600">Nenhum país foi adicionado aos favoritos ainda.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Países Favoritos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoritos.map((pais, index) => (
          <div 
            key={index}
            className="bg-green-100 rounded-lg shadow-md p-4 flex items-center space-x-4"
          >
            <img 
              src={pais.flags?.svg} 
              alt={pais.name?.common}
              className="w-16 h-12 object-contain"
            />
            <div>
              <h2 className="text-lg font-semibold">{pais.name?.common}</h2>
              <p className="text-sm text-gray-700">{pais.region}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
