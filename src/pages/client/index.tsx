import {PokemonListClient} from "../../components/list/PokemonList";
import Link from "next/link";

export default function ClientListPage() {
  return (
    <div>
      <Link href={"/ssr"}>
        Pokemon Serverside
      </Link>
      <PokemonListClient/>
    </div>
  )
}


