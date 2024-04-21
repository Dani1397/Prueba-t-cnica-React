import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import FavoriteCounter from "./Components/FavoritesCounter";
import Articles from "./Pages/Articles";
import ArticleDetails from "./Pages/ArticleDetails";
import Footer from "./Components/Footer";

function App() {
  const [articles, setArticles] = useState([]);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const updateFavoriteCount = (increment) => {
    setFavoriteCount((prevCount) => prevCount + increment);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Router>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestros recomendados</h2>
        <FavoriteCounter favoriteCount={favoriteCount} />
        <Routes>
          <Route
            path="/"
            element={<Articles articles={articles} updateFavoriteCount={updateFavoriteCount} />}
          />
          <Route
            path="/article/:id"
            element={<ArticleDetails articles={articles} />}
          />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
