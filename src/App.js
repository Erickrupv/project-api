import { Button, Autocomplete, Grid, Box } from "@mui/material";
import ShowCharacter from "./components/ShowCharacter";
import { getAllCharacter } from "./helper/getAllCharacters";
import { useState, useEffect } from "react";
import { Input } from "@mui/material";
import './index.css';

function App() {
  const [character, setcharacter] = useState([]);

  const getCharacter = async (name) => {
    const data = await getAllCharacter(name);
    setcharacter(data);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div className="item">

      <Box className="item" display='flex' alignItems='center' justifyContent='center' sx={{mb:10}}>
      <Input
        placeholder="Search for a character"
        onChange={(e) => getCharacter(e.target.value)}
      />
      </Box>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {character.map((character) => (
          <Grid item>
            <ShowCharacter {...character} />{" "}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
