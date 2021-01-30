 import React, { useState } from 'react';
 import Box from './Box';
 import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
 import ClearIcon from '@material-ui/icons/Clear';
 import './Board.css';



 

 function Board() {
     const[boardSquares,setBoardSquares]=useState(Array(9).fill(null));
     const[xIsNext,setxIsNext]=useState(true)


     function Winner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

     const handleClick=index=>{
         const squares=[...boardSquares];

         if(Winner(boardSquares) || squares[index]) return ;

         squares[index]=xIsNext ? <ClearIcon className="icon"/> :<FiberManualRecordIcon className="icon"/> 

         setBoardSquares(squares)
         setxIsNext(!xIsNext)
     }

     const renderSquare=(index)=>{
         return <Box value={boardSquares[index ]} onClick={(e)=>handleClick(index)}/>
     }

     let status;

     const winner=Winner(boardSquares)

     status=winner ? `Winner is ${winner}`:
     `Next player: ${xIsNext ? "X " : "O "}`
     return (

        
         <div className="board">
             <div className="status">{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}</div>


             <div/>
             <div className="row">
                 {renderSquare(0)} 
                 {renderSquare(1)} 
                 {renderSquare(2)}
            </div>
            <div className="row">
                 {renderSquare(3)} 
                 {renderSquare(4)} 
                 {renderSquare(5)}
            </div>
             <div className="row">
                 {renderSquare(6)} 
                 {renderSquare(7)} 
                 {renderSquare(8)}
            </div>
             <div/>
             
         </div>
     )
 }
 
 export default Board;
 
