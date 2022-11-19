import {PokemonList} from "../interfaces/pokemon";

class PokemonService {
  async list(): Promise<PokemonList> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    return await response.json()
  }

  list2(): Promise<PokemonList> {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then((response) => response.json())
  }
}

export default new PokemonService()