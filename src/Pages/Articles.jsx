import { useState, useEffect } from "react";
import Article from "../Components/Article";

function Articles({ articles, updateFavoriteCount }) {
  const [favorites, setFavorites] = useState({});
  const [favoriteCount, setFavoriteCount] = useState(0);

  const getFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : {};
  };

  const getFavoriteCountFromLocalStorage = () => {
    const storedFavoriteCount = localStorage.getItem("favoriteCount");
    return storedFavoriteCount ? parseInt(storedFavoriteCount) : 0;
  };

  useEffect(() => {
    const storedFavorites = getFavoritesFromLocalStorage();
    setFavorites(storedFavorites);

    const storedFavoriteCount = getFavoriteCountFromLocalStorage();
    setFavoriteCount(storedFavoriteCount);
  }, []);

  const updateFavoritesAndLocalStorage = (articleId, isFavorite) => {
    const updatedFavorites = { ...favorites, [articleId]: isFavorite };
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    const newFavoriteCount = isFavorite ? favoriteCount + 1 : favoriteCount - 1;
    setFavoriteCount(newFavoriteCount);
    localStorage.setItem("favoriteCount", newFavoriteCount);
  };

  return (
    <>
      <div className="row mt-5">
        {articles.map((article) => (
          <Article
            key={article.id}
            article={article}
            isFavorite={favorites[article.id]}
            updateFavoriteCount={updateFavoriteCount}
            updateFavorites={updateFavoritesAndLocalStorage}
          />
        ))}
      </div>
    </>
  );
}

export default Articles;
