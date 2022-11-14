import { useParams } from "react-router-dom"

const Profil=({users})=>{
    const {moez} =useParams()
    // console.log(useParams())
    const jib = users.find(el=> el.id == moez)
   
    return(
        <div>
            <h1>Profil</h1>
            <h2>{jib.name}</h2>
            <h3>{jib.city}</h3>
        </div>
    )
}

export default Profil