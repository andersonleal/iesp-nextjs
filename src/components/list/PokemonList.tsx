import classes from "./PokemonList.module.scss"
import {useCallback, useEffect, useState} from "react";
import PokemonService from "../../services/PokemonService";
import {PokemonList} from "../../interfaces/pokemon";
import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/router";

interface PokemonListProps {
  pokemonList: PokemonList | undefined
}

function PokemonList({pokemonList}: PokemonListProps) {
  const router = useRouter()

  const onImageClick = useCallback((id: string)=> {
    return () => {
      router.push(`${router.asPath}/${id}`)
    }
  },[router])

  return <div className={classes.pokemonList}>
    {pokemonList?.results.map(({name, url}) => {
      const id = url.replace(/(.*)(\d)\/$/g, '$2')
      const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
      return (
        <div key={url} className={classes.pokemonList__card}>
          <Link href={`${router.asPath}/${id}`}>
            {name}
          </Link>
          <Image src={src} alt={name} width={100} height={100} priority onClick={onImageClick(id)}/>
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