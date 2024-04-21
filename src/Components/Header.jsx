function Header() {
  return (
    <header className="py-2 header">
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="./public/img/logo.svg"
                alt="imagen logo"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;