import {PokemonListClient} from "../components/PokemonList";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/pokemon"}>
        Pokemon Serverside
      </Link>
      <PokemonListClient/>
    </div>
  )
}


