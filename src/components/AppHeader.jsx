import dcLogo from '/public/img/dc-logo.png'

const links = [
  {
    id: 1,
    title: 'CHARACTERS',
    href: '#',
    state: false
  },
  {
    id: 2,
    title: 'COMICS',
    href: '#',
    state: true
  },
  {
    id: 3,
    title: 'MOVIES',
    href: '#',
    state: false
  },
  {
    id: 4,
    title: 'TV',
    href: '#',
    state: false
  },
  {
    id: 5,
    title: 'GAMES',
    href: '#',
    state: false
  },
  {
    id: 6,
    title: 'COLLECTIBLES',
    href: '#',
    state: false
  },
  {
    id: 7,
    title: 'VIDEOS',
    href: '#',
    state: false
  },
  {
    id: 8,
    title: 'FANS',
    href: '#',
    state: false
  },
  {
    id: 9,
    title: 'NEWS',
    href: '#',
    state: false
  },
  {
    id: 10,
    title: 'SHOP',
    href: '#',
    state: false
  }
];

export default function AppHeader() {

  return (
    <>
      <header>
        <div className='container d-flex align-items-center justify-content-between'>
          <img src={ dcLogo } alt="Logo DC" />
          <nav className='d-flex'>
            { links.map(link => (
              <a key={ link.id } className={`nav-link ${link.state ? 'active' : ''}`} href={ link.href }>{ link.title }</a>
            )) }
          </nav>
        </div>
      </header>
    </>
  )
}