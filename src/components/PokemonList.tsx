import classes from "./PokemonList.module.scss"
import {useEffect, useState} from "react";
import PokemonService from "../services/PokemonService";
import {PokemonList} from "../interfaces/pokemon";

interface PokemonListProps {
  pokemonList: PokemonList | undefined
}

function PokemonList({pokemonList}: PokemonListProps) {
  return <div className={classes.pokemonList}>
    {pokemonList?.results.map((item) => {
      return (
        <div key={item.url} className={classes.pokemonList__card}>
          {item.name}
        </div>
      )
    })}
  </div>
}

export function PokemonListClient() {
  const [pokemonList, setList] = useState<PokemonList>()

  useEffect(() => {
    PokemonService.list().then(list => {
      setList(list)
    })
  },[])

  return <PokemonList pokemonList={pokemonList}/>
}


export default PokemonList