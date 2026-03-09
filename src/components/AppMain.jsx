import jumbotron from '/public/img/jumbotron.jpg'

export default function AppMain() {
  return (
    <>
      <main className>
        <div className="jumbotron">
          <img src={jumbotron} alt="jumbotron" />
        </div>
      </main>
    </>
  )
}