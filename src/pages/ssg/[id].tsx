import {GetStaticPropsContext} from "next";
import PokemonService from "../../services/PokemonService";
import {Pokemon} from "../../interfaces/pokemon";
import PokemonDetails from "../../components/detail/PokemonDetail"

interface PokemonDetailsProps {
  pokemon: Pokemon
}

function PokemonDetail({pokemon}: PokemonDetailsProps) {
  if(!pokemon) {
    return <div>loading...</div>
  }
  return <PokemonDetails pokemon={pokemon}/>
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1'
        }
      },{
        params: {
          id: '2'
        }
      },{
        params: {
          id: '3'
        }
      },
    ],
    fallback: 'blocking'
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const pokemon = await PokemonService.get(context.params?.id as string)
    await PokemonService.timeout(3000)
    // if(1===1) {
    //   return {
    //     redirect: {
    //       destination: '/ssg',
    //       permanent: false
    //     }
    //   }
    // }

    return {
      revalidate: 60,
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