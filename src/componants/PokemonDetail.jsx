import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'

function PokemonDetail({ mon, show, handleClose }) {
   const [gen1, gen2, gen3] = mon.gen

   return (
      <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>{mon.name}의 진화계통</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <div>
               <img src={`/images/${gen1}.png`} alt={gen1} />
               <p>{gen1}</p>
            </div>
            {gen2 ? (
               <div>
                  <img src={`/images/${gen2}.png`} alt={gen2} />
                  <p>{gen2}</p>
               </div>
            ) : (
               false
            )}
            {gen3 ? (
               <div>
                  <img src={`/images/${gen3}.png`} alt={gen3} />
                  <p>{gen3}</p>
               </div>
            ) : (
               false
            )}
         </Modal.Body>
         <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
               닫기
            </Button>
         </Modal.Footer>
      </Modal>
   )
}

export default PokemonDetail
