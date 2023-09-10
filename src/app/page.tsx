import Link from 'next/link';

type PokemonResponse = {
  name: string;
  url: string;
}[];

async function fetchPokemon(): Promise<PokemonResponse> {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await res.json();
  return data.results;
}

export default async function Home() {
  const pokemon = await fetchPokemon();

  return (
    <main className="container pt-6">
      <h1 className="text-2xl font-medium tracking-tight">Pokemon</h1>
      <ul className="mt-6">
        {pokemon.map((pokemon) => (
          <li key={pokemon.name}>
            <Link
              href={`/${pokemon.name}`}
              className="text-blue-600 hover:text-black"
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
