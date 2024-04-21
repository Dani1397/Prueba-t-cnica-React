import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ArticleDetails({ articles }) {
  const { id } = useParams();
  const [articleDetail, setArticleDetail] = useState(null);

  useEffect(() => {
    const article = articles.find((article) => article.id === parseInt(id));
    if (article) {
      setArticleDetail(article);
    } else {
      setArticleDetail(null);
    }
  }, [articles, id]);

  if (!articleDetail) {
    return <div>Article not found</div>;
  }

  const { title, body } = articleDetail;

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 my-4">
            <div className="row align-items-center">
              <div className="col-4">
                <img
                  className="img-fluid"
                  src="/img/book-black-white.jpg"
                  alt="imagen guitarra"
                />
              </div>
              <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">
                  Title: {title}
                </h3>
                <p>Body: {body}</p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-secondary"
                    onClick={() => window.history.back()}
                  >
                    Atrás
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleDetails;
