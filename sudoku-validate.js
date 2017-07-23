function isMatrix(matrix) {
  return matrix.length === matrix
  .map((arr) => {
    return arr.length;
  })
  .reduce((ant, act) => {
    if(act === ant) return act;
    return false;
  });
}

function checkLine (row) {
  for (let i = row.length - 1; i >= 0; i -= 1) {
    if (row.indexOf(row[i]) !== i) {
      return false;
    }
  }
  return true;
}

function transposeArray(board) {
  if(board.length === 1 && typeof board[0] === 'number') return board;
  return board[0].map((col, i) => board.map(row => row[i]));
}

function checkLines(board) {
  if(!isMatrix(board)) return false;
  for (let i = 0; i < board.length; i += 1) {
    if (!checkLine(board[i]) || !checkLine(transposeArray(board)[i])) return false;
  }
  return true;
}

function getArray3x3(board, firstCoordX, firstCoordY) {
  let arr = [];
  for( let i = 0; i < 3; i += 1) {
    arr.push([]);
    for(let j = 0; j < 3; j += 1) {
      let value = board[firstCoordY + j][firstCoordX + i];
      arr[i].push(value);
    } 
  } 
  return arr;
}

function get3x3From9x9(board) {
  const arrayOfArrays = [];
  for(let i = 0; i <= 6; i += 3) {
    for(let j = 0; j <= 6; j += 3){
      arrayOfArrays.push(getArray3x3(board, j, i));    
    }
  }
  return arrayOfArrays;
}

function getPlainArray(matrix) {
	return [].concat(...matrix[0]).concat(...matrix[1]).concat(...matrix[2]);
}

function validate3x3(matrix) {
  if (!checkLine(getPlainArray(matrix))) return false;
  return true;
}

function checkAll3x3(board) {
  const arr = get3x3From9x9(board);
  for (let i = 0; i < board.length; i += 1) {
    if (!validate3x3(arr[i])) return false;
  }
  return true;
}

function isValidSolution(board) {
  if (!checkLines(board) || !checkAll3x3(board)) return false;
  return true;
}

module.exports = {
  checkLine,
  checkLines,
  getArray3x3,
  get3x3From9x9,
  isMatrix,
  transposeArray,
  isValidSolution,
  getPlainArray,
  validate3x3,
  checkAll3x3,
};