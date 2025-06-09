import { useCallback, useState } from 'react'

function Insert({ onAddPokemon }) {
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

   return (
      <form className="Insert" onSubmit={onSubmit}>
         <input type="text" placeholder="포켓몬 이름을 입력하세요" value={text} onChange={onChange} />
         <button type="submit">등록</button>
      </form>
   )
}

export default Insert
