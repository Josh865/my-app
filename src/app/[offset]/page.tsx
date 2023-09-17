import Link from 'next/link';

type PokemonResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

function getOffset(url: string) {
  const searchParams = new URL(url).searchParams;
  return searchParams.get('offset');
}

async function fetchPokemon(offset = 0): Promise<PokemonResponse> {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`,
  );
  return res.json();
}

export default async function Home({ params }: { params: { offset: string } }) {
  const data = await fetchPokemon(Number(params.offset));

  return (
    <div className="container py-6">
      <h1 className="text-xl font-medium tracking-tight">All Pokemon</h1>
      <ul className="mt-6">
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>
            <Link
              href={`/pokemon/${pokemon.name}`}
              className="text-blue-600 hover:text-black"
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-baseline gap-x-4">
        {data.previous ? (
          <Link href={`/${getOffset(data.previous)}`}>Previous</Link>
        ) : null}
        {data.next ? <Link href={`/${getOffset(data.next)}`}>Next</Link> : null}
      </div>
    </div>
  );
}
