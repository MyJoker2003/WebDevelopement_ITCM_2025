import logo from './logo.svg';
import crunchylogo from './images/crunchylogo.webp'
import './App.css';
import { use, useState} from 'react'

const products = [
  {title:'Col',isFruit: false,id: 1},
  {title:'Ajo',isFruit: false, id: 2},
  {title:'Manzana',isFruit: false,id: 3},
];

/*const listItems = products.map(product =>
  <li key = {product.id}>
    {product.title}
  </li>
);*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/*<Mybutton/>
      <Profile/>
      <br/>
      <ShoppingList/>
      <br/>
      <SingleButton/>*/}
    </div>
  );
}

function Mybutton(){
  function handleClick(){
    alert ('You clicked on me!!!');
  }

  return(
    <button onClick={handleClick}>
      Hazme clic
    </button>
  );
}

function SingleButton(){
  const [count,setCount] = useState(0);
  function SingleButtonHandleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={SingleButtonHandleClick}>
      Hiciste clic {count} veces
    </button>
  );
}

function AboutPage(){
  return (
    <>
      <h1>Acerca de</h1>
      <p>Hola.<br>Como vas?</br></p>
    </>
  );
}

const user = {
  name: 'Juan Carlos',
  imageUrl:crunchylogo,
  imageSize: 90,
}

function Profile(){
  return (
    <>
      <h1>{user.name}</h1>
      <img 
        className = "avatar" 
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
        style={{
          with: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  )
}

function ShoppingList(){
  const listItems = products.map(product=>
    <li 
      key = {product.id}
      style = {{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <u>{listItems}</u>
  )
}

function Tweet(props){
  retur(
    <div className='Tweet'>
      <User user={props.author}/>
      <div>
        {props.text}
      </div>
      <img
          src={props.image.imageUrl}
          alt={props.image.description}
      />
      <div>
        {formatDate(props.date)}
      </div>
    </div>
  )
}

function Avatar(props){
  return(
    <img className='Avatar'
      src={props.image.avatarUrl}
      alt={props.user.name}
    />
  );
}

function User(props){
  return(
    <div>
      <Avatar user = {props.user}/>
      <div className='User-name'>
        {props.user.name}
      </div>
    </div>
  )
}

{/*Programa Tic Tac Toe*/}

function Square({value, onSquareClick}){
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  )
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  function handleClick(){
    const nextSquares = squares.slice();
    nextSquares[0] = "X"
    setSquares(nextSquares);
  }
  return (
    <>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={handleClick}/>
        <Square value={squares[1]} onSquareClick={handleClick}/>
        <Square value={squares[2]} onSquareClick={handleClick}/>
      </div>
      
    </>
  )
}


export default App;
