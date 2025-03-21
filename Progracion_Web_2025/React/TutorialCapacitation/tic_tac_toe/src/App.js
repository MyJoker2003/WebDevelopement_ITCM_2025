import './App.css';
import { useState } from 'react';

/**
 * Materia: PROGRAMACION WEB.
 * Fecha de Creacion: 13-03-2025.
 * Autor: Anastasio Salas Juan Carlos.
 */


/**
 * Practica #1 React Tutorial
 * @returns {JSX} Componente { Juego Basico de Tic Tac Toe }
 */

{/*Programa Tic Tac Toe*/}

function Game(){
  /**Estado para recordar los valores en el tablero e historial*/
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove,setCurrentMove] = useState (0);
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove];

  /**
   * @description actualiza el historial si ha habido un retroceso y se actualiza
   * el numero del movimiento
   * @param {Array} nextSquares 
   */
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0,currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  /**
   * @description Define el id o key del ultimo movimiento
   * @param {number} nextMove 
   */
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  /**
   * @description Lista dinamica con base en el historial del movimiento
   * @returns {JSX} Lista de Buttons de navegacion del juego.
   */
  const moves = history.map((squares,move)=>{
    let description;
    description = move > 0 ? 'Ir al movimiento #' + move : 'Ir al inicio del juego';

    return (
      <li key={move}>
        <button onClick={()=> jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

/**
 * @description Parte del Tablero de Juego con contenido cambiante.
 * @param {number} value
 * @param {function} onSquareClick
 * @returns {JSX}Button Component. 
 */
function Square({value, onSquareClick}){
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  )
}

/**
 * @param {boolean} xIsNext Indica el turno del jugador
 * @param {Array} squares Distribucion de las marcas (X/O) en el tablero
 * @param {function} onPlay Acciones al marcar una casilla. Funcion de Orden Superior
 * @returns {JSX}Tablero de Juego con matriz de 3X3 de Components Square  
 */
function Board({ xIsNext, squares, onPlay }) {

  /**
   * @description muestra el movimiento que hizo el jugador y cambia el turno.
   * @param {number} i Identificador del boton presionado
   */
  function handleClick(i){
    //si el elemento en squares[i] ya esta ocupado o ya hay ganador.
    if (squares[i] || calculateWinner(squares)) return;
    
    const nextSquares = squares.slice(); //Se crea una copia del tablero fuente.
    nextSquares[i] = xIsNext ? "X" : "O"; //Se modifica la copia
    
    onPlay(nextSquares); //Se reemplaza el tablero con la copia modificada.
  }

  const winner = calculateWinner(squares);
  let status;
  status = winner ? 'Ganador:' + winner : 'Siguiente jugador '+(xIsNext ? 'X':'O');

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
    </>
  )
}

/**
 * @description Busca si el table actual cumple con las condiciones de vitoria
 * para cualquiera de los jugaodres.
 * @param {Array} squares 
 * @returns {String} El simbolo del jugador ganador o null
 */
function calculateWinner(squares){
  //Combinaciones ganadoras
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  //Se evalua para todas las instrucciones ganadoras
  for (let i = 0; i< lines.length; i++){
    const [a,b,c] = lines[i];
    //Si la conbinacion ganadora esta ocupada por los mismo elementos
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
        //El simbolo del ganador
    }
  }
  return null; //No existe ganador de momento.
}

export default Game; //Se exporta la funcion Contenedora principal
