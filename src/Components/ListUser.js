import { Link } from "react-router-dom"

const ListUser=({users})=>{
    return(
        <div>
            {
                users.map(el=><h2><Link to={`/list/${el.id}`}>{el.name}</Link></h2>)
            }
        </div>
    )
}

export default ListUser