import { Link } from 'react-router-dom'
import menu from '../assets/menu.png'
import { useGetCategoriesQuery } from '../store/api'

export function SideBar(props){
    const { data, isLoading, error } = useGetCategoriesQuery()
    return (
        <div className={props.menuOpen ? 'sidebar open' : "sidebar"}>
            <img onClick={props.toggleMenu} src={menu} alt="" />
            <ul>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : error ? (
                    <h1>error</h1>
                ) : (
                    data.map((category) => {
                        return (
                            <li key={category}>
                                <Link to={category}>
                                    <p>{category.toUpperCase()}</p>
                                </Link>
                            </li>
                        )
                    })
                )}
            </ul>
        </div>
    )
}