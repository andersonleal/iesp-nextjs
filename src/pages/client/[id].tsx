import PokemonDetails from "../../components/detail/PokemonDetail"
import {useCallback, useEffect, useState} from "react";
import {Pokemon} from "../../interfaces/pokemon";
import PokemonService from "../../services/PokemonService";
import {useRouter} from "next/router";

function PokemonDetail() {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>()
  const router = useRouter()

  const fetch = useCallback(async function fetch() {
    if(router.query.id) {
      try {
        const response = await PokemonService.get(router.query.id as string)
        setPokemon(response)
      } catch (e) {
        console.error(e)
      }
    }

  },[router.query.id])



  useEffect(() => {
    fetch()
  },[fetch])


  console.log({pokemon})
  if(!pokemon) {
    return <div>loading...</div>
  }

  return <PokemonDetails pokemon={pokemon}/>
}


export default PokemonDetail