import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App() {
  return (
    <div className="App">
      <Frase />
      <HelloWorld/>
      <SayMyName nome="Julio"/>
      <Pessoa  nome="Julio" idade="20" profissao="Programador" foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3n188gAHjJ14FGk2dK-qpUXvAbhgWKmJ2mw&usqp=CAU"/>

      <List />
    </div>
  )
}

export default App;
