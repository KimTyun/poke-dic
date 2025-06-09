import './App.css'
import PokeDicTemplate from './componants/PokeDicTemplate.jsx'
import Insert from './componants/Insert'
import List from './componants/List'
import { useCallback, useRef, useState } from 'react'

function App() {
   const allPokemonList = ['고라파덕', '꼬부기', '메타몽', '야돈', '야옹', '이상해씨', '파이리', '푸린', '피카츄']
   const [pokemons, setPokemons] = useState([
      {
         id: 1,
         name: '파이리',
         url: '../public/images/파이리.png',
         disabled: false,
      },
      {
         id: 2,
         name: '고라파덕',
         url: '../public/images/고라파덕.png',
         disabled: false,
      },
      {
         id: 3,
         name: '꼬부기',
         url: '../public/images/꼬부기.png',
         disabled: false,
      },
   ])

   const nextId = useRef(4)

   const onAddPokemon = useCallback(
      function (name) {
         if (!allPokemonList.includes(name)) {
            alert('존재하지 않는 포켓몬입니다.')
            return
         }
         if (true) {
         }
         const addedPokemons = pokemons.concat({
            id: nextId.current,
            name,
            url: `../public/images/${name}.png`,
            disabled: false,
         })
         setPokemons(addedPokemons)
         nextId.current += 1
      },
      [pokemons],
   )

   const onRemovePokemon = useCallback(
      function (name) {
         const removedPokemons = pokemons.filter((e) => e.name != name)
         setPokemons(removedPokemons)
      },
      [pokemons],
   )

   const onDisabledPokemon = useCallback(
      function (name) {
         const disabledPokemons = pokemons.map((e) =>
            e.name === name
               ? {
                    ...e,
                    disabled: !e.disabled,
                 }
               : e,
         )
         setPokemons(removedPokemons)
      },
      [pokemons],
   )

   return (
      <PokeDicTemplate>
         <Insert onAddPokemon={onAddPokemon} />
         <List pokemons={pokemons} onRemovePokemon={onRemovePokemon} onDisabledPokemon={onDisabledPokemon} />
      </PokeDicTemplate>
   )
}

export default App
