import Pokemon from './Pokemon'

function List({ pokemons, onRemovePokemon, onDisabledPokemon }) {
   return (
      <ul className="list">
         {pokemons.map((mon) => (
            <Pokemon key={mon.id} mon={mon} onRemovePokemon={onRemovePokemon} onDisabledPokemon={onDisabledPokemon} />
         ))}
      </ul>
   )
}

export default List
