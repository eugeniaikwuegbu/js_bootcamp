const getPuzzle = async(wordCount) =>{
  let puzzle = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if(puzzle.status === 200){
    const data = await puzzle.json()
    return data.puzzle
  }else{
    throw new Error('Cannot fetch Puzzle')
  }
}

export{getPuzzle as default}