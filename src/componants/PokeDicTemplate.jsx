function PokeDicTemplate({ children }) {
   return (
      <div className="PokeDicTemplate">
         <div className="app-title">포켓몬 도감</div>
         <div className="content">{children}</div>
      </div>
   )
}

export default PokeDicTemplate
