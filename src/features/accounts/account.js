import { NavLink } from "react-router-dom"


export function Account({account}) {
    const { rdit, name, img} = account
    return (
        <li>
        <NavLink to={`/${rdit}`} className='account__link'>
            <img className='account__avatar' src={img} alt="user avatar" />
            {name}
        </NavLink>
      </li>
    )
}