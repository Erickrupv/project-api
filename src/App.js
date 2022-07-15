import { useEffect } from "react";
import FindCharacter from "./components/FindCharacter";
import { getCharacters } from "./helper/getCharacters";

function App() {
  
  const getCharacter = async() => {
    return await getCharacters('rick');
  }

  

  return (
    <div>
      <button onClick={getCharacter}></button>
      <FindCharacter />
    </div>
  );
}

export default App;
