import { useSelector } from "react-redux"
import User from "./User"

function Users() {
    const users = useSelector(state => state.users.items)

    return (
        <ul className="list-group">
            {users.map(user => {
                return <User key={user.id} user={user} />
            })}
        </ul>
    )
}
export default Users