import classNames from 'classnames'
import PokemonDetail from './PokemonDetail'
import { useState } from 'react'

function Pokemon({ mon, onRemovePokemon, onDisabledPokemon }) {
   const [show, setShow] = useState(false)

   const handleClose = () => setShow(false)
   const handleShow = () => setShow(true)
   return (
      <>
         <li>
            <div className={classNames('pokemonWrap', { grayscale: mon.disabled })} onDoubleClick={() => onDisabledPokemon(mon.name)}>
               <div>
                  <img src={mon.url} alt={mon.name} />
               </div>
               <div>
                  <p>{mon.name}</p>
                  <button onClick={handleShow} disabled={mon.disabled}>
                     자세히
                  </button>
                  <button onClick={() => onRemovePokemon(mon.name)} disabled={mon.disabled}>
                     제거
                  </button>
               </div>
            </div>
         </li>
         {show && <PokemonDetail mon={mon} handleClose={handleClose} show={show} />}
      </>
   )
}

export default Pokemon
