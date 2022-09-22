import logo from "./assets/logo2.png";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex align-items-center ">
            <img
              width={50}
              height={50}
              src={logo}
              alt="logo"
              className="mr-2"
            />
            <div style={{ marginLeft: "50px", fontSize: "35px" }}>
              Project Management
            </div>
          </div>
        </a>
      </div>
    </nav>
  );
}
