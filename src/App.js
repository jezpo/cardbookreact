import logo from './logo.svg';
import './App.css';

function App() {
  return (
    ///create to card in react component using storybook
    <div className="container">
          <div className="card-container" >
            <div className="description">
              <h1>Autor. Ing. Raul Gomez</h1>
              <h5>Analisis de la investigacion sobre radio en bolivia...</h5>
            </div>
            <div className="header">
              <h5>Ver Detalles</h5>
              <a href="#">
                <img src="book.png" alt="" width={140} height={210} />
              </a>
            </div>
          </div>
        </div>
  );
}

export default App;
