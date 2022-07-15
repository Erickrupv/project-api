import React from 'react'
import useState from 'react'

export default function FindCharacter() {
    
    const [character, setcharacter] = useState([])


  return (
   <form>   
        <input 
        type='text' 
        placeholder="search character"
        value={character}
        ></input>
   </form>
  )
}
