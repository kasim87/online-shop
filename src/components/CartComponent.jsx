import { useSelector } from "react-redux";
import { CardListPieceComponent } from "./CardListPieceComponent";
import { PaymentComponent } from "./PaymentComponent";
import { EmptyComponent } from "./EmptyComponent";

export function CartComponent(){
    let cartState = useSelector(state => state.cart)

    return (
        <div className="cart_comp">
            <h1>product cart</h1>
            <div className="cart_cont">
                <div className="cart_info">
                    <tbody>
                        <tr>
                            <td>изобрежение</td>
                            <td>Наименование</td>
                            <td>Количество</td>
                            <td>Цена</td>
                            <td>Стоимость</td>
                        </tr>
                        <tr>
                        <div className="cart_product_list">
                        {cartState.cart.length == 0 ? (
                            <EmptyComponent text='basket'></EmptyComponent>
                        ) : (
                            cartState.cart.map((productInfo) => {
                                return <CardListPieceComponent productInfo={productInfo}></CardListPieceComponent>
                            })
                        )
                    }
                        </div>
                        </tr>

                    </tbody>
                    <div className="cart_info_bot">
                        <button>Продолжить покупки</button>
                        <div className="cart_price_info_bot">
                            <h2>Итого</h2>
                            <p>{cartState.total.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <PaymentComponent total={cartState.total.toFixed(2)}></PaymentComponent>
            </div>
        </div>
    )
}