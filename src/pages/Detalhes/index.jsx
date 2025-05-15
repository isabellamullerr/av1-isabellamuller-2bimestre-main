import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BOOK_LIST = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    description: "Um clássico distópico sobre um futuro totalitário dominado pelo Grande Irmão.",
    cover: "https://covers.openlibrary.org/b/id/8225631-L.jpg",
    genres: ["Ficção", "Distopia"]
  },
  {
    id: 2,
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    description: "Uma épica jornada pela Terra Média em busca de destruir o Um Anel.",
    cover: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    genres: ["Fantasia", "Aventura"]
  },
  {
    id: 3,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    description: "Uma das obras-primas da literatura brasileira, com foco em ciúme, memória e dúvida.",
    cover: "https://covers.openlibrary.org/b/id/10437978-L.jpg",
    genres: ["Romance", "Literatura Brasileira"]
  },
  {
    id: 4,
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    description: "Uma reflexão profunda sobre a vida, o amor e o essencial invisível aos olhos.",
    cover: "https://covers.openlibrary.org/b/id/10552958-L.jpg",
    genres: ["Fábula", "Filosofia"]
  }
];

export default function Detalhes() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simula uma API local
    setTimeout(() => {
      setBooks(BOOK_LIST);
    }, 1000);
  }, []);

  if (books.length === 0) return (
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
        <p style={{ color: '#2F4F4F', fontWeight: 'bold' }}>Carregando Biblioteca...</p>
      </div>
    </div>
  );

  return (
    <div style={{
      backgroundColor: '#2E8B57',
      minHeight: '100vh',
      padding: '20px'
    }}>
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

      <h1 style={{ 
        color: '#142727', 
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        Detalhes dos Livros Favoritos da Biblioteca do Pedro
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {books.map((book) => (
          <div 
            key={book.id}
            style={{
              backgroundColor: '#98FB98',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <img 
                src={book.cover} 
                alt={book.title}
                style={{ 
                  width: '80px',
                  height: '100px',
                  marginRight: '15px',
                  objectFit: 'cover',
                  borderRadius: '4px'
                }}
              />
              <div>
                <h2 style={{ 
                  color: '#2F4F4F',
                  margin: 0
                }}>
                  {book.title}
                </h2>
                <p style={{ 
                  marginTop: '5px',
                  fontStyle: 'italic',
                  fontSize: '0.9rem'
                }}>
                  por {book.author}
                </p>
              </div>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <h3 style={{ 
                marginBottom: '8px',
                fontSize: '1.1rem'
              }}>
                Descrição:
              </h3>
              <p style={{ 
                margin: 0,
                lineHeight: '1.5'
              }}>
                "{book.description}"
              </p>
            </div>
            
            <div>
              <h3 style={{ 
                marginBottom: '8px',
                fontSize: '1.1rem'
              }}>
                Gêneros:
              </h3>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {book.genres.map((genre, i) => (
                  <span 
                    key={i}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '20px',
                      backgroundColor: '#556B2F',
                      color: 'white',
                      fontSize: '0.9rem'
                    }}
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
