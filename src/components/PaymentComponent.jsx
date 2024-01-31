

export function PaymentComponent({total}){
    return (
        <div className="payment_cont">
        <h2>Информация об оплате</h2>
        <label htmlFor="">Имя владельца карты</label>
        <input type="text" placeholder='Name'/>
        <label htmlFor="">Номер карты</label>
        <input type="text" placeholder='12 цифр'/>
        <div className="card_info_bot">
            <div className="cart_inspire_info">
            <label htmlFor="">Срок действия карты</label>
            <div className="cart_inspire_inputs">
                <input type="text" placeholder='YY'/>
                <input type="text" placeholder='MM'/>
            </div>
            </div>
            <div className="cart_cvv_info">
                <label htmlFor="">CVV</label>
                <input type="text" placeholder='code'/>
            </div>
        </div>
        <button className='pay_btn'>Подтвердить и оплатить {total} р.</button>
    </div>
    )
}