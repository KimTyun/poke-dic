import PokeDicTemplate from './componants/PokeDicTemplate.jsx'
import Insert from './componants/Insert'
import List from './componants/List.jsx'
import { useCallback, useMemo, useRef, useState } from 'react'

function App() {
   const allPokemonList = useMemo(
      () => [
         {
            name: '고라파덕',
            gen: ['고라파덕', '골덕'],
         },
         {
            name: '골덕',
            gen: ['고라파덕', '골덕'],
         },
         {
            name: '파이리',
            gen: ['파이리', '리자드', '리자몽'],
         },
         {
            name: '리자드',
            gen: ['파이리', '리자드', '리자몽'],
         },
         {
            name: '리자몽',
            gen: ['파이리', '리자드', '리자몽'],
         },
         {
            name: '꼬부기',
            gen: ['꼬부기', '어니부기', '거북왕'],
         },
         {
            name: '어니부기',
            gen: ['꼬부기', '어니부기', '거북왕'],
         },
         {
            name: '거북왕',
            gen: ['꼬부기', '어니부기', '거북왕'],
         },
         {
            name: '메타몽',
            gen: ['메타몽'],
         },
         {
            name: '야돈',
            gen: ['야돈', '야도란'],
         },
         {
            name: '야도란',
            gen: ['야돈', '야도란'],
         },
         {
            name: '나옹',
            gen: ['나옹', '페르시온'],
         },
         {
            name: '페르시온',
            gen: ['나옹', '페르시온'],
         },
         {
            name: '이상해씨',
            gen: ['이상해씨', '이상해풀', '이상해꽃'],
         },
         {
            name: '이상해풀',
            gen: ['이상해씨', '이상해풀', '이상해꽃'],
         },
         {
            name: '이상해꽃',
            gen: ['이상해씨', '이상해풀', '이상해꽃'],
         },
         {
            name: '피카츄',
            gen: ['피츄', '피카츄', '라이츄'],
         },
         {
            name: '피츄',
            gen: ['피츄', '피카츄', '라이츄'],
         },
         {
            name: '라이츄',
            gen: ['피츄', '피카츄', '라이츄'],
         },
      ],
      [],
   )

   const [pokemons, setPokemons] = useState([
      {
         id: 1,
         name: '파이리',
         url: '/images/파이리.png',
         disabled: false,
         gen: ['파이리', '리자드', '리자몽'],
      },
      {
         id: 2,
         name: '고라파덕',
         url: '/images/고라파덕.png',
         disabled: false,
         gen: ['고라파덕', '골덕'],
      },
      {
         id: 3,
         name: '꼬부기',
         url: '/images/꼬부기.png',
         disabled: false,
         gen: ['꼬부기', '어니부기', '거북왕'],
      },
   ])

   const pokemonChecker = useCallback(
      (name) => {
         if (!allPokemonList.some((e) => e.name === name)) {
            alert('존재하지 않는 포켓몬입니다.')
            return false
         }
         if (pokemons.some((e) => e.name === name)) {
            alert('이미 등록되어 있는 포켓몬입니다.')
            return false
         }
         return true
      },
      [allPokemonList, pokemons],
   )

   const nextId = useRef(4)

   const onAddPokemon = useCallback(
      function (name) {
         if (!pokemonChecker(name)) return

         const addedPokemons = pokemons.concat({
            id: nextId.current,
            name,
            url: `/images/${name}.png`,
            disabled: false,
            gen: allPokemonList.find((pokemon) => pokemon.name === name).gen,
         })
         setPokemons(addedPokemons)
         nextId.current += 1
      },
      [pokemons, pokemonChecker, allPokemonList],
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
         setPokemons(disabledPokemons)
      },
      [pokemons],
   )

   return (
      <PokeDicTemplate>
         <Insert onAddPokemon={onAddPokemon} allPokemonList={allPokemonList} />
         <List pokemons={pokemons} onRemovePokemon={onRemovePokemon} onDisabledPokemon={onDisabledPokemon} />
      </PokeDicTemplate>
   )
}

export default App
