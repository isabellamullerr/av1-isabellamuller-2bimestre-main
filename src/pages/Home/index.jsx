import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [country, setCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const colors = {
    background: "#f0f8ff",
    text: "#2F4F4F",
    accent: "#4682B4",
    light: "#ffffff"
  };

  const fetchCountry = async (search = "") => {
    setLoading(true);
    try {
      let response;

      if (search) {
        response = await axios.get(`https://restcountries.com/v3.1/name/${search}`);
      } else {
        // Buscar país aleatório
        const allCountries = await axios.get("https://restcountries.com/v3.1/all");
        const randomIndex = Math.floor(Math.random() * allCountries.data.length);
        const countryData = allCountries.data[randomIndex];
        setCountry(countryData);
        return;
      }

      setCountry(response.data[0]); // Pegamos o primeiro resultado
    } catch (error) {
      alert("País não encontrado.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountry(); // país aleatório ao carregar
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      fetchCountry(searchTerm.trim());
    }
  };

  return (
    <div style={{
      backgroundColor: colors.background,
      minHeight: "100vh",
      padding: "20px",
      textAlign: "center"
    }}>
      {/* Formulário de busca */}
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Buscar país por nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px 15px",
            fontSize: "1rem",
            borderRadius: "10px",
            border: `2px solid ${colors.accent}`,
            width: "250px"
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            backgroundColor: colors.accent,
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Buscar
        </button>
      </form>

      {/* Card do país */}
      {country && (
        <div style={{
          backgroundColor: colors.light,
          border: `2px solid ${colors.accent}`,
          borderRadius: "20px",
          padding: "30px",
          maxWidth: "800px",
          margin: "0 auto",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)"
        }}>
          <img 
            src={country.flags?.svg} 
            alt={`Bandeira de ${country.name.common}`} 
            style={{ width: "200px", marginBottom: "20px" }} 
          />
          <h2 style={{ fontSize: "2rem", color: colors.accent }}>{country.name.common}</h2>
          <p><strong>Capital:</strong> {country.capital?.[0]}</p>
          <p><strong>Continente:</strong> {country.continents?.[0]}</p>
          <p><strong>População:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Idiomas:</strong> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
          <p><strong>Moeda:</strong> {
            country.currencies 
              ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(", ")
              : "N/A"
          }</p>
        </div>
      )
      }

      {/* Loading */}
      {loading && <p style={{ marginTop: "20px", color: colors.accent }}>Carregando país...</p>}
    </div>
  );
}
<div style={{ marginTop: "20px", textAlign: "center" }}>
  <button
    onClick={(e) => {
      e.stopPropagation(); // Evita ações do clique no card

      const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

      const jaExiste = favoritos.some(f => f.name.common === pais.name.common);

      if (jaExiste) {
        alert(`${pais.name.common} já está nos favoritos!`);
        return;
      }

      const paisParaSalvar = {
        name: { common: pais.name.common },
        flags: { svg: pais.flags.svg },
        region: pais.region,
        capital: pais.capital,
        population: pais.population
      };

      favoritos.push(paisParaSalvar);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      alert(`${pais.name.common} adicionado aos favoritos!`);
    }}
    style={{
      backgroundColor: "#2F4F4F",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold"
    }}
  >
    Adicionar aos Favoritos ⭐
  </button>
</div>
