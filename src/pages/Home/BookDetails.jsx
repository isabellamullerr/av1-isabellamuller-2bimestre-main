import React from 'react';

const BookDetail = ({ book }) => {
  if (!book) return <p>Selecione um livro para ver os detalhes.</p>;

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : null;

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">{book.title}</h2>
      {coverUrl && (
        <img
          src={coverUrl}
          alt={`Capa de ${book.title}`}
          className="mb-2 max-w-xs"
        />
      )}
      <p><strong>Autor:</strong> {book.author_name?.join(', ')}</p>
      <p><strong>Ano de publicação:</strong> {book.first_publish_year}</p>
      <p><strong>ISBN:</strong> {book.isbn?.[0]}</p>
    </div>
  );
};

export default BookDetail;
