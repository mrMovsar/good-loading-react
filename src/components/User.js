import { Link, useParams } from 'react-router-dom';

function User(props) {
    const openedUserId = parseInt(useParams().id);

    return (
        <li className={`list-group-item ${openedUserId === props.user.id ? 'list-group-item-info' : ''}`}>
            <Link to={`/${props.user.id}`}>
                {props.user.name}
            </Link>
        </li>
    )
}

export default User