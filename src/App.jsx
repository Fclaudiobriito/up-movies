import { useState } from "react"

 
function App() {

  const [fields, setFields] = useState({
    titulo: '',
    sinopse: 'O filme é bom',
    votos: ''
  })

  const adicionar = event => {
    // evita que a página seja recarregada
    event.preventDefault()
    console.log('add', fields);
  }

  const atualizaInput = event => {
    console.log(event.target.id)
    setFields({...fields, [event.target.id]: event.target.value})
  }

  return (
    <>
      <div className="container">
        <h2 className="mt-4 mb-4" >Cadastro de Filmes</h2>
      <form className="row g-3">
        <div className="col-md-7">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input id="titulo" type="text" className="form-control" value={fields.titulo} onChange={atualizaInput}/>
        </div>
        <div className="col-md-7">
          <label htmlFor="sinopse" className="form-label">Sinopse</label>
          <input id="sinopse" type="text" className="form-control" value={fields.sinopse} onChange={atualizaInput}/>
        </div>
        <div className="col-md-7">
          <label htmlFor="votos" className="form-label">Votos</label>
          <input id="votos" type="text" className="form-control" value={fields.votos} onChange={atualizaInput}/>
          <button className="btn btn-primary mt-4" onClick={adicionar}>Xesquedele</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default App
