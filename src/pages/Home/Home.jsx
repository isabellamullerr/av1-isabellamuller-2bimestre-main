import React, { useState } from 'react';
import BookList from '../components/BookList';
import BookDetail from '../components/BookDetail';

const Home = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h1 className="text-2xl font-bold mb-4">Lista de Livros</h1>
        <BookList onSelectBook={setSelectedBook} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Detalhes do Livro</h2>
        <BookDetail book={selectedBook} />
      </div>
    </div>
  );
};

export default Home;
