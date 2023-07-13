
function App() {

  return (
    <>
      <div className="container">
        <h2 className="mt-4 mb-4" >Cadastro de Filmes</h2>
      <form className="row g-3">
        <div className="col-md-7">
          <label className="form-label">Título</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-7">
          <label className="form-label">Sinopse</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-7">
          <label className="form-label">Votos</label>
          <input type="text" className="form-control" />
          <button className="btn btn-primary mt-4">Xesquedele</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default App
