//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    ///create to card in react component using storybook
    <div className="container">
          <div className="card-container" >
            <div className="description">
              <h3>Autor. Ing. Raul Gomez</h3>
              <br/>
              <br/>
              <br/>
              <div class="grid-container">
                <div class="grid-item"><h6>Analisis de la investigacion sobre radio en bolivia...</h6></div>
                  <div class="grid-item"><h6>325 pag</h6></div>
                </div>
                <br/>
                <hr/>
            </div>
            
            <div className="header">
              <h5>Ver Detalles</h5>
              
              <img src="https://source.unsplash.com/random/140x210" alt="" width={140} height={210} />
              
            </div>
          </div>
        </div>
  );
}

export default App;
