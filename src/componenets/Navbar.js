import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link class="navbar-brand" to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
              width="30"
              height="30"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/out-team"
                >
                  Our Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tokens">
                  Tokners
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/connect-wallet">
                  Connect wallet
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/light-paper">
                  Lightpaper
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
