import { useCallback, useState } from 'react'

function Insert({ onAddPokemon, allPokemonList }) {
   const [text, setText] = useState('')

   const onChange = useCallback((e) => setText(e.target.value), [])

   const onSubmit = useCallback(
      (e) => {
         e.preventDefault()
         onAddPokemon(text)
         setText('')
      },
      [text, onAddPokemon],
   )

   const onDisplayAllPokemons = useCallback(() => {
      alert('현재 등록가능한 포켓몬들 : ' + allPokemonList.map((e) => e.name))
   }, [allPokemonList])

   return (
      <div className="insertWrap">
         <form className="insert" onSubmit={onSubmit}>
            <input type="text" placeholder="포켓몬 이름을 입력하세요" value={text} onChange={onChange} />
            <button type="submit">등록</button>
            <button onClick={onDisplayAllPokemons} type="button">
               목록
            </button>
         </form>
      </div>
   )
}

export default Insert
