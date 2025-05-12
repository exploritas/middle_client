import './assets/css/material-dashboard.css';

function App() {
  console.log('App.jsx rendering'); // Debug

  return (
    <>
      {/* Debug Fallback */}
      <div style={{ position: 'fixed', top: 0, left: 0, background: 'red', color: 'white', padding: '10px' }}>
        Debug: App is rendering
      </div>

      {/* Sidebar */}
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-radius-lg fixed-start ms-2 bg-white my-2"
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <i
            className="fas fa-times p-3 cursor-pointer text-dark opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <a className="navbar-brand px-4 py-3 m-0" href="#">
            <img
              src="/src/assets/img/logo-ct-dark.png"
              className="navbar-brand-img"
              width="26"
              height="26"
              alt="main_logo"
            />
            <span className="ms-1 text-sm text-dark">Trade Dashboard</span>
          </a>
        </div>
        <hr className="horizontal dark mt-0 mb-2" />
        <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active bg-gradient-dark text-white" href="#">
                <i className="material-symbols-rounded opacity-5">dashboard</i>
                <span className="nav-link-text ms-1">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        {/* Navbar */}
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-3 shadow-none border-radius-xl"
          id="navbarBlur"
          data-scroll="true"
        >
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">
                  <a className="opacity-5 text-dark" href="#">
                    Pages
                  </a>
                </li>
                <li className="breadcrumb-item text-sm text-dark active" aria-current="page">
                  Dashboard
                </li>
              </ol>
            </nav>
            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group input-group-outline">
                  <label className="form-label">Type here...</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="container-fluid py-2">
          <div className="row">
            <div className="ms-3">
              <h3 className="mb-0 h4 font-weight-bolder">Dashboard</h3>
              <p className="mb-4">Sample dashboard content.</p>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-2 ps-3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="text-sm mb-0 text-capitalize">Sample Metric</p>
                      <h4 className="mb-0">$53k</h4>
                    </div>
                    <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-lg">
                      <i className="material-symbols-rounded opacity-10">weekend</i>
                    </div>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-2 ps-3">
                  <p className="mb-0 text-sm">
                    <span className="text-success font-weight-bolder">+55% </span>than last week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
