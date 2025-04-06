import React from "react";
import books from "../json/books.json";
import BookCard from "../components/BookCard";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-900 to-indigo-600 text-white">
      <div className="absolute inset-0 bg-[url('/images/magic_bg_stars.png')] bg-cover bg-no-repeat opacity-60 z-0"></div>
      <header className="relative z-10 text-center py-16 px-4">
        <h1 className="text-4xl font-extrabold tracking-wide text-purple-100">🪄 Mystica Books</h1>
        <p className="mt-4 text-lg text-purple-200 max-w-2xl mx-auto">
          一個專屬魔法師的書店，探索神秘與知識的世界。
        </p>
      </header>

      <main className="relative z-10 flex flex-wrap justify-center gap-8 px-6 py-8">
        {books.map((book) => (
          <BookCard key={book.ID} book={book} />
        ))}
      </main>

      <footer className="relative z-10 bg-gray-800 text-center py-4 mt-12 text-sm text-gray-400">
        <p>&copy; 2025 Mystica Books. Spread the magic ✨</p>
      </footer>
    </div>
  );
};

export default Home;
