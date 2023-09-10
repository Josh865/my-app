async function fetchPokemon(pokemon: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  return res.json();
}

type PageArgs = {
  params: {
    pokemon: string;
  };
};

export default async function Pokemon({ params }: PageArgs) {
  const pokemon = await fetchPokemon(params.pokemon);

  return (
    <main className="container pt-6">
      <h1 className="text-2xl font-medium tracking-tight">
        {pokemon.name} - {pokemon.height}
      </h1>
    </main>
  );
}
