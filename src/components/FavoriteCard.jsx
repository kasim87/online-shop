import { RatingComponent } from "./RatingComponent";
import cart from '../assets/shopping_bag.png'
import fav from '../assets/favorite_border.png'
import fav2 from '../assets/fav2.png'
import cart2 from '../assets/icons_bag.png'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFav, removeFromCart, removeFromFav } from "../store/reducers";

export function FavoriteCard({productInfo}){
    const dispatch = useDispatch()
    const cartState = useSelector((state) => state.cart)
    const favState = useSelector((state) => state.fav)

    let isInFav = favState.fav.some((item) => item.id == productInfo.id)
    let isInCart = cartState.cart.some((item) => item.id == productInfo.id)
    
    return (
        <div className="favorite_card">
            <img className="fav_img" src={productInfo.image} alt="" />
            <div className="fav_card_right">
                <h3>{productInfo.title}</h3>
                <p>{productInfo.category}</p>
                <RatingComponent></RatingComponent>
                <div className="fav_card_bot">
                    <h2>{productInfo.price} $</h2>
                    <div className="fav_bot_icons">
                        <img src={isInCart ? cart2 : cart} 
                        onClick={() => {
                            dispatch(isInCart ? removeFromCart(productInfo) : addToCart(productInfo))
                        }} 
                        alt="" />
                        <img src={fav2}
                        onClick={() => {
                            dispatch(removeFromFav(productInfo))
                        }} 
                        alt="" />
                    </div>
                </div>
            </div>   
        </div>   
    )
}