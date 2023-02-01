import logo from '../images/logo.png'; // Tell webpack this JS file uses this image
 
function header() {
  return (
<header>
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
           <img src={logo} alt="Logo" height="170px" width="170px" />
            <button claclassNamess="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="main.html">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="About.html">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Media.html">MEDIA</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Contact.html">CONTACT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="FAQ.html">FAQ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="trivia.html">TRIVIA</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

  )
}

export default header