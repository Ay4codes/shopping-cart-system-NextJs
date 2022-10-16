import {FaTimesCircle} from 'react-icons/fa'
import CartData from '../../Data/CartData'

export default function CartItem(props) {
    const {price, qty} = props
    const {CartData} = props

    function calculatePrice() {
        const calcValues = (price * qty)+'.00'
        const formatedCalcValues = Number(calcValues).toLocaleString("en-US") + '.00'
        if (calcValues == 0) {
            return Number(props.price).toLocaleString("en-US") + '.00'
        } else {
            return  formatedCalcValues
        }
    }

    function FormatQty() {
        if (qty == null) {
            return 1
        } else {
            return qty
        }
    }

    return (
        <>
            <div className="cart-item-container">
                <div className="cart-item-wrapper">
                    
                    <div className="cart-img-wrapper">
                        <div className="cart-img-inner">
                            <img src={props.img} alt="Cart-Items" />
                            <div className="cart-desc-container">
                                <h5>{props.name}</h5>
                                <div className="">
                                    <div className="cart-price-desc-wrapper"><span>Amount: <b>₦{price}</b></span></div>
                                    <div className="cart-price-desc-wrapper"><span>Qty: <b>{FormatQty()}</b></span></div>
                                    <div className="cart-price-desc-wrapper"><span>Total: <b>₦{calculatePrice()}</b></span></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <FaTimesCircle style={{fontSize: '30px', color: '#ea4c89', cursor: 'pointer'}} onClick={props.zoomOnRemoveCart} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}