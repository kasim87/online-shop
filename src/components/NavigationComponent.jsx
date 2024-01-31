import menu from '../assets/menu.png'
import search from '../assets/search.png'
import profile from '../assets/person_outline.png'
import cart from '../assets/shopping_bag.png'
import fav from '../assets/favorite_border.png'
import { SideBar } from './SideBar'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useGetProductsQuery } from '../store/api'
import { useDispatch } from 'react-redux'
import { addToSortContent } from '../store/reducers'

export function NavigationComponent(){
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation
    let [inputValue, setInputValue] = useState('')
    const {data} = useGetProductsQuery()
    const dispatch = useDispatch()

    function toggleMenu(){
        setMenuOpen(!menuOpen)
    }

    function handleSearch(){
        console.log(data)
        const sortArray = data.filter((item) => item.title.includes(inputValue))
        dispatch(addToSortContent(sortArray))
        console.log(sortArray)
        console.log(inputValue)
    }

    // ({props})
    // if ? ()

    return <nav>
        <div className="nav_top">
            <img onClick={toggleMenu} src={menu} alt="" />
            <div className="nav_right">
                <div className="nav_search_cont">
                    <img src={search} onClick={() => {
                        handleSearch()
                    }} alt="" />
                    <input type="text" value={inputValue}
                    
                    onChange={(e) => {
                        setInputValue(e.target.value)
                    }}
                    placeholder='search'/>
                </div>
                <div className="nav_logo_cont">
                    <Link to='/favorite'>
                        <img src={fav} alt="" />
                    </Link>
                    <img src={profile} alt="" />
                    <Link to='/cart'>
                        <img src={cart} alt="" />
                    </Link>
                </div>
            </div>
        </div>
        <SideBar menuOpen={menuOpen} toggleMenu={toggleMenu}></SideBar>
        <div className="nav_bot">
            <Link to='/'>
                <span>HOME</span>
            </Link>
            <Link to={location.pathname}>
                <span>{location.pathname}</span>
            </Link>
        </div>
    </nav>
}