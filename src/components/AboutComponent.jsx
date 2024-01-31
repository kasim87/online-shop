import { useDispatch, useSelector } from 'react-redux'
import clear from '../assets/clear.png'
import { addToCart, removeFromCart } from '../store/reducers'

export function AboutComponent({setAboutActive, product }){
    const cartState = useSelector((state) => state.cart)
    let isInCart = cartState.cart.some((item) => item.id == product.id)
    const dispatch = useDispatch()

    return (
        <div className="about_comp">
            <img className='about_comp_img' src={product.image} alt="" />
            <div className="about_info">
                <img src={clear} onClick={() => {
                    setAboutActive(false)
                }} alt="" />
                <h1>{product.title}</h1>
                <h2>{product.category.toUpperCase()}</h2>
                <p>{product.description}</p>
                <div className="about_info_bot">
                    <h2>{product.price} $</h2>
                    <button
                        onClick={() => {
                            dispatch(isInCart ? removeFromCart(product) : addToCart(product))
                        }}
                    >{isInCart ? 'remove in basket' : 'add in basket'}</button>
                </div>
            </div>
        </div>
    )
}