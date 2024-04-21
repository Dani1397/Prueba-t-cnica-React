function FavoriteCounter({ favoriteCount }) {
  return (
    <div>
      <h4 className="text-black fs-4 fw-bold text-center">
        {" "}
        Has agregado {favoriteCount} libros a tus favoritos!{" "}
      </h4>
    </div>
  );
}

export default FavoriteCounter;
