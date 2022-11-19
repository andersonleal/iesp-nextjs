import {Pokemon} from "../../interfaces/pokemon";
import classes from "./PokemonDetail.module.scss"
import Image from "next/image"

interface PokemonDetailProps {
  pokemon: Pokemon
}

function PokemonDetail({pokemon}: PokemonDetailProps) {
  return <div className={classes.pokemonDetail}>
    <div className={classes.pokemonDetail__card}>
      <h1>{pokemon.name}</h1>
      {pokemon.abilities.map(item => <li key={item.ability.name}>{item.ability.name}</li>)}
      <Image src={pokemon.sprites.other?.dream_world.front_default!} alt={pokemon.name} width={300} height={300} priority />
    </div>
  </div>
}

export default PokemonDetail