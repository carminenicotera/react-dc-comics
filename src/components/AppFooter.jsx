import dcLogoFooter from '/public/img/dc-logo-bg.png'

const dcComicsLinks = [
  { id: 1, title: "Characters", href: "#" },
  { id: 2, title: "Comics", href: "#" },
  { id: 3, title: "Movies", href: "#" },
  { id: 4, title: "TV", href: "#" },
  { id: 5, title: "Games", href: "#" },
  { id: 6, title: "Videos", href: "#" },
  { id: 7, title: "News", href: "#" }
];

const shopLinks = [
  { id: 1, title: "Shop DC", href: "#" },
  { id: 2, title: "Shop DC Collectibles", href: "#" }
];

const dcLinks = [
  { id: 1, title: "Terms Of Use", href: "#" },
  { id: 2, title: "Privacy Policy (New)", href: "#" },
  { id: 3, title: "Ad Choices", href: "#" },
  { id: 4, title: "Advertising", href: "#" },
  { id: 5, title: "Jobs", href: "#" },
  { id: 6, title: "Subscriptions", href: "#" },
  { id: 7, title: "Talent Workshops", href: "#" },
  { id: 8, title: "CPSC Certificates", href: "#" },
  { id: 9, title: "Ratings", href: "#" },
  { id: 10, title: "Shop Help", href: "#" },
  { id: 11, title: "Contact Us", href: "#" }
];

const sitesLinks = [
  { id: 1, title: "DC", href: "#" },
  { id: 2, title: "MAD Magazine", href: "#" },
  { id: 3, title: "DC Kids", href: "#" },
  { id: 4, title: "DC Universe", href: "#" },
  { id: 5, title: "DC Power Visa", href: "#" }
];

export default function AppFooter() {

  return (
    <>
      <footer>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 align-items-start">

            <div className="col">
              <h3>DC COMICS</h3>
              <ul className="list-unstyled">

                { dcComicsLinks.map(link => (
                  <li key={ link.id }>
                    <a href={ link.href } className="nav-link">
                      { link.title }
                    </a>
                  </li>
                )) }

              </ul>

              <h3>SHOP</h3>
              <ul className="list-unstyled">

                { shopLinks.map(link => (
                  <li key={ link.id }>
                    <a href={ link.href } className="nav-link">
                      { link.title }
                    </a>
                  </li>
                )) }

              </ul>
            </div>

            <div className="col">
              <h3>DC</h3>
              <ul className="list-unstyled">

                { dcLinks.map(link => (
                    <li key={ link.id }>
                      <a href={ link.href } className="nav-link">
                        { link.title }
                      </a>
                    </li>
                  )) }

              </ul>
            </div>

            <div className="col">
              <h3>SITES</h3>
              <ul className="list-unstyled">
                
                { sitesLinks.map(link => (
                  <li key={link.id}>
                    <a href={link.href} className="nav-link">
                      {link.title}
                    </a>
                  </li>
                ))}
                
              </ul>
            </div>

            <div className="col d-lg-flex justify-content-end">
              <img src={ dcLogoFooter } alt="DC Logo" />
            </div>

          </div>
        </div>

      </footer>
    </>
  )
}