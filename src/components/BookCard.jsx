import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-indigo-600 p-4 rounded-xl shadow-lg w-64 flex flex-col items-center transition-transform transform hover:translate-y-[-10px] hover:scale-105 hover:shadow-2xl">
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-auto rounded-lg shadow-md mb-4"
      />
      <h2 className="text-xl text-white font-semibold mb-2">{book.title}</h2>
      <p className="text-sm italic text-purple-200 mb-2">by {book.author}</p>
      <p className="text-sm text-gray-200 text-center mb-4">{book.summary}</p>
      <div className="bg-purple-700 bg-opacity-60 p-2 rounded-lg w-full text-white text-sm text-center">
        <p>價格：${book.price}</p>
        <p>庫存：{book.stock} 本</p>
      </div>
    </div>
  );
};

export default BookCard;
