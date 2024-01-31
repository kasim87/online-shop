import { useDispatch } from 'react-redux'
import clear from '../assets/clear.png'
import { addToTotal, removeFromCart, removeFromTotal } from '../store/reducers'
import { useState } from 'react'

export function CardListPieceComponent({productInfo}){
    const dispatch = useDispatch()
    let [itemCount, setItemCount] = useState(0)
    return (
        <tr>
            <td><img className='cart_product_img' src={productInfo.image} alt="" /></td>
            <td><h3>{productInfo.title}</h3></td>

            <td className='cart_amount_info'>
                <button onClick={() => {
                if (itemCount > 0) {
                    setItemCount(itemCount -= 1)
                dispatch(removeFromTotal(productInfo.price)) }
            }} 
                style={{padding: '10px 10px'}}>-</button>
                
            <p>{itemCount} count</p>
            
            <button onClick={() => {
                setItemCount(itemCount += 1)
                dispatch(addToTotal(productInfo.price))
            }}
                style={{padding: '10px 10px'}}>+</button>
            </td>

            <td><p>{productInfo.price} $</p></td>
            <td><p>{itemCount * productInfo.price.toFixed(2)}</p></td>
            <td><img className='clear_icon' onClick={() => {
                dispatch(removeFromCart(productInfo))
                dispatch(removeFromTotal(productInfo.price * itemCount))
            }} src={clear} alt="" /></td>
        </tr>
    )
}