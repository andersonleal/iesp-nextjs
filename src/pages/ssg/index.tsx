import PokemonListComponent from "../../components/list/PokemonList";
import {PokemonList} from "../../interfaces/pokemon";
import PokemonService from "../../services/PokemonService";
import {GetStaticPropsContext} from "next";

interface PokemonPageProps {
  pokemonList: PokemonList
}

export default function PokemonPage({pokemonList}: PokemonPageProps) {
  return <PokemonListComponent pokemonList={pokemonList}/>
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const pokemonList = await PokemonService.list()
  return {
    props: {
      pokemonList
    }
  }
}
