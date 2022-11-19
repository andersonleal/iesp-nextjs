import {Pokemon, PokemonList} from "../interfaces/pokemon";

class PokemonService {
  async list(): Promise<PokemonList> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    return await response.json()
  }

  get(id: string): Promise<Pokemon> {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
  }

  timeout(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }
}

export default new PokemonService()