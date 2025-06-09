import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Lista de países que você quer exibir
const COUNTRY_CODES = ["BR", "US", "JP", "DE", "FR", "IT", "CN", "RU", "IN", "ZA"];

export default function Detalhes() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const filtered = response.data.filter(country =>
          COUNTRY_CODES.includes(country.cca2)
        );
        setCountries(filtered);
      } catch (error) {
        console.error("Erro ao buscar países:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#2E8B57'
    }}>
      <div style={{
        padding: '20px',
        backgroundColor: '#98FB98',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '5px solid #142727',
          borderTopColor: 'transparent',
          borderRadius: '50%',
          margin: '0 auto 15px',
          animation: 'spin 1s linear infinite'
        }} />
        <p style={{ color: '#2F4F4F', fontWeight: 'bold' }}>Carregando países...</p>
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#2E8B57', minHeight: '100vh', padding: '20px' }}>
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          padding: '10px 15px',
          backgroundColor: '#142727',
          color: '#8FBC8F',
          borderRadius: '5px',
          marginBottom: '20px',
          textDecoration: 'none'
        }}
      >
        ← Voltar para Home
      </Link>

      <h1 style={{ color: '#142727', textAlign: 'center', marginBottom: '30px' }}>
        Detalhes dos Países
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {countries.map((country, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: '#98FB98',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <img 
                src={country.flags.svg} 
                alt={country.name.common}
                style={{ 
                  width: '80px',
                  height: '60px',
                  marginRight: '15px',
                  objectFit: 'contain'
                }}
              />
              <div>
                <h2 style={{ color: '#2F4F4F', margin: 0 }}>
                  {country.name.common} ({country.cca2})
                </h2>
                <p style={{ marginTop: '5px', fontStyle: 'italic', fontSize: '0.9rem' }}>
                  {country.region} - {country.subregion || "Sub-região desconhecida"}
                </p>
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>Capital:</h3>
              <p>{country.capital?.[0] || "Capital não disponível"}</p>
            </div>

            <div>
              <h3 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>População:</h3>
              <p>{country.population.toLocaleString()} habitantes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
