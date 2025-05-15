import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = ({ onSelectBook }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          'https://openlibrary.org/search.json?q=harry+potter&limit=10'
        );
        setBooks(response.data.docs);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Carregando livros...</p>;

  return (
    <ul className="space-y-2">
      {books.map((book) => (
        <li
          key={book.key}
          className="p-2 border rounded cursor-pointer hover:bg-gray-100"
          onClick={() => onSelectBook(book)}
        >
          <strong>{book.title}</strong>{' '}
          {book.author_name?.[0] && `- ${book.author_name[0]}`}
        </li>
      ))}
    </ul>
  );
};

export default BookList;
