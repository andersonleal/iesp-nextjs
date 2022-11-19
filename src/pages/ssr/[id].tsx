import {GetServerSidePropsContext} from "next";
import PokemonService from "../../services/PokemonService";
import {Pokemon} from "../../interfaces/pokemon";
import PokemonDetails from "../../components/detail/PokemonDetail"

interface PokemonDetailsProps {
  pokemon: Pokemon
}

function PokemonDetail({pokemon}: PokemonDetailsProps) {
  return <PokemonDetails pokemon={pokemon}/>
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const pokemon = await PokemonService.get(context.query.id as string)
    await PokemonService.timeout(3000)
    return {
      props: {
        pokemon
      }
    }
  } catch (e) {
    console.error(e)
    return {
      notFound: true
    }
  }

}


export default PokemonDetail