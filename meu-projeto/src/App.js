import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Julio'
  const newName = name.toUpperCase()
  const url = 'https://images.marvelsnap.io/images/cards/126.jpg'

  function sum(a, b) {
    return a+b
  }
  return (
    <div className="App">
      <h2>Alterando JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(2, 5)}</p>
      <img src={url} alt="Minha imagem" />
    </div>
  )
}

export default App;
