export default function AppCard({ series, thumb }) {

  return (
    <div className="col">
      <div className="card border-0">
        <img src={ thumb } className="card-img-top rounded-0 border-0" alt="cover comic" />
        <div className="card-body">
          <h5 className="card-title">{ series }</h5>
        </div>
      </div>
    </div>
  )




}