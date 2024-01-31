import cart from '../assets/shopping_bag.png'
import fav from '../assets/favorite_border.png'
import fav2 from '../assets/fav2.png'
import shopping_bag_black from '../assets/icons_bag.png'
import { RatingComponent } from './RatingComponent'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addToFav, removeFromCart, removeFromFav } from '../store/reducers'
import { AboutComponent } from './AboutComponent'
import { useState } from 'react'


export function ProductCartComponent({product}){
    const cartState = useSelector((state) => state.cart)
    const favState = useSelector((state) => state.fav)
    let isInCart = cartState.cart.some((item) => item.id == product.id)
    let isInFav = favState.fav.some((item) => item.id == product.id)
    const dispatch = useDispatch()
    let [aboutActive, setAboutActive] = useState(false)

    return (
        <div className="product_cart">
            <img className='product_image' src={product.image} alt="" />
            <div className="product_info_top">
                <div className="product_top_text">
                    <h4>{product.price}</h4>
                    <p>{product.title}</p>
                </div>
                <div className="product_top_icon">
                    <img 
                        src={isInCart ? shopping_bag_black : cart}
                        onClick={() => {
                            dispatch(isInCart ? removeFromCart(product) : addToCart(product))
                            }} alt="" />
                    <img 
                        src={isInFav ? fav2 : fav}
                        onClick={() => {
                            dispatch(isInFav ? removeFromFav(product) : addToFav(product))
                        }}
                        alt="" />
                </div>
            </div>
            <div className="product_info_bot">
                <button className="about_btn" 
                onClick={() => {
                    setAboutActive(!aboutActive)
                }}>{product.rating.count}</button>
                <RatingComponent rating={product.rating.rate}></RatingComponent>
            </div>
            {aboutActive ? <div className="blur">
                <AboutComponent
                aboutActive={aboutActive}
                setAboutActive={setAboutActive}
                product={product}
                ></AboutComponent>
            </div> : <div></div>}
        </div>
    )
}