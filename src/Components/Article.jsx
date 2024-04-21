import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Article({ article, updateFavoriteCount, updateFavorites, isFavorite }) {
  const { id, title, body } = article;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    const lastSpaceIndex = text.lastIndexOf(" ", maxLength);
    return text.slice(0, lastSpaceIndex) + "...";
  };

  const truncatedTitle = truncateText(title, 16);
  const truncatedBody = truncateText(body, 100);

  const handleToggleFavorite = () => {
    const newFavoriteState = !isFavorite;
    updateFavoriteCount(newFavoriteState ? 1 : -1);
    updateFavorites(article.id, newFavoriteState);
  };

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src="/img/book-black-white.jpg"
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">
          Title: {truncatedTitle}
        </h3>
        <p>Body: {truncatedBody}</p>
        <div className="d-flex justify-content-between">
          <button onClick={handleToggleFavorite} className={`btn btn-primary`}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: isFavorite ? "red" : "black" }}
            />
          </button>
          <Link to={`/article/${id}`} className="btn btn-secondary">
            Leer más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Article;
