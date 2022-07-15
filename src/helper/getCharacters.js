export const getCharacters = async (character) => {
  const url = `https://rickandmortyapi.com/api/character/?name=${character}`;
  const res = await fetch(url);
  const { results } = await res.json();

  const characters = results.map((character) => ({
    name: character.name,
    status: character.status,
    species: character.species,
  }));

  return characters;
};
