import PokemonListComponent from "../../components/PokemonList";
import {PokemonList} from "../../interfaces/pokemon";
import PokemonService from "../../services/PokemonService";
import {GetServerSidePropsContext} from "next";

interface PokemonPageProps {
  pokemonList: PokemonList
}

export default function PokemonPage({pokemonList}: PokemonPageProps) {
  return <PokemonListComponent pokemonList={pokemonList}/>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const pokemonList = await PokemonService.list()
  return {
    props: {
      pokemonList
    }
  }
}
