import dcLogo from '/public/img/dc-logo.png'

export default function AppHeader() {

  return (
    <>
      {/* <header>
        <div className="container d-flex">
                <img src={dcLogo} alt="Logo DC" />
                <nav className="navbar nav">
                    <a className="nav-link" href="#">CHARACTERS</a>
                    <a className="nav-link" href="#">COMICS</a>
                    <a className="nav-link" href="#">MOVIES</a>
                    <a className="nav-link" href="#">TV</a>
                    <a className="nav-link" href="#">GAMES</a>
                    <a className="nav-link" href="#">COLLECTIBLES</a>
                    <a className="nav-link" href="#">VIDEOS</a>
                    <a className="nav-link" href="#">FANS</a>
                    <a className="nav-link" href="#">NEWS</a>
                    <a className="nav-link" href="#">SHOP</a>
                </nav>
            </div>
      </header> */}

      <header>
        <div className='container'>
        <img src={ dcLogo } alt="Logo DC" />
        <nav className='d-flex'>
          <a className="nav-link" href="#">CHARACTERS</a>
          <a className="nav-link active" href="#">COMICS</a>
          <a className="nav-link" href="#">MOVIES</a>
          <a className="nav-link" href="#">TV</a>
          <a className="nav-link" href="#">GAMES</a>
          <a className="nav-link" href="#">COLLECTIBLES</a>
          <a className="nav-link" href="#">VIDEOS</a>
          <a className="nav-link" href="#">FANS</a>
          <a className="nav-link" href="#">NEWS</a>
          <a className="nav-link" href="#">SHOP</a>
        </nav>
        </div>
      </header>
    </>
  )
}