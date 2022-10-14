export default function Home() {
  return (
    <div id="app">
      <div id="sidebar" className='active'>
        <div className="sidebar-wrapper active">
          <div className="sidebar-header">
            <img src="/static/assets/images/logo.svg" alt="" srcSet="" />
          </div>
          <div className="sidebar-menu">
            <ul className="menu">
              <li className='sidebar-title'>Dashboard</li>
              <li className="sidebar-item active ">
                <a href="index.html" className='sidebar-link'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                  </svg>
                  <span>Home</span>
                </a>
              </li>
              <li className='sidebar-title'>Traffic</li>
              <li className="sidebar-item  has-sub">
                <a href="#" className='sidebar-link'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    className="bi bi-pie-chart-fill" viewBox="0 0 16 16">
                    <path
                      d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z" />
                  </svg>
                  <span>Traffic</span>
                </a>
                <ul className="submenu ">
                  <li>
                    <a href="component-alert.html">Yesterday</a>
                  </li>
                  <li>
                    <a href="component-badge.html">Today</a>
                  </li>
                  <li>
                    <a href="component-breadcrumb.html">Month</a>
                  </li>
                </ul>
              </li>
              <li className='sidebar-title'>Products</li>
              <li className="sidebar-item  has-sub">
                <a href="#" className='sidebar-link'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    className="bi bi-p-circle" viewBox="0 0 16 16">
                    <path
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5V4.002Zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97H8.27Z" />
                  </svg>
                  <span>Products</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="form-element-input.html">Categories</a>
                  </li>
                  <li>
                    <a href="form-element-input-group.html">Products</a>
                  </li>
                  <li>
                    <a href="form-element-input-group.html">Brands</a>
                  </li>
                  <li>
                    <a href="form-element-select.html">Comment</a>
                  </li>
                  <li>
                    <a href="form-element-radio.html">Tags</a>
                  </li>
                  <li>
                    <a href="form-element-checkbox.html">Size</a>
                  </li>
                  <li>
                    <a href="form-element-textarea.html">Color</a>
                  </li>
                </ul>
              </li>
              <li className='sidebar-title'>Order</li>
              <li className="sidebar-item  has-sub">
                <a href="#" className='sidebar-link'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    className="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path
                      d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                  <span>Order</span>
                </a>
                <ul className="submenu ">
                  <li>
                    <a href="ui-chatbox.html">List</a>
                  </li>
                </ul>
              </li>
              <li className='sidebar-title'>Post</li>
              <li className="sidebar-item  has-sub">
                <a href="#" className='sidebar-link'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    className="bi bi-newspaper" viewBox="0 0 16 16">
                    <path
                      d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                    <path
                      d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                  </svg>
                  <span>Blogs</span>
                </a>
                <ul className="submenu ">
                  <li>
                    <a href="ui-chatbox.html">Categories</a>
                  </li>
                  <li>
                    <a href="ui-pricing.html">Post</a>
                  </li>
                  <li>
                    <a href="ui-todolist.html">Comment</a>
                  </li>
                  <li>
                    <a href="ui-todolist.html">Tags</a>
                  </li>
                </ul>
              </li>
              <li className='sidebar-title'>Email</li>
              <li className="sidebar-item  has-sub">
                <a href="#" className='sidebar-link'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    className="bi bi-envelope-plus" viewBox="0 0 16 16">
                    <path
                      d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                    <path
                      d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                  </svg>
                  <span>Newsletter</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="ui-chatbox.html">Sign</a>
                  </li>
                  <li>
                    <a href="ui-pricing.html">Price</a>
                  </li>
                  <li>
                    <a href="ui-todolist.html">Contact</a>
                  </li>
                </ul>
              </li>
              <li className='sidebar-title'>Static</li>
              <li className="sidebar-item  has-sub">
                <a href="#" className='sidebar-link'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" className="feather feather-file-text">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <span>Pages</span>
                </a>
                <ul className="submenu ">
                  <li>
                    <a href="auth-login.html">About</a>
                  </li>
                  <li>
                    <a href="auth-register.html">Contact</a>
                  </li>
                  <li>
                    <a href="auth-forgot-password.html">Promotions</a>
                  </li>
                </ul>
              </li>
              <li className='sidebar-title'>General</li>
              <li className="sidebar-item">
                <a href="table.html" className='sidebar-link'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    className="bi bi-sliders2-vertical" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                      d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5ZM2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5ZM8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1Zm3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5Zm2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z" />
                  </svg>
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="main">
        <nav className="navbar navbar-header navbar-expand navbar-light">
          <a className="sidebar-toggler" href="#"><span className="navbar-toggler-icon"></span></a>
          <button className="btn navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex align-items-center navbar-light ms-auto">
              <li className="dropdown nav-icon">
                <a href="#" data-bs-toggle="dropdown"
                  className="nav-link  dropdown-toggle nav-link-lg nav-link-user">
                  <div className="d-lg-inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-large">
                  <h6 className='py-2 px-4'>Notifications</h6>
                  <ul className="list-group rounded-none">
                    <li className="list-group-item border-0 align-items-start">
                      <div className="avatar bg-success me-3">
                        <span className="avatar-content"><i data-feather="shopping-cart"></i></span>
                      </div>
                      <div>
                        <h6 className='text-bold'>New Order</h6>
                        <p className='text-xs'>
                          An order made by Ahmad Saugi for product Samsung Galaxy S69
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="dropdown nav-icon me-2">
                <a href="#" data-bs-toggle="dropdown"
                  className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                  <div className="d-lg-inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-plus" viewBox="0 0 16 16">
                      <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                      <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                  </svg> Account</a>
                  <a className="dropdown-item active" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-plus" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                  </svg> Messages</a>
                  <a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg> Settings</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                    <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                  </svg> Logout</a>
                </div>
              </li>
              <li className="dropdown">
                <a href="#" data-bs-toggle="dropdown"
                  className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                  <div className="avatar me-1">
                    <img src="/static/assets/images/avatar/avatar-s-1.png" alt="" srcSet="" />
                  </div>
                  <div className="d-none d-md-block d-lg-inline-block">Hi, Admin</div>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                  </svg> Account</a>
                  <a className="dropdown-item active" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-plus" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                  </svg> Messages</a>
                  <a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg> Settings</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                    <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                  </svg> Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main-content container-fluid">
          <div className="page-title">
            <h3>Home</h3>
            <p className="text-subtitle text-muted">A good dashboard to display your statistics</p>
          </div>
          <section className="section">
            <div className="row mb-2">
              <div className="col-12 col-md-3">
                <div className="card card-statistic">
                  <div className="card-body p-0">
                    <div className="d-flex flex-column">
                      <div className='px-3 py-3 d-flex justify-content-between'>
                        <h3 className='card-title'>BALANCE</h3>
                        <div className="card-right d-flex align-items-center">
                          <p>$50 </p>
                        </div>
                      </div>
                      <div className="chart-wrapper">
                        <canvas id="canvas1" style={{ height: '100px !important' }}></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card card-statistic">
                  <div className="card-body p-0">
                    <div className="d-flex flex-column">
                      <div className='px-3 py-3 d-flex justify-content-between'>
                        <h3 className='card-title'>Revenue</h3>
                        <div className="card-right d-flex align-items-center">
                          <p>$532,2 </p>
                        </div>
                      </div>
                      <div className="chart-wrapper">
                        <canvas id="canvas2" style={{ height: 'height:100px !important' }}></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card card-statistic">
                  <div className="card-body p-0">
                    <div className="d-flex flex-column">
                      <div className='px-3 py-3 d-flex justify-content-between'>
                        <h3 className='card-title'>ORDERS</h3>
                        <div className="card-right d-flex align-items-center">
                          <p>1,544 </p>
                        </div>
                      </div>
                      <div className="chart-wrapper">
                        <canvas id="canvas3" style={{ height: '100px !important' }}></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card card-statistic">
                  <div className="card-body p-0">
                    <div className="d-flex flex-column">
                      <div className='px-3 py-3 d-flex justify-content-between'>
                        <h3 className='card-title'>Sales Today</h3>
                        <div className="card-right d-flex align-items-center">
                          <p>423 </p>
                        </div>
                      </div>
                      <div className="chart-wrapper">
                        <canvas id="canvas4" style={{ height: `100px !important` }}></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <h3 className='card-heading p-1 pl-3'>Sales</h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4 col-12">
                        <div className="pl-3">
                          <h1 className='mt-5'>$21,102</h1>
                          <p className='text-xs'><span className="text-green"><i data-feather="bar-chart"
                            width="15"></i> +19%</span> than last month</p>
                          <div className="legends">
                            <div className="legend d-flex flex-row align-items-center">
                              <div className='w-3 h-3 rounded-full bg-info me-2'></div><span
                                className='text-xs'>Last Month</span>
                            </div>
                            <div className="legend d-flex flex-row align-items-center">
                              <div className='w-3 h-3 rounded-full bg-blue me-2'></div><span
                                className='text-xs'>Current Month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8 col-12">
                        <canvas id="bar"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h4 className="card-title">Orders Today</h4>
                    <div className="d-flex ">
                      <i data-feather="download"></i>
                    </div>
                  </div>
                  <div className="card-body px-0 pb-0">
                    <div className="table-responsive">
                      <table className='table mb-0' id="table1">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Graiden</td>
                            <td>vehicula.aliquet@semconsequat.co.uk</td>
                            <td>076 4820 8838</td>
                            <td>Offenburg</td>
                            <td>
                              <span className="badge bg-success">Active</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Dale</td>
                            <td>fringilla.euismod.enim@quam.ca</td>
                            <td>0500 527693</td>
                            <td>New Quay</td>
                            <td>
                              <span className="badge bg-success">Active</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Nathaniel</td>
                            <td>mi.Duis@diam.edu</td>
                            <td>(012165) 76278</td>
                            <td>Grumo Appula</td>
                            <td>
                              <span className="badge bg-danger">Inactive</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Darius</td>
                            <td>velit@nec.com</td>
                            <td>0309 690 7871</td>
                            <td>Ways</td>
                            <td>
                              <span className="badge bg-success">Active</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Ganteng</td>
                            <td>velit@nec.com</td>
                            <td>0309 690 7871</td>
                            <td>Ways</td>
                            <td>
                              <span className="badge bg-success">Active</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Oleg</td>
                            <td>rhoncus.id@Aliquamauctorvelit.net</td>
                            <td>0500 441046</td>
                            <td>Rossignol</td>
                            <td>
                              <span className="badge bg-success">Active</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Kermit</td>
                            <td>diam.Sed.diam@anteVivamusnon.org</td>
                            <td>(01653) 27844</td>
                            <td>Patna</td>
                            <td>
                              <span className="badge bg-success">Active</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card ">
                  <div className="card-header">
                    <h4>Your Earnings</h4>
                  </div>
                  <div className="card-body">
                    <div id="radialBars"></div>
                    <div className="text-center mb-5">
                      <h6>From last month</h6>
                      <h1 className='text-green'>+$2,134</h1>
                    </div>
                  </div>
                </div>
                <div className="card widget-todo">
                  <div
                    className="card-header border-bottom d-flex justify-content-between align-items-center">
                    <h4 className="card-title d-flex">
                      <i className='bx bx-check font-medium-5 pl-25 pr-75'></i>Progress
                    </h4>

                  </div>
                  <div className="card-body px-0 py-1">
                    <table className='table table-borderless'>
                      <tbody>
                        <tr>
                          <td className='col-3'>UI Design</td>
                          <td className='col-6'>
                            <div className="progress progress-info">
                              <div className="progress-bar" role="progressbar" style={{ width: '60%' }}
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                          <td className='col-3 text-center'>60%</td>
                        </tr>
                        <tr>
                          <td className='col-3'>VueJS</td>
                          <td className='col-6'>
                            <div className="progress progress-success">
                              <div className="progress-bar" role="progressbar" style={{ width: `35%` }}
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                          <td className='col-3 text-center'>30%</td>
                        </tr>
                        <tr>
                          <td className='col-3'>Laravel</td>
                          <td className='col-6'>
                            <div className="progress progress-danger">
                              <div className="progress-bar" role="progressbar" style={{ width: `50%` }}
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                          <td className='col-3 text-center'>50%</td>
                        </tr>
                        <tr>
                          <td className='col-3'>ReactJS</td>
                          <td className='col-6'>
                            <div className="progress progress-primary">
                              <div className="progress-bar" role="progressbar" style={{ width: `80%` }}
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                          <td className='col-3 text-center'>80%</td>
                        </tr>
                        <tr>
                          <td className='col-3'>Go</td>
                          <td className='col-6'>
                            <div className="progress progress-secondary">
                              <div className="progress-bar" role="progressbar" style={{ width: '65%' }}
                                aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                          <td className='col-3 text-center'>65%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer>
          <div className="footer clearfix mb-0 text-muted">
            <div className="float-start">
              <p>2022 &copy; Voler</p>
            </div>
            <div className="float-end">
              <p>Crafted with <span className='text-danger'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></span> by <a
                href="https://saugi.me">Allgrow Labo</a></p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
