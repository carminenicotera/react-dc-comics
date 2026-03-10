import dcLogoFooter from '/public/img/dc-logo-bg.png'

export default function AppFooter() {

  return (
    <>
      <footer>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 align-items-start">

            <div className="col">
              <h3>DC COMICS</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className='nav-link'>Characters</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>Comics</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>Movies</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>TV</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>Games</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>Videos</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>News</a>
                </li>
              </ul>

              <h3>SHOP</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className='nav-link'>Shop DC</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>Shop DC Collectibles</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h3>DC</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className='nav-link'>Terms Of Use</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>Privacy Policy (New)</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>Ad Choices</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>Advertising</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>Jobs</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>Subscriptions</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>Talent Workshops</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>CPSC Certificates</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>Ratings</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>Shop Help</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h3>SITES</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className='nav-link'>DC</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>MAD Magazine</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>DC Kids</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>DC Universe</a>
                </li>
                <li>
                  <a href="#" className='nav-link'>DC Power Visa</a>
                </li>
              </ul>
            </div>

            <div className="col d-lg-flex justify-content-end">
            <img src={dcLogoFooter} alt="DC Logo"/>
          </div>

          </div>
        </div>

      </footer>
    </>
  )
}